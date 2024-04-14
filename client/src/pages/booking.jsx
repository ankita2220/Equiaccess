import React, { useState } from 'react';
import './booking.css';

const CabBookingForm = () => {
  const [bookingOption, setBookingOption] = useState(null);
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [driverDetails, setDriverDetails] = useState(null);

  const handleBookingOptionChange = (event) => {
    setBookingOption(event.target.value === 'true');
  };

  const handlePickupLocationChange = (event) => {
    setPickupLocation(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleDisabledOptionChange = () => {
    setIsDisabled(!isDisabled);
  };

  const handleBookingDecision = (decision) => {
    setBookingOption(decision);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (bookingOption) {
      // Perform actions with pickupLocation and destination
      simulateDriverDetails()
        .then((details) => {
          setDriverDetails(details);
          setBookingConfirmed(true);
        })
        .catch((error) => {
          console.error('Error fetching driver details:', error);
        });

      // Reset form fields
      setPickupLocation('');
      setDestination('');
      setIsDisabled(false);
    }
  };

  const simulateDriverDetails = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          driverName: 'John Doe',
          carModel: 'XYZ123',
          fare: '$20',
          distance: '5 miles',
        });
      }, 2000);
    });
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />

      <center>
        <strong>
          <h1 style={{ fontSize: '2em' }}>Cab Booking</h1>
        </strong>
      </center>
      {bookingOption === null ? (
        <div style={{ textAlign: 'center', fontSize: '1.5em' }}>
          <p>Do you want to book a cab?</p>
          <button onClick={() => handleBookingDecision(true)}>Yes</button>
          <button onClick={() => handleBookingDecision(false)}>No</button>
        </div>
      ) : (
        <>
          {!bookingConfirmed ? (
            <form onSubmit={handleSubmit} style={{ textAlign: 'center', fontSize: '1.0em' }}>
              <strong>
                <label>
                  <br />
                  <br />
                  Pickup Location:
                  <input
                    type="text"
                    value={pickupLocation}
                    onChange={handlePickupLocationChange}
                    required
                    style={{ fontSize: '1em' }}
                  />
                </label>
              </strong>
              <br />
              <strong>
                <label>
                  <br />
                  <br />
                  Destination:
                  <input
                    type="text"
                    value={destination}
                    onChange={handleDestinationChange}
                    required
                    style={{ fontSize: '1em' }}
                  />
                </label>
              </strong>
              <br />
              <strong>
                <label>
                  <br />
                  <br />
                  <input
                    type="checkbox"
                    checked={isDisabled}
                    onChange={handleDisabledOptionChange}
                  />
                  Booking for disabled
                </label>
              </strong>
              <br />
              <br />
              <button type="submit" style={{ fontSize: '1em' }}>Book CAB</button>
            </form>
          ) : (
            <div className="confirmation-message" style={{ fontSize: '1.5em' }}>
              <br />
              <br />
              <h1>
                <p>
                  Booking confirmed! The driver, {driverDetails.driverName}, with car model{' '}
                  {driverDetails.carModel}, will reach you soon.
                </p>
                <br />
                <br />
                <p>Fare: {driverDetails.fare}</p>
                <p>Distance: {driverDetails.distance}</p>
              </h1>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CabBookingForm;

// import React, { useState } from 'react';
// import './booking.css';

// const CabBookingForm = () => {
//   const [pickupLocation, setPickupLocation] = useState('');
//   const [destination, setDestination] = useState('');
//   const [bookingConfirmed, setBookingConfirmed] = useState(false);
//   const [driverDetails, setDriverDetails] = useState(null); // Assuming driver details will be an object

//   const handlePickupLocationChange = (event) => {
//     setPickupLocation(event.target.value);
//   };

//   const handleDestinationChange = (event) => {
//     setDestination(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Perform actions with pickupLocation and destination (e.g., send to server, display confirmation, etc.)
//     // For demonstration purposes, simulate an asynchronous request to get driver details
//     simulateDriverDetails()
//       .then((details) => {
//         setDriverDetails(details);
//         setBookingConfirmed(true);
//       })
//       .catch((error) => {
//         console.error('Error fetching driver details:', error);
//       });

//     // Reset form fields
//     setPickupLocation('');
//     setDestination('');
//   };

//   // Simulate an asynchronous request to get driver details
//   const simulateDriverDetails = () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({
//           driverName: 'John Doe',
//           carModel: 'XYZ123',
//           fare: '$20',
//           distance: '5 miles',
//         });
//       }, 2000); // Simulating a 2-second delay
//     });
//   };

//   return (
//     <div>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>

//       <center>
//     <strong> <h1>Cab Booking</h1></strong>   
//       </center>
//       {bookingConfirmed ? (
//    <div className="confirmation-message">
//       <br></br>  
//       <br></br>
//       <h1>  <p>
//             Booking confirmed! The driver, {driverDetails.driverName}, with car
//             model {driverDetails.carModel}, will reach you soon.
//           </p>
//           <br></br>  
//       <br></br>
//           <p>Fare: {driverDetails.fare}</p>
//           <p>Distance: {driverDetails.distance}</p></h1>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <strong>
//             <label>
//             <br></br>  
//       <br></br>
//               Pickup Location:
//               <input
//                 type="text"
//                 value={pickupLocation}
//                 onChange={handlePickupLocationChange}
//                 required
//               />
//             </label>
//           </strong>
//           <br />
//           <strong>
//             <label>
//             <br></br>  
//       <br></br>
//               Destination:
//               <input
//                 type="text"
//                 value={destination}
//                 onChange={handleDestinationChange}
//                 required
//               />
//             </label>
//           </strong>
//           <br />
//           <br />

//           <br />
//           <br />

//           <button type="submit">Book CAB</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default CabBookingForm;




// import React, { useState } from 'react';
// import './booking.css';

// const CabBookingForm = () => {
//   const [pickupLocation, setPickupLocation] = useState('');
//   const [destination, setDestination] = useState('');

//   const handlePickupLocationChange = (event) => {
//     setPickupLocation(event.target.value);
//   };

//   const handleDestinationChange = (event) => {
//     setDestination(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Perform actions with pickupLocation and destination (e.g., send to server, display confirmation, etc.)
//     console.log('Booking submitted:', { pickupLocation, destination });

//     // Reset form fields
//     setPickupLocation('');
//     setDestination('');
//   };
// <br>
// </br>

//   return (
//     <div>
//         <br>
//         </br>

//         <br>
//         </br>

//         <br>
//         </br>

//     <center> <h1>Cab Booking</h1></center>   
//       <form onSubmit={handleSubmit}>
//      <strong> <label>
//         <br>
//         </br>
//           Pickup Location:
//           <input
//             type="text"
//             value={pickupLocation}
//             onChange={handlePickupLocationChange}
//             required
//           />
//         </label> </strong>
//         <br />
//       <strong><label>
//             <br>
//             </br>
//           Destination:
//           <input
//             type="text"
//             value={destination}
//             onChange={handleDestinationChange}
//             required
//           />
//         </label></strong>
//         <br />
//         <br>
//         </br>

//         <br>
//         </br>
       
//         <button type="submit">Book CAB</button>
//       </form>
//     </div>
//   );
// };

// export default CabBookingForm;
