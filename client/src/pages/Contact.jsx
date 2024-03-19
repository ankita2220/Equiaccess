import React, { useEffect } from 'react';
 import { useState } from 'react';


// const Contact = () => {

    

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-fixed-top">
//         {/* ... (your navigation code) ... */}
//       </nav>

//       <div className="contact-form-page">
//         <div className="width80">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12">
//                 <div className="section-heading-block">
//                   <h4 className="section-title text-light">Contact Us</h4>
//                 </div>
//                 <div role="form" className="wpcf7" id="wpcf7-f90-o1" lang="en-US" dir="ltr">
//                   {/* ... (your contact form code) ... */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="section address-block" style={{ background: '#21212B' }}>
//           <div className="container">
//             <div className="row align-items-center justify-content-between ">
//               {/* ... (your address and contact information) ... */}
//             </div>
//           </div>
//         </div>
//       </div>

//       <footer>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-4">
//               <h6>
//                 <a className="navbar-brand" href="#">
//                   Laany.
//                 </a>
//               </h6>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quaerat inventore,
//                 excepturi esse voluptates et quae ut optio quibusdam.
//               </p>
//               <p>Eligendi libero modi nisi aut veniam obcaecati? Dolorem minima quae dolore!</p>
//             </div>

//             <div className="offset-md-1 col-md-2">
//               <h6>Pages</h6>
//               <ul className="p-0">
//                 <li>
//                   <a href="" className="active">
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">Elements</a>
//                 </li>
//                 {/* ... (rest of your pages) ... */}
//               </ul>
//             </div>

//             <div className="col-md-4">
//               <h6>Follow Us</h6>
//               <div className="social-icons">
//                 <a>
//                   <i className="fab fa-facebook" aria-hidden="true"></i>
//                 </a>
//                 <a>
//                   <i className="fab fa-twitter" aria-hidden="true"></i>
//                 </a>
//                 {/* ... (rest of your social icons) ... */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Contact;
// ... (your existing imports)

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { fullName, email, message });
  };

  return (
    <section className="contact-us-page">
      <div className="container">
        <div className="row">
          <div className="contact-info">
            {/* ... (your existing contact info code) */}
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit} id="contact-form">
   <strong>   <center>   <h2>Send Message</h2></center>   </strong>  
              <div className="input-box">
              <span>Full Name</span>
                <input
                  type="text"
                  required={true}
                  name="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
             
              </div>

              <div className="input-box">
              <span>Email</span>
                <input
                  type="email"
                  required={true}
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              
              </div>

              <div className="input-box">
              <span>Type your Message...</span>
                <textarea
                  required={true}
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
            
              </div>

              <div className="input-box">
              <strong> <input type="submit" value="Send" /></strong>  
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


// import React from 'react';
// import { useState } from 'react';
// import './Contact.css';

// const Contact = () => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');


//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Add logic for handling form submission
//     // You can use the state variables (fullName, email, message) here
//     console.log('Form submitted:', { fullName, email, message });
//   };

//   return (
   
  
    
//           <div className="contact-form">
//             <form onSubmit={handleSubmit} id="contact-form">
//           <strong> <h2>Send Message</h2></strong>    
//               <div className="input-box">
//                 <input
//                   type="text"
//                   required={true}
//                   name="fullName"
//                   value={fullName}
//                   onChange={(e) => setFullName(e.target.value)}
//                 />
//                 <span>Full Name</span>
//               </div>

//               <div className="input-box">
//                 <input
//                   type="email"
//                   required={true}
//                   name="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <span>Email</span>
//               </div>

//               <div className="input-box">
//                 <textarea
//                   required={true}
//                   name="message"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                 ></textarea>
//                 <span>Type your Message...</span>
//               </div>

//               <div className="input-box">
//                 <input type="submit" value="Send" />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

//  // ContactUsPage.jsx
// // import React, { useState } from 'react';
// // import './contact.css'; // Assuming your CSS file is in the same directory

// // // Rest of your React component code



// // const ContactUsPage = () => {
// //   // State for form inputs
// //   const [fullName, setFullName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [message, setMessage] = useState('');

// //   // Function to handle form submission
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Perform actions with form data (e.g., send data to server, validation, etc.)
// //     console.log('Form submitted:', { fullName, email, message });
// //     // Reset form fields
// //     setFullName('');
// //     setEmail('');
// //     setMessage('');
// //   };

// //   return (
// //     <section>
// //       {/* ... (your existing code) */}
// //       <div className="contact-form">
// //         <form onSubmit={handleSubmit} id="contact-form">
// //           <h2>Send Message</h2>
// //           {/* Input for Full Name */}
// //           <div className="input-box">
// //             <input
// //               type="text"
// //               required
// //               name="fullName"
// //               value={fullName}
// //               onChange={(e) => setFullName(e.target.value)}
// //             />
// //             <span>Full Name</span>
// //           </div>

// //           {/* Input for Email */}
// //           <div className="input-box">
// //             <input
// //               type="email"
// //               required
// //               name="email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //             />
// //             <span>Email</span>
// //           </div>

// //           {/* Textarea for Message */}
// //           <div className="input-box">
// //             <textarea
// //               required
// //               name="message"
// //               value={message}
// //               onChange={(e) => setMessage(e.target.value)}
// //             ></textarea>
// //             <span>Type your Message...</span>
// //           </div>

// //           {/* Submit Button */}
// //           <div className="input-box">
// //             <input type="submit" value="Send" />
// //           </div>
// //         </form>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ContactUsPage;