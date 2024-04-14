// HostPage.jsx

import { Link } from "react-router-dom";
import AccountNav from "../AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";
import HostImage from "../HostImage";

export default function HostPage() {
    const [hosted, setHosted] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/hosted')
            .then(({ data }) => {
                setHosted(data);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    useEffect(() => {
        axios.get('/hosted')
            .then(({ data }) => {
                setHosted(data);
            })
            .catch((error) => {
                console.error('Error fetching hosted data:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    
    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                Loading...
            </div>
        );
    }
    
    return (
        <div>
            <AccountNav />
            <div className="text-center">
                <Link className='inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full' to="/account/hosted/new">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                    Add new event
                </Link>
            </div>
            <div className="mt-4">
                {hosted.length > 0 && hosted.map((host) => (
                    <Link key={host._id} to={`/account/hosted/${host._id}`} className="host-link">
                        <div className="host-image">
                            <HostImage host={host} />
                        </div>
                        <div className="host-info">
                            <h2 className="text-xl">{host.title}</h2>
                            <p className="text-sm mt-2">{host.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}















// import { Link } from "react-router-dom";
// import AccountNav from "../AccountNav";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import HostImage from "../HostImage";

// export default function HostPage() {
//     const [hosted, setHosted] = useState([]);
//     useEffect(() => {
//         axios.get('/hosted').then(({data}) => {
//             setHosted(data);
//         });
//     }, []);
//     return (
//         <div>
//             <AccountNav />
//             <div className="text-center">
//                 <Link className='inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full' to="/account/hosted/new">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//                         <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
//                     </svg>
//                     Add new event
//                 </Link>
//             </div>
//             <div className="mt-4">
//                 {hosted.length > 0 && hosted.map(host => (
//                     <Link to={'/account/hosted/' + host._id} className="flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl">
//                         <div className="flex w-48 h-48 bg-gray-300 grow shrink-0">
//                             <HostImage host={host} />
//                         </div>
//                         <div className="grow-0 shrink">
//                             <h2 className="text-xl">{host.title}</h2>
//                             <p className="text-sm mt-2">{host.description}</p>
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// }