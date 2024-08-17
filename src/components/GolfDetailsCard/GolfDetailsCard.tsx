import {GolfProps} from "../../services/types.ts";

import "./GolfDetailsCard.css";
import {GolfDetailsField} from "../GolfDetailsField/GolfDetailsField.tsx";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton.tsx";

import EditIcon from "../../assets/svg/icons/edit.svg";

interface GolfDetailsCardProps {
    courseDetails: GolfProps;
}

export function GolfDetailsCard({courseDetails}: GolfDetailsCardProps) {
    return (
        <div className="golf-details-cards-container">
            <div className="golf-details-cards-content">
                <h2>Informations du golf</h2>
                <div className="golf-details-card-fields">
                    <GolfDetailsField title="Nom" value={courseDetails.name}/>
                    <GolfDetailsField title="Ville" value={courseDetails.city}/>
                    <GolfDetailsField title="Code postal" value={courseDetails.postalCode}/>
                    <GolfDetailsField title="Maps" value={courseDetails.googleMapLinks} link={true} last={true}/>
                </div>
            </div>
            <SecondaryButton text="Modifier" onClick={() => console.log("Edit button clicked")}>
                <img src={EditIcon} alt="Edit Icon" className="edit-icon"/>
            </SecondaryButton>
        </div>
    );
}