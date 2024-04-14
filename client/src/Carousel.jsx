import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideContainerRef = useRef(null);

  const slidesData = [
    {
      name: 'HEALTH',
      description: 'Prioritize your well-being. Discover healthcare facilities tailored for accessibility and inclusivity.',
      imageUrl: 'images/1.jpg',
    },
    {
      name: 'CAB BOOKING SERVICES',
      description: 'Seamless mobility for everyone. Book with ease and travel with comfort.',
      imageUrl: 'images/2.jpg',
    },
    {
      name: 'DINING',
      description: 'Welcome to a world where every meal is an inclusive celebration.',
      imageUrl: 'images/3.jpg',
    },
    {
      name: 'EDUCATION',
      description: 'Your learning path, your way—explore educational opportunities with confidence.',
      imageUrl: 'images/4.jpg',
    },
    {
      name: 'EMPLOYMENT',
      description: 'Unleash your potential and embark on a rewarding career journey with us. Your skills, your future—lets build it together ',
      imageUrl: 'images/5.jpg',
    },
  ];

  const nextSlide = () => {
    const slideContainer = slideContainerRef.current;
    if (slideContainer) {
      const firstSlide = slideContainer.querySelector('.item');
      slideContainer.appendChild(firstSlide);
      setCurrentIndex((currentIndex + 1) % slidesData.length);
    }
  };

  const prevSlide = () => {
    const slideContainer = slideContainerRef.current;
    if (slideContainer) {
      const slides = slideContainer.querySelectorAll('.item');
      const lastSlide = slides[slides.length - 1];
      slideContainer.prepend(lastSlide);
      setCurrentIndex((currentIndex - 1 + slidesData.length) % slidesData.length);
    }
  };

  const getKnowMoreInfo = (slide) => {
    switch (slide.name) {

      case 'HEALTH':
        return {
            link: `/health/${encodeURIComponent(slide.name)}`,
            buttonText: 'Know More',
          };


          case 'CAB BOOKING SERVICES':
            return {
              link: `/booking/${encodeURIComponent(slide.name)}`,
              buttonText: 'Know More',
            };
          
            case 'EDUCATION':
        return {
            link: `/education/${encodeURIComponent(slide.name)}`,
            buttonText: 'Know More',
          };

        
          case 'EMPLOYMENT':
            return {
                link: `/employment/${encodeURIComponent(slide.name)}`,
                buttonText: 'Know More',
              };

        

      case 'DINING':
        return {
          link: `/restro/${encodeURIComponent(slide.name)}`,
          buttonText: 'Know More',
        };


      // Add more cases for other pages as needed
      default:
        return {
          link: '/',
          buttonText: 'Know more',
        };
    }
  };

  return (
    <div className="container">
      <div id="slide" ref={slideContainerRef}>
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`item ${currentIndex === index ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <div className="content">
              <div className="name">{slide.name}</div>
              <div className="des">{slide.description}</div>
              <Link to={getKnowMoreInfo(slide).link}>
                <button>{getKnowMoreInfo(slide).buttonText}</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={prevSlide}>
          <i className="fa-solid fa-angle-left fa-fade">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </i>
        </button>
        <button id="next" onClick={nextSlide}>
          <i className="fa-solid fa-angle-right fa-fade">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </i>
        </button>
      </div>
    </div>
  );
};

export default Carousel;


// // import React, { useState, useRef } from 'react';
// // import { Link, useHistory } from 'react-router-dom'; // Import useHistory
// // import './Carousel.css';

// // const Carousel = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const slideContainerRef = useRef(null);
// //   const history = useHistory(); // Initialize useHistory

// //   // ... (existing code)

// //   return (
// //     <div className="container">
// //       <div id="slide" ref={slideContainerRef}>
// //         {slidesData.map((slide, index) => (
// //           <div
// //             key={index}
// //             className={`item ${currentIndex === index ? 'active' : ''}`}
// //             style={{ backgroundImage: `url(${slide.imageUrl})` }}
// //           >
// //             <div className="content">
// //               <div className="name">{slide.name}</div>
// //               <div className="des">{slide.description}</div>
// //               <button
// //                 onClick={() => history.push(`./health/${encodeURIComponent(slide.name)}`)}
// //               >
// //                 Know more
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <div className="buttons">
// //         <button id="prev" onClick={prevSlide}>
// //           {/* ... (existing code) */}
// //         </button>
// //         <button id="next" onClick={nextSlide}>
// //           {/* ... (existing code) */}
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// //export default Carousel;

// import React, { useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import './Carousel.css';


// const Carousel = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const slideContainerRef = useRef(null);

//     const slidesData = [
//         {
//             name: 'HEALTHCARE',
//             description: 'EXPLORE LIST OF ACCESSIBLE FRIENDLY HEALTHCARE ESTABLISHMENTS NEAR YOU',
//             imageUrl: 'images/1.jpg',
//         },
//         {
//             name: 'CAB BOOKING SERVICES',
//             description: 'GET RIDES AT YOUR DOORSTEP',
//             imageUrl: 'images/2.jpg',
//         },
//         {
//             name: 'DINING',
//             description: 'EXPLORE ACCESSIBLE FRIENDLY RESTAURANTS NEAR YOU',
//             imageUrl: 'images/3.jpg',
//         },
//         {
//             name: 'EDUCATION',
//             description: 'HEKP US SHAPE A BETTER FUTURE FOR YOU',
//             imageUrl: 'images/4.jpg',
//         },
//         {
//             name: 'EMPLOYMENT',
//             description: ' DONT MISS OUT ON ANY OPPORTUNITY. EXPLORE AVAILABLE EMPLOYMENT OPPORTUNITIES FOR YOU',
//             imageUrl: 'images/5.jpg',
//         },
    
//     ];

//     const nextSlide = () => {
//         const slideContainer = slideContainerRef.current;
//         if (slideContainer) {
//             const firstSlide = slideContainer.querySelector('.item');
//             slideContainer.appendChild(firstSlide);
//             setCurrentIndex((currentIndex + 1) % slidesData.length);
//         }
//     };

//     const prevSlide = () => {
//         const slideContainer = slideContainerRef.current;
//         if (slideContainer) {
//             const slides = slideContainer.querySelectorAll('.item');
//             const lastSlide = slides[slides.length - 1];
//             slideContainer.prepend(lastSlide);
//             setCurrentIndex((currentIndex - 1 + slidesData.length) % slidesData.length);
//         }
//     };

//     return (
//         <div className="container">
//             <div id="slide" ref={slideContainerRef}>
//                 {slidesData.map((slide, index) => (
//                     <div
//                         key={index}
//                         className={`item ${currentIndex === index ? 'active' : ''}`}
//                         style={{ backgroundImage: `url(${slide.imageUrl})` }}
//                     >
//                         <div className="content">
//                             <div className="name">{slide.name}</div>
//                             <div className="des">{slide.description}</div>
//  <Link to={`/health/${encodeURIComponent(slide.name)}`}>
//   <button>Know more</button>
// </Link>

//  </div>
//         </div> ))}
//             </div>
//             <div className="buttons">
//                 <button id="prev" onClick={prevSlide}>
//                     <i className="fa-solid fa-angle-left fa-fade">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
//                         </svg>
//                     </i>
//                 </button>
//                 <button id="next" onClick={nextSlide}>
//                     <i className="fa-solid fa-angle-right fa-fade">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//                         </svg>
//                     </i>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Carousel;