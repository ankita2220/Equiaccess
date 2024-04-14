


import React, { useState } from 'react';
import './Restro.css';

const Restro = () => {
  const [confirmedBooking, setConfirmedBooking] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);

  const handleBookingConfirmation = (confirmed) => {
    setConfirmedBooking(confirmed);
  };

  const handleBookingSubmit = () => {
    // Perform booking submission logic (e.g., send reservation to server)
    // Simulating a successful submission for demonstration purposes
    setConfirmedBooking(false);
    setBookingComplete(true);

    // Display alert after successful booking
    alert('Table successfully booked! Hope you have a good time.');

    // Simulating going back to the previous page after a delay
    setTimeout(() => {
      setBookingComplete(false);
      setConfirmedBooking(false); // Reset confirmedBooking
      window.history.back();
    }, 3000); // Adjust the delay as needed
  };

  return (
    <div>
      <h1>Restaurant Booking</h1>

      {!confirmedBooking ? (
        <div>
          <p>Do you want to book a table?</p>
        <center>  <button onClick={() => handleBookingConfirmation(true)}>Yes</button></center>
        <br></br>
        <br></br>
      <center>   <button onClick={() => handleBookingConfirmation(false)}>No</button></center>
        </div>
      ) : (
        <BookingForm onBookingSubmit={handleBookingSubmit} />
      )}

      {bookingComplete && (
        <div>
          <p>Welcome to our restaurant! We look forward to serving you.</p>
          {/* Additional information or instructions can be added here */}
        </div>
      )}
    </div>
  );
};

