import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import BookingWidget from "../BookingWidget";
import HostGallery from "../HostGallery";
import VenueLink from "../VenueLink";

export default function HostedPage() {
    const { id } = useParams();
    const [host, setHost] = useState(null);
    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get(`/hosted/${id}`).then(response => {
            setHost(response.data);
            console.log('Host Data:', response.data);
        });
    }, [id]);

    if (!host) {
        return '';
    }

    return (
        <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8">
            <h1 className="text-3xl">{host.title}</h1>
            <VenueLink>{host.venue}</VenueLink>
            <HostGallery host={host} />
            <div className="mt-8 mb-8 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
                <div>
                    <div className="my-4">
                        <h2 className="font-semibold text-2xl">Description</h2>
                        {host.description}
                    </div>
                    Date: {host.date} <br />
                    Time: {host.time} <br />
                </div>
                <div>
                    <BookingWidget host={host} />
                </div>
            </div>
        </div>
    );
}