import type { CourseProps } from "../../services/types";

import { HolesTable } from "../holesTable/HolesTable";
import Tag from "../tag/Tag";

import "./HolesCard.css";

import { useState } from "react";

import EditIcon from "../../assets/svg/icons/edit-white.svg";
import { updateCourse, updateCourseColors } from "../../services/courseService";
import PrimaryButton from "../buttons/primaryButton/PrimaryButton";
import { EditCourseForm } from "../editCourseForm/EditCourseForm";
import { Modal } from "../modal/Modal";

type HolesCardProps = {
  details: CourseProps;
};

export function HolesCard({ details }: HolesCardProps) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [courseDetails, setCourseDetails] = useState(details);

  const handleSave = async (
    updatedDetails: CourseProps,
    updatedColors: string[],
  ) => {
    setModalVisible(false);
    await updateCourse(
      updatedDetails.id,
      updatedDetails.name,
      updatedDetails.pitchAndPutt,
      updatedDetails.compact,
    );
    const newTees = await updateCourseColors(updatedDetails.id, updatedColors);
    updatedDetails.holes.forEach((hole) => {
      hole.tees = newTees.filter(
        (tee: { HoleID: string }) => tee.HoleID === hole.id,
      );
    });
    setCourseDetails(updatedDetails);
  };

  return (
    <div className="holes-card-container">
      <div className="holes-card-header">
        <h2>{courseDetails.name}</h2>
        <div className="holes-card-tags">
          <Tag text={`${courseDetails.numberHoles} trous`} type="positive" />
          {courseDetails.pitchAndPutt && (
            <Tag text="Pitch and Putt" type="positive" />
          )}
          {courseDetails.compact && <Tag text="Compact" type="positive" />}
        </div>
      </div>
      <PrimaryButton
        text="Modifier"
        onClick={() => {
          setModalVisible(true);
        }}
      >
        <img src={EditIcon} alt="Edit Icon" className="edit-icon" />
      </PrimaryButton>
      <div className="holes-card-content">
        <HolesTable holes={courseDetails.holes} />
      </div>
      <Modal
        isVisible={isModalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
        title="Modifier les informations du parcours"
      >
        <EditCourseForm courseDetails={courseDetails} onSave={handleSave} />
      </Modal>
    </div>
  );
}
