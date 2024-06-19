import React from "react";
import "./style.scss";

const TermsPopUp = ({ data, setData, show, setShow }) => {
    const hidePopup = () => {
        setShow(false);
        setData(null);
    };
    return (
        <div className={`termsPopup ${show ? "visible" : ""}`}>
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="terms">
                <span className="closeBtn" onClick={hidePopup}>
                    <button className="btn">Close</button>
                </span>
                <div className="termsText">{data}</div>
            </div>
        </div>
    );
};

export default TermsPopUp;
