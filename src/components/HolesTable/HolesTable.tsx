import "./HolesTable.css"
import {HoleDetailsProps} from "../../services/types.ts";
import {EditableTee} from "../EditableTee/EditableTee.tsx";

interface HolesTableProps {
    holes: HoleDetailsProps[];
}

export const HolesTable = ({holes}: HolesTableProps) => {

    return (
        <div className="holes-table-container">
            <table className="holes-table">
                <thead className="holes-table-header">
                <tr>
                    <th className="holes-table-title">Trou</th>
                    <th className="holes-table-title">Par</th>
                    <th className="holes-table-title">Départs</th>
                </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                {holes.map(hole => (
                    <tr className="holes-table-row" key={hole.id}>
                        <td className="holes-table-cell">
                            <h5>{hole.HoleNumber}</h5>
                        </td>
                        <td className="holes-table-cell">
                            <div className="holes-table-par">
                                <input
                                    className="holes-table-par-input"
                                    type="number"
                                    id="Par"
                                    key={hole.id}
                                    placeholder="Par"
                                    defaultValue={hole.Par}
                                />
                            </div>
                        </td>
                        <td className="holes-table-cell tees">
                            <div className="holes-table-data-tees">
                                {hole.tees ? (
                                    hole.tees.map(tee => (
                                        <EditableTee id={tee.id} color={tee.Color}
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