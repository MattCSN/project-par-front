import './Paginator.css';
import ColoredButton from "../ColoredButton/ColoredButton.tsx";

function Paginator() {
    return (
        <div className="paginator-container">
            <div className="paginator-content">
                <ColoredButton text={"Page précédente"}/>
                <p className="paginator-current">page 2</p>
                <ColoredButton text={"Page suivante"}/>
            </div>
        </div>
    );
}

export default Paginator;