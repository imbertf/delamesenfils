import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const center = { lat: 45.22633725802138, lng: 5.853411456102057 };

const ContactMap = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDWH31LmVVPgY-1ektR9XKVTon2-IF8idc",
    });

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <GoogleMap
            zoom={15}
            center={center}
            mapContainerStyle={{ width: "100%", height: "100vh" }}
        >
            <Marker position={center} />
        </GoogleMap>
    );
};

export default ContactMap;
