import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <h1>Страница с информацией</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas
        molestias tempore nulla adipisci repellendus magni ullam neque.
        Repellendus, corporis!
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Обратно к списку дел
      </button>
    </>
  );
};
