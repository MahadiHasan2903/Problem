import React from "react";
import { status } from "../data";
import parse from "html-react-parser";

const Status = () => {
  return (
    <>
      {status.map(({ no, title }, index) => {
        return (
          <div className="status_box" key={index}>
            <h3 className="status_no">{no}</h3>
            <p className="status_title">{parse(title)}</p>
          </div>
        );
      })}
    </>
  );
};

export default Status;
