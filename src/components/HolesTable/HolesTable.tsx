import "./HolesTable.css"
import {HoleDetailsProps} from "../../services/types.ts";
import {EditableTee} from "../EditableTee/EditableTee.tsx";
import {InputNumber} from "../Input/InputNumber/InputNumber.tsx";
import {updateHolePar} from "../../services/courseService.ts";

interface HolesTableProps {
    holes: HoleDetailsProps[];
}

export const HolesTable = ({holes}: HolesTableProps) => {

    const handleParUpdate = async (id: string, newValue: number): Promise<number> => {
        return await updateHolePar(id, newValue);
    };

    return (
        <div className="holes-table-container">
            <table className="holes-table">
                <thead className="holes-table-header">
                <tr>
                    <th className="holes-table-title holes-table-column-hole">Trou</th>
                    <th className="holes-table-title holes-table-column-par">Par</th>
                    <th className="holes-table-title holes-table-column-tees">Départs</th>
                </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                {holes.map(hole => (
                    <tr className="holes-table-row" key={hole.id}>
                        <td className="holes-table-cell holes-table-column-hole">
                            <h5>{hole.HoleNumber}</h5>
                        </td>
                        <td className="holes-table-cell holes-table-column-par">
                            <div className="holes-table-column-par">
                                <InputNumber
                                    inputId={"Par"}
                                    id={hole.id}
                                    defaultValue={hole.Par}
                                    placeHolder={"Par"}
                                    onUpdate={handleParUpdate}/>
                            </div>
                        </td>
                        <td className="holes-table-cell holes-table-column-tees">
                            <div className="holes-table-data-tees">
                                {hole.tees ? (
                                    hole.tees.map(tee => (
                                        <EditableTee
                                            key={tee.id}
                                            id={tee.id}
                                            color={tee.Color}
                                            value={tee.Distance}/>
                                    ))
                                ) : (
                                    <td colSpan={2}>No tees available</td>
                                )}
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    );
};