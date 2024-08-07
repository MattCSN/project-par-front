import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const EditGolfDialog = ({ dialogState, setDialogState, handleEditChange, handleEditSubmit }) => (
    <Dialog header={`Modifier les détails du golf : ${dialogState.editData.name}`}
            visible={dialogState.editDialogVisible}
            onHide={() => setDialogState({ ...dialogState, editDialogVisible: false })}>
        <div className="p-fluid">
            <div className="p-field">
                <label htmlFor="city">Ville</label>
                <InputText id="city" name="city" value={dialogState.editData.city || ''}
                           onChange={handleEditChange} />
            </div>
            <div className="p-field">
                <label htmlFor="postalCode">Code Postal</label>
                <InputText id="postalCode" name="postalCode" value={dialogState.editData.postalCode || ''}
                           onChange={handleEditChange} />
            </div>
            <Button label="Enregistrer" icon="pi pi-check" onClick={handleEditSubmit} />
        </div>
    </Dialog>
);

EditGolfDialog.propTypes = {
    dialogState: PropTypes.object.isRequired,
    setDialogState: PropTypes.func.isRequired,
    handleEditChange: PropTypes.func.isRequired,
    handleEditSubmit: PropTypes.func.isRequired
};

export default EditGolfDialog;