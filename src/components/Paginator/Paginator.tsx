import './Paginator.css';
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton.tsx";

interface PaginatorProps {
    currentPage: number;
    onNextPage: () => void;
    onPreviousPage: () => void;
}

const Paginator = ({currentPage, onNextPage, onPreviousPage}: PaginatorProps) => {
    return (
        <div className="paginator-container">
            <div className="paginator-content">
                <PrimaryButton text={"Page précédente"} onClick={onPreviousPage} disabled={currentPage === 1}/>
                <p className="paginator-current">Page {currentPage}</p>
                <PrimaryButton text={"Page suivante"} onClick={onNextPage}/>
            </div>
        </div>
    );
};

export default Paginator;