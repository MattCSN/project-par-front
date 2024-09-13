import "./HolesTable.css";
import { updateHolePar } from "../../services/courseService";
import { EditableTee } from "../editableTee/EditableTee";
import InputNumber from "../input/inputNumber/InputNumber";

import type { HoleDetailsProps } from "../../services/types";

type HolesTableProps = {
  holes: HoleDetailsProps[];
};

export const HolesTable = ({ holes }: HolesTableProps) => {
  const handleParUpdate = async (
    id: string,
    newValue: number,
  ): Promise<number> => {
    return await updateHolePar(id, newValue);
  };

  return (
    <div className="holes-table-container">
      <table className="holes-table">
        <thead className="holes-table-header">
          <tr>
            <th className="holes-table-title holes-table-column-hole">Trou</th>
            <th className="holes-table-title holes-table-column-par">Par</th>
            <th className="holes-table-title holes-table-column-tees">
              Départs
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {holes.map((hole) => (
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
                    onUpdate={handleParUpdate}
                  />
                </div>
              </td>
              <td className="holes-table-cell holes-table-column-tees">
                <div className="holes-table-data-tees">
                  {hole.tees ? (
                    hole.tees
                      .sort((a, b) => a.Distance - b.Distance)
                      .map((tee) => (
                        <EditableTee
                          key={tee.id}
                          id={tee.id}
                          color={tee.Color}
                          value={tee.Distance}
                        />
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
