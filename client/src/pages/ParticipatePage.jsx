import { useEffect, useState } from "react";
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
            <h1 className="text-3xl">{participate.host.title}</h1>
            <VenueLink className="my-2 block">{participate.host.venue}</VenueLink>
            <div className="bg-gray-200 p-6 mb-6 my-6 rounded-2xl flex items-center justify-between">
                <div>
                    <h2 className="text-2xl mb-4">You've participated !</h2>
                    <ParticipatedDateTime participate={participate} />
                </div>
                <div className=" my-4 bg-primary text-white p-6 rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>
            <HostGallery host={participate.host} />
        </div>
    );
}