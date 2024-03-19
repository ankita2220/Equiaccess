import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import HostPage from "./HostPage";
import AccountNav from "../AccountNav";

export default function ProfilePage() {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);
  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ ...user });
  const [profilePhotoFile, setProfilePhotoFile] = useState(null);

  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = 'profile';
  }

  async function logout() {
    await axios.post('/logout');
    setRedirect('/');
    setUser(null);
  }

  const handleUpdateProfile = async () => {
    try {
      // Perform the update request to your server
      const response = await axios.put('/update-profile', updatedUser);

      // Check if the profile photo needs to be updated
      if (profilePhotoFile) {
        const formData = new FormData();
        formData.append('profilePhoto', profilePhotoFile);

        // Upload the new profile photo
        await axios.post('/upload-profile-photo', formData);

        // You may also want to update the user object with the new photo URL
        // Example: setUser({ ...user, profilePhoto: response.data.profilePhoto });
      }

      setEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle error (display a message, etc.)
    }
  };

  if (!ready) {
    return 'Loading...';
  }

  if (ready && !user && !redirect) {
    return <Navigate to={'/login'} />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div>
      <AccountNav />
      {subpage === 'profile' && (
        <div className="text-center max-w-lg mx-auto">
          {editing ? (
            <>
              {/* Existing fields */}
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={updatedUser.name}
                  onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={updatedUser.email}
                  onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="bio">Bio:</label>
                <textarea
                  id="bio"
                  value={updatedUser.bio}
                  onChange={(e) => setUpdatedUser({ ...updatedUser, bio: e.target.value })}
                />
              </div>

              {/* Additional fields */}
              <div>
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="text"
                  id="phone"
                  value={updatedUser.phone}
                  onChange={(e) => setUpdatedUser({ ...updatedUser, phone: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="disability">Disability Type:</label>
                <input
                  type="text"
                  id="disability"
                  value={updatedUser.disability}
                  onChange={(e) => setUpdatedUser({ ...updatedUser, disability: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="emergencyContact">Emergency Contact:</label>
                <input
                  type="text"
                  id="emergencyContact"
                  value={updatedUser.emergencyContact}
                  onChange={(e) => setUpdatedUser({ ...updatedUser, emergencyContact: e.target.value })}
                />
              </div>

              {/* Save Changes button */}
              <button onClick={handleUpdateProfile} className="primary mt-2">
                Save Changes
              </button>
            </>
          ) : (
            <>
              {/* Display fields */}
              {user.profilePhoto && (
                <img
                  src={user.profilePhoto}
                  alt={`${user.name}'s profile`}
                  className="rounded-full w-20 h-20 mx-auto mb-4"
                />
              )}
              <h5>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Bio: {user.bio}</p>
                <p>Phone Number: {user.phone}</p>
                <p>Disability Type: {user.disability}</p>
                <p>Emergency Contact: {user.emergencyContact}</p>
              </h5>

              {/* Edit Profile and Logout buttons */}
              <button onClick={() => setEditing(true)} className="primary max-w-sm mt-2">
                Edit Profile
              </button>
              <button onClick={logout} className="primary max-w-sm mt-2">
                Logout
              </button>
            </>
          )}
        </div>
      )}
      {subpage === 'hosted' && (
        <HostPage />
      )}
    </div>
  );
}








// import { useContext } from "react";
// import { useState } from "react";
// import { UserContext } from "../UserContext";
// import { Navigate, useParams } from "react-router-dom";
// import axios from "axios";
// import HostPage from "./HostPage";
// import AccountNav from "../AccountNav";

// export default function ProfilePage() {
//     const [redirect, setRedirect] = useState(null);
//     const { ready, user, setUser } = useContext(UserContext);
//     let { subpage } = useParams();
//     if (subpage === undefined) {
//         subpage = 'profile';
//     }

//     async function logout() {
//         await axios.post('/logout');
//         setRedirect('/');
//         setUser(null);
//     }
      
//     if (!ready) {
//         return 'Loading...';
//     }

//     if (ready && !user && !redirect) {
//         return <Navigate to={'/login'} />
//     }

//     if (redirect) {
//         return <Navigate to={redirect} />
//     }

//     return (
//         <div>
//             <AccountNav />
//             {subpage === 'profile' && (
//                 <div className="text-center max-w-lg mx-auto">
//                     Logged in as {user.name} ({user.email})<br />
//                     <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
//                 </div>
//             )}
//             {subpage === 'hosted' && (
//                 <HostPage />
//             )}
//         </div>
//     );
// }


// // ProfilePage.js
// import React, { useState, useEffect } from 'react';

// const ProfilePage = () => {
//   // Initialize state variables for each input field
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [address, setAddress] = useState('');
//   const [phone, setPhone] = useState('');
//   const [emergencyContact, setEmergencyContact] = useState('');
//   const [disabilityType, setDisabilityType] = useState('');
//   const [disabilityDuration, setDisabilityDuration] = useState('');

//   useEffect(() => {
//     // Load user profile data from local storage on component mount
//     const userProfile = JSON.parse(localStorage.getItem('userProfile')) || {};
//     setName(userProfile.name || '');
//     setAge(userProfile.age || '');
//     setAddress(userProfile.address || '');
//     setPhone(userProfile.phone || '');
//     setEmergencyContact(userProfile.emergencyContact || '');
//     setDisabilityType(userProfile.disabilityType || '');
//     setDisabilityDuration(userProfile.disabilityDuration || '');
//   }, []);

//   const saveProfile = () => {
//     // Save user profile data to local storage
//     const userProfile = {
//       name,
//       age,
//       address,
//       phone,
//       emergencyContact,
//       disabilityType,
//       disabilityDuration,
//     };
//     localStorage.setItem('userProfile', JSON.stringify(userProfile));
//   };

//   return (
//     <div>
//       <h1>My Profile</h1>
//       <form>
//         <label>Name:</label>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

//         <label>Age:</label>
//         <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />

//         <label>Address:</label>
//         <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />

//         <label>Phone:</label>
//         <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />

//         <label>Emergency Contact:</label>
//         <input
//           type="text"
//           value={emergencyContact}
//           onChange={(e) => setEmergencyContact(e.target.value)}
//         />

//         <label>Disability Type:</label>
//         <input
//           type="text"
//           value={disabilityType}
//           onChange={(e) => setDisabilityType(e.target.value)}
//         />

//         <label>Disability Duration:</label>
//         <input
//           type="text"
//           value={disabilityDuration}
//           onChange={(e) => setDisabilityDuration(e.target.value)}
//         />

//         <button type="button" onClick={saveProfile}>
//           Save Profile
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ProfilePage;