// FAQ.jsx
import React from 'react';
// Import your CSS file
import './Faq.css';
const Faq = () => {
  return (
    <section className="faq-section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item">
          <h3>1. What is EquiAccess?</h3>
          <p>EquiAccess is a platform dedicated to enhancing accessibility in public spaces. It provides information about wheelchair-friendly ramps, hearing aid loop systems, and sensory-friendly environments to empower individuals with diverse abilities.</p>
        </div>

        <div className="faq-item">
          <h3>2. How can I contribute to EquiAccess?</h3>
          <p>You can contribute by sharing your experiences, recommending accessible locations, and advocating for inclusivity. Join our community to make public spaces more welcoming for everyone.</p>
        </div>

        <div className="faq-item">
          <h3>3. How do I search for accessible locations?</h3>
          <p>Use the search feature on our platform to find wheelchair-friendly ramps, hearing aid loop systems, or other accessible features. You can also filter locations based on specific accessibility criteria.</p>
        </div>

        <div className="faq-item">
          <h3>4. Can I create an account on EquiAccess?</h3>
          <p>Yes, creating an account allows you to personalize your experience, save your favorite locations, and participate in our community. Go to the 'Account' section to register or log in.</p>
        </div>

        <div className="faq-item">
          <h3>5. How does EquiAccess promote inclusivity?</h3>
          <p>EquiAccess promotes inclusivity by providing a platform where users can share their experiences, offer recommendations, and connect with a community dedicated to making public spaces more inclusive for individuals of all abilities.</p>
        </div>

        {/* Add more FAQ items as needed */}
      </div>
    </section>
  );
};

export default Faq;