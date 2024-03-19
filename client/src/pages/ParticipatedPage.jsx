import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HostGallery from "../HostGallery";
import VenueLink from "../VenueLink";
import ParticipatedDateTime from "../ParticipatedDateTime";

export default function ParticipatePage() {
    const { id } = useParams();
    const [participate, setParticipate] = useState(null);

    useEffect(() => {
        if (id) {
            axios.get('/participated').then(response => {
                const foundparticipate = response.data.find(({ _id }) => _id === id);
                if (foundparticipate) {
                    setParticipate(foundparticipate);
                }
            })
        }
    }, [id]);

    if (!participate) {
        return '';
    }

    return (
        <div className="my-8">
            <h1 className="text-3xl" tabIndex="0">
                {participate.host.title}
            </h1>
            <VenueLink className="my-2 block" tabIndex="0">
                Venue: {participate.host.venue}
            </VenueLink>
            <div className="bg-gray-200 p-6 mb-6 my-6 rounded-2xl flex items-center justify-between">
                <div>
                    <h2 className="text-2xl mb-4">You've participated!</h2>
                    <ParticipatedDateTime participate={participate} />
                </div>
                <div className="my-4 bg-primary text-white p-6 rounded-2xl">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8"
                        alt="Checkmark icon indicating successful participation"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
            </div>
            <HostGallery host={participate.host} />
        </div>
    );
}









// import { useEffect, useState } from "react";
// import AccountNav from "../AccountNav";
// import axios from "axios";
// import HostImage from "../HostImage";
// import { Link } from "react-router-dom";
// import ParticipatedDateTime from "../ParticipatedDateTime";

// export default function ParticipatedPage() {
//     const [participated, setParticipated] = useState([]);
//     useEffect(() => {
//         axios.get('/participated').then(response => {
//             setParticipated(response.data);
//         });
//     }, []);
//     return (
//         <div>
//             <AccountNav />
//             <div className="my-2 space-y-4">
//                 {participated?.length > 0 && participated.map(participate => (
//                     <Link to={`/account/participated/${participate._id}`} className="flex gap-4 bg-gray-200 rounded-2xl overflow-hidden">
//                         <div className="w-48">
//                             {participate.host && <HostImage host={participate.host} />}
//                         </div>
//                         <div className="py-3 grow pr-3">
//                         <h2 className="text-2xl bold">{participate.host ? participate.host.title : 'No Title'}</h2>
//                             <div className="flex border-t border-gray-300 mt-2 py-2">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
//                                 </svg>
//                                 <h2 className="text-sm">{participate.host ? participate.host.venue : 'No Venue'}</h2>
//                             </div>
//                             <ParticipatedDateTime participate={participate}/>
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// }