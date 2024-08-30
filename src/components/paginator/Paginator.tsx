import "./Paginator.css";

import PrimaryButton from "../buttons/primaryButton/PrimaryButton";

type PaginatorProps = {
  currentPage: number;
  itemsCount: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
};

const Paginator = ({
  currentPage,
  itemsCount,
  onNextPage,
  onPreviousPage,
}: PaginatorProps) => {
  return (
    <div className="paginator-container">
      <div className="paginator-content">
        <PrimaryButton
          text={"Précédente"}
          onClick={onPreviousPage}
          disabled={currentPage === 1}
        />
        <p className="paginator-current">Page {currentPage}</p>
        <PrimaryButton
          text={"Suivante"}
          onClick={onNextPage}
          disabled={itemsCount < 11}
        />
      </div>
    </div>
  );
};

export default Paginator;
