import type React from "react";

import "./DisplayMessage.css";

type DisplayMessageProps = {
  title: string;
  text: string;
};

const DisplayMessage: React.FC<DisplayMessageProps> = ({ text, title }) => {
  return (
    <div className="display-message-container">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default DisplayMessage;
