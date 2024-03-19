// AboutUsComponent.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      <header>
        {<h1>About Us</h1>}
      </header>

      <section className="ABOUT_US" style={{ textAlign: 'center' }}>
        <div className="container">

          <p>
            At EquiAccess, we believe that accessibility is not just a necessity; it's a right. Our mission is to create a world where every individual, regardless of their abilities, can access public spaces with ease and dignity. We're passionate about leveraging technology to break down barriers and promote inclusivity.
          </p>
        </div>
      </section>

      {/* Motivation Section */}
      <section className="motivation" style={{ textAlign: 'center' }}>
        <div className="container">
          <center>
            <h1>ABOUT OUR PLATFORM</h1>
          </center>
          <p>
          EquiAccess is a groundbreaking platform dedicated to fostering inclusivity and accessibility for all. Seamlessly connecting individuals with diverse abilities to a spectrum of opportunities, EquiAccess is the catalyst for an empowered, unified community. This website aims to be a beacon of empowerment and inclusivity for the disabled community in India. 

Through this initiative, we acknowledge the challenges faced by disabled individuals and strive to empower them with the resources needed for a better life. We stand as a testament to our commitment to fostering inclusivity, breaking down barriers, and enhancing the overall quality of life for people with disabilities. It is not just a digital platform; it is a step towards building a more compassionate and accessible world where everyone, regardless of their abilities, has the opportunity to thrive.
    </p>    </div>
      </section>

      {/* Helping Hands Section */}
      <br>
      </br>
      <section className="helping-hands" style={{ textAlign: 'center' }}>
        <div className="container">
        
      <center>
        <h2>Helping Hands</h2></center>   
          <p>  <br>
          </br>
          <br></br>
          <br>
          </br>
          <br></br>

            Connect with us on LinkedIn for more updates and opportunities to make a difference:
            <a href="https://www.linkedin.com/in/your-linkedin-profile-1" target="_blank" rel="noopener noreferrer">LinkedIn Profile 1</a><br />
            <a href="https://www.linkedin.com/in/your-linkedin-profile-2" target="_blank" rel="noopener noreferrer">LinkedIn Profile 2</a><br />
            <a href="https://www.linkedin.com/in/your-linkedin-profile-3" target="_blank" rel="noopener noreferrer">LinkedIn Profile 3</a>
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" style={{ textAlign: 'center' }}>
        <div className="container">
    <center>  <h2>Contact</h2></center>    
          <div>
            <p>
              For inquiries, please email us at: <a href="mailto:info@equiaccess.com">info@equiaccess.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="container">
          {/* Add your footer content, such as copyright information */}
     <center>    <h1><strong>ABOUT OUR PLATFORM</strong></h1></center>
          <p>
            EquiAccess is driven by a profound commitment to equality and the inherent rights of individuals with disabilities. Motivated by the belief that accessibility is not just a necessity but a fundamental right, the project seeks to break down physical and informational barriers, preserving the dignity of individuals and empowering them to navigate public spaces independently. Beyond its technological innovations, EquiAccess is a community-driven initiative fostering connections, sharing experiences, and advocating for a more inclusive world. It envisions a movement towards a society where accessibility is the norm, inviting individuals to join in creating public spaces that are welcoming, diverse, and accessible for everyone.
          </p>

       <center><strong><h2>Helping Hands</h2></strong>  </center>
          <p>
            Connect with us on LinkedIn for more updates and opportunities to make a difference:<br></br><br></br>
            <a href="https://www.linkedin.com/in/your-linkedin-profile-1" target="_blank" rel="noopener noreferrer">LinkedIn Profile 1</a><br />
            <a href="https://www.linkedin.com/in/your-linkedin-profile-2" target="_blank" rel="noopener noreferrer">LinkedIn Profile 2</a><br />
            <a href="https://www.linkedin.com/in/your-linkedin-profile-3" target="_blank" rel="noopener noreferrer">LinkedIn Profile 3</a>
          </p>
          
          {/* Contact Information */}
          <section className="contact-info">
       <center>  <strong>  <h2>Contact</h2></strong></center>
            <div>
              <p>
                For inquiries, please email us at: <a href="mailto:info@equiaccess.com">info@equiaccess.com</a>
              </p>
            </div>
          </section>

          <p>&copy; 2023 EquiAccess. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;


// //import React from 'react';
// // Make sure to adjust the path accordingly

// // Create the AboutUs component
// const About = () => {
//   return (
//     <div>
//       {/* Header Section */}
//       <header>
//         {/* Add navigation or header content here */}
//       </header>

//       {/* About Us Section */}
//       <section className="about-us" style={{ textAlign: 'center' }}>
//         <div className="container">
//           <h1>About Us</h1>
//           <p>
//             At EquiAccess, we believe that accessibility is not just a necessity; it's a right. Our mission is to create a world where every individual, regardless of their abilities, can access public spaces with ease and dignity. We're passionate about leveraging technology to break down barriers and promote inclusivity.
//           </p>
//         </div>
//       </section>

