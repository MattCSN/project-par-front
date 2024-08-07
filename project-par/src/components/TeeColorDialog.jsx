import React from 'react';
import PropTypes from 'prop-types';
import {Dialog} from 'primereact/dialog';
import {Checkbox} from 'primereact/checkbox';
import {Button} from 'primereact/button';

const TeeColorDialog = ({dialogState, setDialogState, handleTeeColorChange, handleTeeColorSubmit}) => (
    <Dialog header="Sélectionner des couleurs de départ" visible={dialogState.teeColorDialogVisible}
            onHide={() => setDialogState({...dialogState, teeColorDialogVisible: false})}>
        <div className="p-fluid">
            <div className="p-field">
                <label>Couleurs de départ</label>
                {['Rouge', 'Jaune', 'Blanc', 'Bleu', 'Noir', 'Vert', 'Or', 'Argent', 'Orange', 'Mauve'].map(color => (
                    <div key={color} className="p-field-checkbox">
                        <Checkbox inputId={color} name="teeColors" value={color}
                                  checked={dialogState.selectedTeeColors.includes(color)}
                                  onChange={handleTeeColorChange}/>
                        <label htmlFor={color}>{color}</label>
                    </div>
                ))}
            </div>
            <Button label="Ajouter" icon="pi pi-check" onClick={handleTeeColorSubmit}/>
        </div>
    </Dialog>
);

TeeColorDialog.propTypes = {
    dialogState: PropTypes.object.isRequired,
    setDialogState: PropTypes.func.isRequired,
    handleTeeColorChange: PropTypes.func.isRequired,
    handleTeeColorSubmit: PropTypes.func.isRequired
};

export default TeeColorDialog;