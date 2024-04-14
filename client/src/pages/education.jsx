import React, { useState } from 'react';

function Education() {
  const [category, setCategory] = useState('');
  const [schoolListVisible, setSchoolListVisible] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [registrationFormVisible, setRegistrationFormVisible] = useState(false);

  const schoolsData = [
    {
      name: 'School A',
      contact: '123-456-7890',
      location: 'City A',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo ac orci malesuada tincidunt. Proin rhoncus venenatis ex, vel bibendum urna semper non.',
      achievements: ['First Place in Science Fair', 'Top Performer in Math Olympiad'],
      photos: ['student1.jpg', 'student2.jpg']
    },
    {
      name: 'School B',
      contact: '987-654-3210',
      location: 'City B',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo ac orci malesuada tincidunt. Proin rhoncus venenatis ex, vel bibendum urna semper non.',
      achievements: ['Champion in Robotics Competition', 'Excellence in Literature Award'],
      photos: ['student3.jpg', 'student4.jpg']
    },
    // Add more schools as needed
  ];

  const showSchools = () => {
    if (category) {
      setSchoolListVisible(true);
    }
  };

  const showDetails = (index) => {
    setSelectedSchool(schoolsData[index]);
  };

  const showRegistrationForm = () => {
    setRegistrationFormVisible(true);
  };

  const goBack = () => {
    setSelectedSchool(null);
    setRegistrationFormVisible(false);
    setSchoolListVisible(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here

    // Show an alert after successful form submission
    alert('Form submitted successfully!');
  };

  return (
    <div className="container">
      <strong> <center>  <h1>Educational Facilities for the Disabled</h1></center> </strong>  
      <form id="categoryForm">
        <label>
          <input type="radio" name="category" value="deaf" onChange={() => setCategory('deaf')} required />
          Deaf
          <br></br>
        </label>
        <label>
          <input type="radio" name="category" value="blind" onChange={() => setCategory('blind')} required />
          Blind
        </label>
        <br></br>
        <br></br>
        <button type="button" onClick={showSchools}>Show Schools</button>
        <br></br>
        <br></br>
      </form>

      {schoolListVisible && (
        <div id="schoolList">
          <strong> <h2>Schools for the Disabled</h2></strong>  
          <div id="schools">
            {schoolsData.map((school, index) => (
              <div key={index} className="school">
                <h3>{school.name}</h3>
                <br></br>
                <p>Contact: {school.contact}</p>
                <br></br>
                <p>Location: {school.location} </p>
                <button onClick={() => showDetails(index)}>View More</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedSchool && (
        <div id="detailedView">
          <h2>{selectedSchool.name}</h2>
          <p>{selectedSchool.about}</p>
          <br></br>
          <h3>Achievements</h3>
          <div id="achievements" className="achievements">
            {selectedSchool.achievements.map((achievement, i) => (
              <div key={i} className="achievement">
                <p>{achievement}</p>
                <img src={selectedSchool.photos[i]} alt="Student Photo" />
              </div>
            ))}
          </div>
          <button onClick={showRegistrationForm}>Apply</button>
          <button onClick={goBack}>Go Back</button>
        </div>
      )}

      {registrationFormVisible && (
        <div id="registrationForm">
          <h2>Registration Form</h2>
          <form id="applyForm" onSubmit={handleFormSubmit}>
            <div className="form-columns">
              <div className="form-column">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className="form-column">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
              <div className="form-column">
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob" name="dob" required />
              </div>
              <div className="form-column">
                <label htmlFor="nationality">Nationality</label>
                <input type="text" id="nationality" name="nationality" required />
              </div>
              <div className="form-column">
                <label htmlFor="fatherName">Father's Name</label>
                <input type="text" id="fatherName" name="fatherName" required />
              </div>
              <div className="form-column">
                <label htmlFor="motherName">Mother's Name</label>
                <input type="text" id="motherName" name="motherName" required />
              </div>
              <div className="form-column">
                <label htmlFor="address">Address</label>
                <textarea id="address" name="address" required></textarea>
              </div>
              <div className="form-column">
                <label htmlFor="state">State</label>
                <input type="text" id="state" name="state" required />
              </div>
              <div className="form-column">
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" required />
              </div>
              <div className="form-column">
                <label htmlFor="pincode">Pincode</label>
                <input type="text" id="pincode" name="pincode" required />
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Education;
