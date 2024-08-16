import {GolfProps} from "../../services/types.ts";

import "./GolfDetailsCard.css";
import {GolfDetailsField} from "../GolfDetailsField/GolfDetailsField.tsx";

interface GolfDetailsCardProps {
    courseDetails: GolfProps;
}

export function GolfDetailsCard({courseDetails}: GolfDetailsCardProps) {
    return (
        <div className="golf-details-cards-container">
            <h2>Informations du golf</h2>
            <div className="golf-details-card-fields">
                <GolfDetailsField title="Nom" value={courseDetails.name}/>
                <GolfDetailsField title="Ville" value={courseDetails.city}/>
                <GolfDetailsField title="Code postal" value={courseDetails.postalCode}/>
                <GolfDetailsField title="Maps" value={courseDetails.googleMapLinks} link={true} last={true}/>
            </div>
        </div>
    );
}