import React, { useState } from "react";
import Close from "../assets/close.svg";

const PortfolioItem = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const redirectToLink = (url) => {
    if (url.startsWith("http://") || url.startsWith("https://")) {
      window.open(url, "_blank");
    } else {
      window.open("http://" + url, "_blank");
    }
  };

  return (
    <div className="portfolio_item">
      <img src={img} alt="project" className="portfolio_img" />
      <div className="portfolio_hover" onClick={toggleModal}>
        <h3 className="portfolio_title">{title}</h3>
      </div>
      {modal && (
        <div className="portfolio_modal">
          <div className="portfolio_modal-content">
            <img
              src={Close}
              alt="modalClose"
              className="modal_close"
              onClick={toggleModal}
            />
            <h3 className="modal_title">{title}</h3>
            <ul className="modal_list grid">
              {details.map(({ icon, title, desc }, index) => {
                if (title === "Preview : " || title === "Source : ") {
                  return (
                    <li
                      className="modal_item"
                      key={index}
                      onClick={() => redirectToLink(desc)}
                    >
                      <span className="item_icon">{icon}</span>
                      <div>
                        <span className="item_title">{title}</span>
                        <span className="item_details">{desc}</span>
                      </div>
                    </li>
                  );
                } else {
                  return (
                    <li className="modal_item" key={index}>
                      <span className="item_icon">{icon}</span>
                      <div>
                        <span className="item_title">{title}</span>
                        <span className="item_details">{desc}</span>
                      </div>
                    </li>
                  );
                }
              })}
            </ul>

            <img src={img} alt="modalImg" className="modal_img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
