import {GolfProps} from "../../services/types.ts";

import "./GolfDetailsCard.css";
import {GolfDetailsField} from "../GolfDetailsField/GolfDetailsField.tsx";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton.tsx";

import EditIcon from "../../assets/svg/icons/edit.svg";
import {Modal} from "../Modal/Modal.tsx";
import {EditGolfForm} from "../EditGolfForm/EditGolfForm.tsx";
import {useState} from "react";
import {updateGolf} from "../../services/courseService.ts";

interface GolfDetailsCardProps {
    courseDetails: GolfProps;
}

export function GolfDetailsCard({courseDetails}: GolfDetailsCardProps) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [golfDetails, setGolfDetails] = useState(courseDetails);

    const handleSave = async (updatedDetails: GolfProps) => {
        setModalVisible(false);
        await updateGolf(updatedDetails.id, updatedDetails.name, updatedDetails.city, updatedDetails.postalCode, updatedDetails.googleMapLinks);
        setGolfDetails(updatedDetails);
    };

    return (
        <div className="golf-details-cards-container">
            <div className="golf-details-cards-content">
                <h2>Informations du golf</h2>
                <div className="golf-details-card-fields">
                    <GolfDetailsField title="Nom" value={golfDetails.name}/>
                    <GolfDetailsField title="Ville" value={golfDetails.city}/>
                    <GolfDetailsField title="Code postal" value={golfDetails.postalCode}/>
                    <GolfDetailsField title="Maps" value={golfDetails.googleMapLinks} link={true} last={true}/>
                </div>
            </div>
            <SecondaryButton text="Modifier" onClick={() => setModalVisible(true)}>
                <img src={EditIcon} alt="Edit Icon" className="edit-icon"/>
            </SecondaryButton>
            <Modal isVisible={isModalVisible} onClose={() => setModalVisible(false)}
                   title={"Modifier les informations du golf"}>
                <EditGolfForm golfDetails={golfDetails} onSave={handleSave}/>
            </Modal>
        </div>
    );
}