//       {/* Motivation Section */}
//       <section className="motivation" style={{ textAlign: 'center' }}>
//         <div className="container">
//           <h1>MOTIVATION</h1>
//           <p>
//             EquiAccess is driven by a profound commitment to equality and the inherent rights of individuals with disabilities. Motivated by the belief that accessibility is not just a necessity but a fundamental right, the project seeks to break down physical and informational barriers, preserving the dignity of individuals and empowering them to navigate public spaces independently. Beyond its technological innovations, EquiAccess is a community-driven initiative fostering connections, sharing experiences, and advocating for a more inclusive world. It envisions a movement towards a society where accessibility is the norm, inviting individuals to join in creating public spaces that are welcoming, diverse, and accessible for everyone.
//           </p>
//         </div>
//       </section>
// <footer>
//       {/* Helping Hands Section */}
//       <section className="helping-hands" style={{ textAlign: 'center' }}>
//         <div className="container">
//           <h2>Helping Hands</h2>
          
//           <p>
//   Connect with us on LinkedIn for more updates and opportunities to make a difference:
//   <a href="https://www.linkedin.com/in/your-linkedin-profile-1" target="_blank" rel="noopener noreferrer">LinkedIn Profile 1</a><br />
//   <a href="https://www.linkedin.com/in/your-linkedin-profile-2" target="_blank" rel="noopener noreferrer">LinkedIn Profile 2</a><br />
//   <a href="https://www.linkedin.com/in/your-linkedin-profile-3" target="_blank" rel="noopener noreferrer">LinkedIn Profile 3</a>
// </p>

//         </div>
//       </section>
// </footer>
//       {/* Footer Section */}
//       <footer>
//         <div className="container">
//           {/* Add your footer content, such as copyright information */}
//           <p>&copy; 2023 EquiAccess. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default About;







// // // AboutUs.jsx
// // import React from 'react';
// // import './About.css'; // Assuming your CSS file is in the same directory

// // const AboutUs = () => {
// //   return (
// //     <>
// //       <header>
// //         {/* Add navigation or header content here */}
// //       </header>

// //       <section className="about-us">
// //         <div className="container">
// //           <h1>About Us</h1>
// //           <p>
// //             At EquiAccess, we believe that accessibility is not just a necessity; it's a right. Our mission is to create a world where every individual, regardless of their abilities, can access public spaces with ease and dignity. We're passionate about leveraging technology to break down barriers and promote inclusivity.
// //           </p>
// //         </div>
// //       </section>

// //       <section className="what-we-do">
// //         <div className="container">
// //           <h2>What We Do?</h2>
// //           <p>
// //             Our platform is a comprehensive resource dedicated to enhancing accessibility in public spaces. We provide a user-friendly web portal that empowers individuals to discover, share, and navigate accessible locations seamlessly. Whether you're searching for wheelchair-friendly ramps, hearing aid loop systems, or sensory-friendly environments, EquiAccess is your guide to inclusive experiences.
// //           </p>
// //         </div>
// //       </section>

// //       <section className="why-it-matters">
// //         <div className="container">
// //           <h2>Why It Matters?</h2>
// //           <p>
// //             We recognize that accessibility is more than just physical accommodations; it's about fostering a sense of belonging. Our platform isn't just about locations; it's about people. We're building a community where users can share their experiences, offer recommendations, and advocate for a more inclusive world.
// //           </p>
// //         </div>
// //       </section>

// //       <section className="join-us">
// //         <div className="container">
// //           <h2>Join Us on the Journey</h2>
// //           <p>
// //             EquiAccess is more than a project; it's a movement. We invite you to join us on this journey towards a world where accessibility is the norm, not the exception. Together, we can make public spaces more welcoming, diverse, and inclusive for everyone.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Additional Sections */}
// //       {/* Add your content and styling for the additional sections here */}

// //       {/* Add footer section here */}
// //     </>
// //   );
// // };

// // export default AboutUs;

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';


// // Make sure to adjust the path based on your project structure

// const About = () => {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg">
//         <a className="navbar-brand text-light" href="#">
//           <img
//             src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/logotype.svg"
//             className="mr-2"
//             alt="Luvíana"
//           />
//           Luvíana
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <FontAwesomeIcon icon={faBars} />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item active">
//               <a className="nav-link" href="#">
//                 Home <span className="sr-only">(current)</span>
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Features
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Pricing
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       <div className="section-intro">
//         <h2 className="section-intro-title">
//           <img
//             src="https://themes.getmotopress.com/luviana/wp-content/themes/luviana/images/header_default.png"
//             alt=""
//           />
//           About Luviana
//           <img
//             src="https://themes.getmotopress.com/luviana/wp-content/themes/luviana/images/header_default.png"
//             alt=""
//           />
//         </h2>
//       </div>

//       <div className="container">
//         {/* ... (your existing contact form and map code) */}
//       </div>

//       <footer>
//         <div className="container">
//           {/* ... (your existing footer code) */}
//         </div>
//       </footer>

//       {/* Optional JavaScript */}
//       {/* ... (your existing script tags) */}
//     </div>
//   );
// };

// export default About;