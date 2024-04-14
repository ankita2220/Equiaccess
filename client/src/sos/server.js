const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/sos', (req, res) => {
    const { latitude, longitude } = req.body;

    // Replace this with your logic to notify the emergency contact or take necessary actions
    console.log(`Emergency SOS received! Location: ${latitude}, ${longitude}`);

    res.json({ message: 'Emergency SOS received successfully.' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
