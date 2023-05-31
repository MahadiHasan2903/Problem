import React from "react";
import { personalInfo } from "../data";

const Info = () => (
  <>
    {personalInfo.map(({ title, description }, index) => (
      <li className="info_item" key={index}>
        <span className="info_title">{title}</span>
        <span className="info_description">{description}</span>
      </li>
    ))}
  </>
);

export default Info;
