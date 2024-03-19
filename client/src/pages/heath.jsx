import React, { useState } from 'react';

const HospitalList = () => {
  const [category, setCategory] = useState('');
  const [hospitalListVisible, setHospitalListVisible] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(null);

  const hospitalsData = {
    jaypee: {
      name: 'Jaypee Hospital',
      contact: '9987776644',
      email: 'jaypeehospital@gmail.com',
      about: 'Jaypee Hospital is a leading healthcare center dedicated to providing high-quality medical services.',
      treatments: ['Orthopedics', 'Cardiology', 'Neurology'],
      services: '24/7 Emergency Services',
    },
    paras: {
      name: 'Paras Hospital',
      contact: '4566645467',
      email: 'parashospitals@gmail.com',
      about: 'Paras Hospital is committed to delivering comprehensive healthcare services with a focus on patient well-being.',
      treatments: ['Pediatrics', 'Dermatology', 'Oncology'],
      services: 'Advanced Surgical Procedures',
    },
    fortis: {
      name: 'Fortis Hospital',
      contact: '8877668997',
      email: 'fortishospital@gmail.com',
      about: 'Fortis Hospital is dedicated to providing compassionate care for individuals with mental disabilities.',
      treatments: ['Psychiatry', 'Counseling', 'Behavioral Therapy'],
      services: 'Mental Health Support Programs',
    },
    medanta: {
      name: 'Medanta Hospital',
      contact: '234567883',
      email: 'medanta@gmail.com',
      about: 'Medanta Hospital is committed to enhancing the mental well-being of patients through innovative treatments and personalized care.',
      treatments: ['Psychiatric Evaluation', 'Psychotherapy', 'Mindfulness Programs'],
      services: 'Integrated Mental Health Services',
    },
    // Add more hospitals as needed
  };

  const showHospitals = () => {
    if (category) {
      setHospitalListVisible(true);
    }
  };

  const showDetails = (hospitalKey) => {
    setSelectedHospital(hospitalsData[hospitalKey]);
  };

  const goBack = () => {
    setSelectedHospital(null);
    setHospitalListVisible(false);
  };

  return (
    <div className="container">
      <h1>Healthcare Centers for the Disabled</h1>

      {/* Category Selection */}
      <form id="categoryForm">
        <label>
          <input type="radio" name="diseaseCategory" value="physical" onChange={() => setCategory('physical')} required />
          Physical Disability
        </label>
        <label>
          <input type="radio" name="diseaseCategory" value="mental" onChange={() => setCategory('mental')} required />
          Mental Disability
        </label>
        <button type="button" onClick={showHospitals}>Show Hospitals</button>
      </form>

      {/* Hospital List */}
      {hospitalListVisible && (
        <div id="hospitalList">
          <h2>Hospitals for the Disabled</h2>
          <div id="hospitals">
            {Object.keys(hospitalsData).map((key) => (
              <div key={key} className="hospital">
                <h3>{hospitalsData[key].name}</h3>
                <p>Contact: {hospitalsData[key].contact}</p>
                <p>Email: {hospitalsData[key].email}</p>
                <button onClick={() => showDetails(key)}>View More</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Detailed View */}
      {selectedHospital && (
        <div id="detailedView">
          <h2>{selectedHospital.name}</h2>
          <p>{selectedHospital.about}</p>
          <p>Contact: {selectedHospital.contact}</p>
          <h3>Treatments</h3>
          <ul>
            {selectedHospital.treatments.map((treatment, index) => (
              <li key={index}>{treatment}</li>
            ))}
          </ul>
          <h3>Services</h3>
          <p>{selectedHospital.services}</p>
          <button onClick={goBack}>Go Back</button>
        </div>
      )}
    </div>
  );
};

export default HospitalList;
 
 
 
 
 
 
 // Health.jsx
// import React, { useState } from 'react';

// const health= () => {
//   const [selectedHospital, setSelectedHospital] = useState(null);

//   const handleHospitalSelect = (hospital) => {
//     setSelectedHospital(hospital);
//   };

//   const HospitalFinder = () => {
//     const [selectedLocation, setSelectedLocation] = useState('');

//     const handleSubmit = (e) => {
//       e.preventDefault();
//       // Fetch hospital details based on selectedLocation (you may need to implement this)
//       const selectedHospital = fetchHospitalDetails(selectedLocation);
//       handleHospitalSelect(selectedHospital);
//     };

//     const fetchHospitalDetails = (location) => {
//       // You need to implement the logic to fetch hospital details based on the location
//       // This could involve an API call or retrieving data from your database
//       // For now, let's assume a simple example with static data
//       return {
//         name: 'City Hospital',
//         location: selectedLocation,
//         // Add more details as needed
//       };
//     };

//     return (
//       <div className="section">
//         <h2>Find Nearest Hospital</h2>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="location">Select Your Location:</label>
//           <select
//             id="location"
//             name="location"
//             value={selectedLocation}
//             onChange={(e) => setSelectedLocation(e.target.value)}
//           >
//             <option value="location1">Location 1</option>
//             <option value="location2">Location 2</option>
//             <option value="location3">Location 3</option>
//             {/* Add more location options as needed */}
//           </select>

//           <input type="submit" value="Find Hospital" />
//         </form>
//       </div>
//     );
//   };

//   const HospitalDetails = ({ hospital }) => {
//     return (
//       <div className="section">
//         <h1>Welcome to {hospital.name}</h1>
//         <p>Providing quality healthcare...</p>
//         <p>Emergency Contact: 123-456-7890</p>
//         {/* Add more details as needed */}
//       </div>
//     );
//   };

//   return (
//     <div className="container">
//       {selectedHospital ? (
//         <HospitalDetails hospital={selectedHospital} />
//       ) : (
//         <HospitalFinder />
//       )}
//     </div>
//   );
// };

// export default health;