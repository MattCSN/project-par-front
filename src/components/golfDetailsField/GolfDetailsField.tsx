import "./GolfDetailsField.css";

type GolfDetailsFieldProps = {
  title: string;
  value: string;
  last?: boolean;
  link?: boolean;
};

export function GolfDetailsField({
  title,
  value,
  last,
  link,
}: GolfDetailsFieldProps) {
  return (
    <div className={`golf-details-field-container ${last ? "last" : ""}`}>
      <div className="golf-details-field">
        <h4>{title}</h4>
        {link ? (
          <a href={value} target="_blank" rel="noopener noreferrer">
            {value}
          </a>
        ) : (
          <p>{value}</p>
        )}
      </div>
    </div>
  );
}
