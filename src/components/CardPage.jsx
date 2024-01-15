import React, { useState } from "react";
import "./CardPage.css";
import InfoPage from "./InfoPage";

const CardPage = ({ user }) => {
  const [info, setInfo] = useState("");
  const [page, setPage] = useState("");

  const handleClick = () => {
    setInfo(
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, autem. Deserunt, "
    );
    setPage("");
  };

  const closeClick = () => {
    setInfo("");
    setPage("");
  };

  const addNewPage = () => {
    if (page) {
      setPage("");
    } else {
      setPage(user.info);
    }
  };

  return (
    <div>
      <div className="InfoCard">
        <div className="studentCard" onClick={addNewPage}>
          <img src={user.url} alt="Hello world" />
          <h2>{user.name}</h2>
          <h3>{user.surname}</h3>
          <p>{user.age}</p>
          <p>{user.work}</p>
          <p className={info ? <InfoPage /> : "hideInfo"}> {info}</p>
          <div className="btn">
            <button onClick={handleClick}>Click</button>
            <button onClick={closeClick}>Exit</button>
          </div>
        </div>
        <div className="minCard">
          <p className={page ? "showInfo" : "hideInfo"}> {page}</p>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