const BookingForm = ({ onBookingSubmit }) => {
  const [name, setName] = useState('');
  const [partySize, setPartySize] = useState(1);
  const [selectedTable, setSelectedTable] = useState(null);
  const [hasSpecialNeeds, setHasSpecialNeeds] = useState(false);
  const [specialNeedsDetails, setSpecialNeedsDetails] = useState('');
  const [reservationDateTime, setReservationDateTime] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [comments, setComments] = useState('');

  const tableOptions = ['Table for 2', 'Table for 4', 'Table for 6'];

  const handleDateChange = (event) => {
    setReservationDateTime(event.target.value);
  };

  const handleContactInfoChange = (event) => {
    setContactInfo(event.target.value);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSpecialNeedsChange = () => {
    setHasSpecialNeeds(!hasSpecialNeeds);
  };

  const handleSpecialNeedsDetailsChange = (event) => {
    setSpecialNeedsDetails(event.target.value);
  };

  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Party Size:
          <input type="number" value={partySize} onChange={(e) => setPartySize(e.target.value)} min="1" />
        </label>
        <br />
        <label>
          Select Table:
          <select value={selectedTable} onChange={(e) => setSelectedTable(e.target.value)}>
            <option value="" disabled>Select a table</option>
            {tableOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
        {selectedTable && (
          <p>Selected Table: {selectedTable}</p>
        )}
        <br />
        <label>
          <input type="checkbox" checked={hasSpecialNeeds} onChange={handleSpecialNeedsChange} />
          Special Needs
        </label>
        {hasSpecialNeeds && (
          <div>
            <label>
              Special Needs Details:
              <textarea
                value={specialNeedsDetails}
                onChange={handleSpecialNeedsDetailsChange}
              />
            </label>
          </div>
        )}
        <br />
        <label>
          Reservation Date and Time:
          <input type="datetime-local" value={reservationDateTime} onChange={handleDateChange} />
        </label>
        <br />
        <label>
          Contact Information:
          <input type="text" value={contactInfo} onChange={handleContactInfoChange} />
        </label>
        <br />
        <label>
          Comments/Requests:
          <textarea value={comments} onChange={handleCommentsChange} />
        </label>
        <br />
        <button type="button" onClick={onBookingSubmit}>
          Book Table
        </button>
      </form>
    </div>
  );
};

export default Restro;




// import React, { useState } from 'react';
// import './Restro.css';

// const Restro = () => {
//   const [confirmedBooking, setConfirmedBooking] = useState(false);
//   const [bookingComplete, setBookingComplete] = useState(false);

//   const handleBookingConfirmation = (confirmed) => {
//     setConfirmedBooking(confirmed);
//   };

//   const handleBookingSubmit = () => {
//     // Perform booking submission logic (e.g., send reservation to server)
//     // Simulating a successful submission for demonstration purposes
//     setConfirmedBooking(false);
//     setBookingComplete(true);

//     // Simulating going back to the previous page after a delay
//     setTimeout(() => {
//       setBookingComplete(false);
//       setConfirmedBooking(false); // Reset confirmedBooking
//       window.history.back();
//     }, 3000); // Adjust the delay as needed
//   };

//   return (
//     <div>
//       <h1>Restaurant Booking</h1>

//       {!confirmedBooking ? (
//         <div>
//           <p>Do you want to book a table?</p>
//           <button onClick={() => handleBookingConfirmation(true)}>Yes</button>
//           <button onClick={() => handleBookingConfirmation(false)}>No</button>
//         </div>
//       ) : (
//         <BookingForm onBookingSubmit={handleBookingSubmit} />
//       )}

//       {bookingComplete && (
//         <div>
//           <p>Welcome to our restaurant! We look forward to serving you.</p>
//           {/* Additional information or instructions can be added here */}
//         </div>
//       )}
//     </div>
//   );
// };

// const BookingForm = ({ onBookingSubmit }) => {
//   const [name, setName] = useState('');
//   const [partySize, setPartySize] = useState(1);
//   const [selectedTable, setSelectedTable] = useState(null);
//   const [hasSpecialNeeds, setHasSpecialNeeds] = useState(false);
//   const [specialNeedsDetails, setSpecialNeedsDetails] = useState('');
//   const [reservationDateTime, setReservationDateTime] = useState('');
//   const [contactInfo, setContactInfo] = useState('');
//   const [comments, setComments] = useState('');

//   const tableOptions = ['Table for 2', 'Table for 4', 'Table for 6'];

//   const handleDateChange = (event) => {
//     setReservationDateTime(event.target.value);
//   };

//   const handleContactInfoChange = (event) => {
//     setContactInfo(event.target.value);
//   };

//   const handleCommentsChange = (event) => {
//     setComments(event.target.value);
//   };

//   const handleSpecialNeedsChange = () => {
//     setHasSpecialNeeds(!hasSpecialNeeds);
//   };

//   const handleSpecialNeedsDetailsChange = (event) => {
//     setSpecialNeedsDetails(event.target.value);
//   };

//   return (
//     <div>
//       <form>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Party Size:
//           <input type="number" value={partySize} onChange={(e) => setPartySize(e.target.value)} min="1" />
//         </label>
//         <br />
//         <label>
//           Select Table:
//           <select value={selectedTable} onChange={(e) => setSelectedTable(e.target.value)}>
//             <option value="" disabled>Select a table</option>
//             {tableOptions.map((option) => (
//               <option key={option} value={option}>{option}</option>
//             ))}
//           </select>
//         </label>
//         {selectedTable && (
//           <p>Selected Table: {selectedTable}</p>
//         )}
//         <br />
//         <label>
//           <input type="checkbox" checked={hasSpecialNeeds} onChange={handleSpecialNeedsChange} />
//           Special Needs
//         </label>
//         {hasSpecialNeeds && (
//           <div>
//             <label>
//               Special Needs Details:
//               <textarea
//                 value={specialNeedsDetails}
//                 onChange={handleSpecialNeedsDetailsChange}
//               />
//             </label>
//           </div>
//         )}
//         <br />
//         <label>
//           Reservation Date and Time:
//           <input type="datetime-local" value={reservationDateTime} onChange={handleDateChange} />
//         </label>
//         <br />
//         <label>
//           Contact Information:
//           <input type="text" value={contactInfo} onChange={handleContactInfoChange} />
//         </label>
//         <br />
//         <label>
//           Comments/Requests:
//           <textarea value={comments} onChange={handleCommentsChange} />
//         </label>
//         <br />
//         <button type="button" onClick={onBookingSubmit}>
//           Book Table
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Restro;
