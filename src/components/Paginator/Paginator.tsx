import './Paginator.css';
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton.tsx";

function Paginator() {
    return (
        <div className="paginator-container">
            <div className="paginator-content">
                <PrimaryButton text={"Page précédente"}/>
                <p className="paginator-current">page 2</p>
                <PrimaryButton text={"Page suivante"}/>
            </div>
        </div>
    );
}

export default Paginator;