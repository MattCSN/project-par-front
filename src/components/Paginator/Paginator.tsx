import './Paginator.css';

import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton.tsx";

interface PaginatorProps {
    currentPage: number;
    itemsCount: number;
    onNextPage: () => void;
    onPreviousPage: () => void;
}

const Paginator = ({currentPage, itemsCount, onNextPage, onPreviousPage}: PaginatorProps) => {
    return (
        <div className="paginator-container">
            <div className="paginator-content">
                <PrimaryButton text={"Page précédente"} onClick={onPreviousPage} disabled={currentPage === 1}/>
                <p className="paginator-current">Page {currentPage}</p>
                <PrimaryButton text={"Page suivante"} onClick={onNextPage}
                               disabled={itemsCount < 11}/>
            </div>
        </div>
    );
};

export default Paginator;