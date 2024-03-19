const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const Hosted = require("./models/Hosted");
const Participated = require("./models/Participated");
const Reminder = require("./models/Reminder");
const Admin = require("./models/admin");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const imageDownloader = require('image-downloader');
const multer = require('multer');
const fs = require('fs');

require('dotenv').config()
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'bksdfb2h832h8932';

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to MongoDB');
  });
  
  mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
  });
  
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected from MongoDB');
  });
  


app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

mongoose.connect(process.env.MONGO_URL);


function getUserDataFromReq(req) {
    return new Promise((resolve, reject) => { // Corrected syntax here
        jwt.verify(req.cookies.token, jwtSecret, {}, async (err, userData) => {
            if (err) {
                reject(err); // Reject the promise with the error if verification fails
            } else {
                resolve(userData); // Resolve with the user data if verification is successful
            }
        });
    });
}


app.get("/test", (req, res) => {
    res.json("test ok");
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userDoc = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt),
        });
        res.json(userDoc);
    }
    catch (e) {
        res.status(422).json(e);
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const userDoc = await User.findOne({ email: email });
    if (userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if (passOk) {
            jwt.sign({
                email: userDoc.email,
                id: userDoc._id
            }, jwtSecret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(userDoc);
            });//callback
        }
        else {
            res.status(422).json('pass not ok');
        }
    }
    else {
        res.json('not found');
    }
});

app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err;
            const { name, email, _id } = await User.findById(userData.id);
            res.json({ name, email, _id });
        });
    }
    else {
        res.json(null);
    }
});

app.post('/logout', (req, res) => {
    res.cookie('token', '').json(true);
});

app.post('/upload-by-link', async (req, res) => {
    const { link } = req.body;
    const newName = 'photo' + Date.now() + '.jpg';
    await imageDownloader.image({
        url: link,
        dest: __dirname + '/uploads/' + newName,
    });
    res.json(newName);
});

const photosMiddleware = multer({ dest: 'uploads/' });

app.post('/upload', photosMiddleware.array('photos', 100), async (req, res) => {
    var uploadedFiles = [];
    for (let i = 0; i < req.files.length; i++) {
        const { path, originalname } = req.files[i];
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        const newPath = path + '.' + ext;
        fs.renameSync(path, newPath);
        uploadedFiles.push(newPath.replace('uploads\\', ''));
    }
    res.json(uploadedFiles);
});

app.post('/hosted', async (req, res) => {
    const { token } = req.cookies;
    const {
        title, venue, addedPhotos, description,
        perks, extraInfo, time, date
    } = req.body;
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if (err) throw err;
        const Hosteddoc = await Hosted.create({
            owner: userData.id,
            title, venue, photos: addedPhotos, description,
            perks, extraInfo, time, date
        });
        res.json(Hosteddoc);
    });
});

app.get('/hosted', async (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (userData) {
        const { id } = userData;
        res.json(await Hosted.find({ owner: id }));
      } else {
        // Handle the case when userData is undefined
        res.status(401).json({ error: 'Unauthorized' });
      }
    });
  });
  
app.get('/hosted/:id', async (req, res) => {
    const { id } = req.params;
    res.json(await Hosted.findById(id));
});

app.put('/hosted', async (req, res) => {
    const { token } = req.cookies;
    const {
        id, title, venue, addedPhotos, description,
        perks, extraInfo, time, date
    } = req.body;
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if (err) throw err;
        const hostDoc = await Hosted.findById(id);
        if (userData.id === hostDoc.owner.toString()) {
            hostDoc.set({
                title, venue, photos: addedPhotos, description,
                perks, extraInfo, time, date
            });
            await hostDoc.save();
            res.json('ok');
        }
    });
});

app.get('/user-hosted', async (req, res) => {
    try {
      const hostedEvents = await Hosted.find();
      res.json(hostedEvents);
    } catch (error) {
      console.error(error); // Log any potential errors
      res.status(500).json({ error: 'Server error' });
    }
});



app.get('/hosted', async (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) {
        // Handle JWT verification error (e.g., invalid or expired token)
        console.error('JWT verification error:', err);
        return res.status(401).json({ error: 'Unauthorized' });
      }
  
      // Proceed with extracting 'id' from 'userData'
      const { id } = userData;
  
      // Continue with your logic
      res.json(await Hosted.find({ owner: id }));
    });
  });
  

  app.get('/participated', async (req, res) => {
    const userData = await getUserDataFromReq(req);
    res.json(await Participated.find({ user: userData.id }).populate('host'));
});

app.post('/participated', async (req, res) => {
    const userData = await getUserDataFromReq(req)
    const {
        host, name, whatsappNo
    } = req.body;
    Participated.create({
        host,
        name,
        whatsappNo,
        user: userData.id,
    }).then((doc) => {
        res.json(doc);
    }).catch((err) => {
            console.error('Error:', err);
            res.status(500).json({ error: 'An error occurred while creating the document.' });
        });
});



app.get("/getAllReminder", (req, res) => {
    Reminder.find({})
        .then(reminderList => {
            res.send(reminderList);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("An error occurred while fetching reminders.");
        });
});

app.post("/addReminder", (req, res) => {
    const { reminderMsg, remindAt } = req.body;
    const reminder = new Reminder({
        reminderMsg,
        remindAt,
        isReminded: false
    });
    reminder.save()
        .then(savedReminder => {
            // Successfully saved, handle the response here
            Reminder.find({})
                .then(reminderList => {
                    res.send(reminderList);
                })
                .catch(err => {
                    console.log(err);
                });
        })
        .catch(err => {
            console.log(err);
        });
});

app.post("/deleteReminder", (req, res) => {
    Reminder.deleteOne({_id: req.body.id}, () => {
        Reminder.find({}, (err, reminderList) => {
            if(err){
                console.log(err)
            }
            if(reminderList){
                res.send(reminderList)
            }
        })
    })
});

const getAdmins = async (req, res) => {
    try {
        const _data = await Admin.find({});
        if (_data) {
            // console.log('Admin data:', _data);
            return res.send({ code: 200, message: 'success', data: _data });
        } else {
            return res.send({ code: 500, message: 'Service error' });
        }
    } catch (error) {
        console.error('Error in getAdmins:', error);
        return res.status(500).send({ code: 500, message: 'Internal Server Error' });
    }
};

const addAdmins = async (req, res) => {
    const { userName, password, type, society } = req.body;
    try {
        let adminData = { userName, password, type };

        if (type === 'head') {
            adminData.society = society;
        }

        const _res = await Admin.create(adminData);

        if (_res) {
            // console.log('Admin data:', _res);
            return res.send({ code: 200, message: 'success' });
        } else {
            return res.send({ code: 500, message: 'Service error' });
        }
    } catch (error) {
        console.error('Error in addAdmins:', error);
        return res.status(500).send({ code: 500, message: 'Internal Server Error' });
    }
};


app.post('/admin/add', async (req, res) => {
    try {
        const { userName, password, type, society } = req.body;

        const newAdmin = new Admin({ userName, password, type, society });
        await newAdmin.save();
        res.json({ success: true});
    } catch (error) {
        console.error('Error saving admin to the database:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});


app.get("/admin/admins", getAdmins);
app.get("/admin/add", addAdmins);

app.listen(4000);