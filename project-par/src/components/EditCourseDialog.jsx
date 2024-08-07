import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const EditCourseDialog = ({ dialogState, setDialogState, handleCourseEditChange, handleCourseEditSubmit }) => (
    <Dialog header={`Renommer le parcours : ${dialogState.courseEditData.name}`}
            visible={dialogState.courseEditDialogVisible}
            onHide={() => setDialogState({ ...dialogState, courseEditDialogVisible: false })}>
        <div className="p-fluid">
            <div className="p-field">
                <label htmlFor="name">Nouveau Nom</label>
                <InputText id="name" name="name" value={dialogState.courseEditData.name || ''}
                           onChange={handleCourseEditChange} />
            </div>
            <Button label="Enregistrer" icon="pi pi-check" onClick={handleCourseEditSubmit} />
        </div>
    </Dialog>
);

EditCourseDialog.propTypes = {
    dialogState: PropTypes.object.isRequired,
    setDialogState: PropTypes.func.isRequired,
    handleCourseEditChange: PropTypes.func.isRequired,
    handleCourseEditSubmit: PropTypes.func.isRequired
};

export default EditCourseDialog;