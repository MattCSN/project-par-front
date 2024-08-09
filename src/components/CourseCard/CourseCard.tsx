import "./CourseCard.css";
import Tag from "../Tag/Tag.tsx";
import CaretButton from "../Buttons/LinkButton/LinkButton.tsx";

function CourseCard() {
    return (
        <div className="course-cards-container">
            <div className="course-card">
                <h2>Nom du golf sur une ligne maximum vraiment long</h2>
                <h3>Nom du parcours sur une ou deux lignes trop trop trop trop trop trop trop trop trop long</h3>

                <div className="course-card-tags">
                    <Tag text="18 trous" type="positive"/>
                    <Tag text="Pitch and Putt" type="positive"/>
                    <Tag text="Compact" type="positive"/>
                </div>

                <p>59800 Marcq-en-Baroeul</p>
                <p>France</p>
            </div>

            <div className="course-card-footer">
                <CaretButton text={"Voir les détails"}/>
            </div>
        </div>
    );
}

export default CourseCard;