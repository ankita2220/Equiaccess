import React, { useState } from 'react';

const Employment = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [jobListings, setJobListings] = useState([]);

  const [selectedAnswer, setSelectedAnswer] = useState('');

  const selectCategory = (category) => {
    setSelectedCategory(category);
  };

  const submitRegistration = () => {
    alert(`Registration Successful:\nName: ${fullName}\nEmail: ${email}\nCategory: ${selectedCategory}`);
    setTestSubmitted(true);
  };

  const submitTest = () => {
    // Check if an answer is selected
    if (!selectedAnswer) {
      alert('Please choose an answer before submitting the test.');
      return;
    }

    // Simulated job listings (replace with actual data)
    const jobs = [
      { title: 'Web Developer', requirements: 'Experience in HTML, CSS, JavaScript', link: '' },
      { title: 'Software Engineer', requirements: 'Proficient in Python and Java', link: '' },
      // Add more job listings as needed
    ];

    setJobListings(jobs);
    setTestSubmitted(true);
    alert('Test Submitted!');
  };

  const submitJobApplication = () => {
    alert('Job Application Submitted!');
  };

  return (
    <div>
      <center>
        <header>
          <h1 style={{ fontSize: '24px' }}>Employment Opportunities</h1>
        </header>
      </center>

      <main>
        {!selectedCategory && (
          <section id="categorySelection">
            <center>
              <strong>
                <br></br>
                <br></br>
                <h2 style={{ fontSize: '20px' }}>Select Your Category</h2>
              </strong>
            </center>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button style={{ fontSize: '16px' }} onClick={() => selectCategory('blind')}>Blind</button>
              <br></br>
              <button style={{ fontSize: '16px' }} onClick={() => selectCategory('deaf')}>Deaf</button>
              <br></br>
              <button style={{ fontSize: '16px' }} onClick={() => selectCategory('dumb')}>Dumb</button>
            </div>
          </section>
        )}

        {selectedCategory && !testSubmitted && (
          <section id="registrationForm">
            <h2 style={{ fontSize: '20px' }}>Registration Form</h2>
            <form onSubmit={(e) => { e.preventDefault(); submitRegistration(); }}>
              <label htmlFor="fullName" style={{ fontSize: '16px' }}>Full Name:</label>
              <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />

              <label htmlFor="email" style={{ fontSize: '16px' }}>Email:</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

              <label htmlFor="category" style={{ fontSize: '16px' }}>Category:</label>
              <input type="text" id="category" value={selectedCategory} disabled />

              <button type="submit" style={{ marginTop: '10px', fontSize: '16px' }}>Register</button>
            </form>
          </section>
        )}

        {testSubmitted && (
          <section id="testSection">
            <h2 style={{ fontSize: '20px' }}>General Test</h2>

            {/* Question 1 */}
            <strong>
              <p style={{ fontSize: '16px' }}>Question: Choose the synonym for "collaborate":</p>
            </strong>
            <form>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value="a"
                  onChange={() => setSelectedAnswer('a')}
                  style={{ fontSize: '16px' }}
                />
                a) Work alone
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="answer"
                  value="b"
                  onChange={() => setSelectedAnswer('b')}
                  style={{ fontSize: '16px' }}
                />
                b) Cooperate
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="answer"
                  value="c"
                  onChange={() => setSelectedAnswer('c')}
                  style={{ fontSize: '16px' }}
                />
                c) Compete
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="answer"
                  value="d"
                  onChange={() => setSelectedAnswer('d')}
                  style={{ fontSize: '16px' }}
                />
                d) Isolate
              </label>
            </form>

            {/* Question 2 */}
            <strong>
              <p style={{ fontSize: '16px' }}>Question: How do you handle challenges or problem-solving?</p>
            </strong>
            <form>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value="a"
                  onChange={() => setSelectedAnswer('a')}
                  style={{ fontSize: '16px' }}
                />
                A. Independently
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="answer"
                  value="b"
                  onChange={() => setSelectedAnswer('b')}
                  style={{ fontSize: '16px' }}
                />
                B. Collaboratively with a team
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="answer"
                  value="c"
                  onChange={() => setSelectedAnswer('c')}
                  style={{ fontSize: '16px' }}
                />
                C. Seeking guidance from others
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="answer"
                  value="d"
                  onChange={() => setSelectedAnswer('d')}
                  style={{ fontSize: '16px' }}
                />
                D. All of the above
              </label>
            </form>

            {/* Question 3 */}
            <strong>
              <p style={{ fontSize: '16px' }}>Question: In a work environment, what type of accommodations would you find most helpful?</p>
            </strong>
            <form>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value="a"
                  onChange={() => setSelectedAnswer('a')}
                  style={{ fontSize: '16px' }}
                />
                A. Flexible working hours
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="answer"
                  value="b"
                  onChange={() => setSelectedAnswer('b')}
                  style={{ fontSize: '16px' }}
                />
                B. Accessible office space
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="answer"
                  value="c"
                  onChange={() => setSelectedAnswer('c')}
                  style={{ fontSize: '16px' }}
                />
                C. Assistive technology
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="answer"
                  value="d"
                  onChange={() => setSelectedAnswer('d')}
                  style={{ fontSize: '16px' }}
                />
                D. All of the above
              </label>
            </form>

            {/* Question 4 */}
            <strong>
              <p style={{ fontSize: '16px' }}>Question: You have a project deadline approaching, and you encounter an unexpected issue. What would be your approach?</p>
            </strong>
            <form>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value="a"
                  onChange={() => setSelectedAnswer('a')}
                  style={{ fontSize: '16px' }}
                />
                A. Work extra hours to meet the deadline
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="answer"
                  value="b"
                  onChange={() => setSelectedAnswer('b')}
                  style={{ fontSize: '16px' }}
                />
                B. Collaborate with team members to find a solution
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="answer"
                  value="c"
                  onChange={() => setSelectedAnswer('c')}
                  style={{ fontSize: '16px' }}
                />
                C. Inform the supervisor about the issue and discuss possible extensions
              </label>
            </form>

            {/* Question 5 */}
            <strong>
              <p style={{ fontSize: '16px' }}>Question: [Your Question Here]</p>
            </strong>
            <form>
              {/* ... (Options) */}
            </form>

            {/* Submit Test Button */}
            <button onClick={submitTest} style={{ marginTop: '10px', fontSize: '16px' }}>Submit Test</button>
          </section>
        )}

        {jobListings.length > 0 && (
          <section id="jobListings">
            <strong>
              <h2 style={{ fontSize: '20px' }}>Job Listings</h2>
            </strong>
            <div id="jobList">
              {jobListings.map((job, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                  {/* Job listing details */}
                  <a href={job.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '16px' }}>{job.title}</a>
                </div>
              ))}
            </div>
          </section>
        )}

        {jobListings.length > 0 && (
          <section id="jobApplicationForm">
            <strong>
              <h2 style={{ fontSize: '20px' }}>Job Application Form</h2>
            </strong>
            <form onSubmit={(e) => { e.preventDefault(); submitJobApplication(); }}>
              {/* Your job application form fields */}
              <button type="submit" style={{ marginTop: '10px', fontSize: '16px' }}>Submit Application</button>
            </form>
          </section>
        )}
      </main>

      <footer>
        <p>&copy; EquiAccess</p>
      </footer>
    </div>
  );
};

export default Employment;
