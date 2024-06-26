import React, { useState } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";
import { Link } from "react-router-dom";
import TermsPopUp from "../terms/TermsPopUp";

const Footer = () => {
    const [show, setShow] = useState(false);
    const [id, setId] = useState(null);

    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li
                        className="menuItem"
                        onClick={() => {
                            setShow(true);
                            setId(0);
                        }}
                    >
                        Terms Of Use
                    </li>
                    <li
                        className="menuItem"
                        onClick={() => {
                            setShow(true);
                            setId(1);
                        }}
                    >
                        Privacy-Policy
                    </li>
                    <li
                        className="menuItem"
                        onClick={() => {
                            setShow(true);
                            setId(2);
                        }}
                    >
                        About
                    </li>
                </ul>
                <div className="infoText">
                    Experience the magic of movies like never before at D-Cinema.
                    Whether you're a fan of blockbuster hits, indie gems,
                    or classic films, we have something for everyone. Enjoy our
                    state-of-the-art screens, immersive sound systems, and
                    comfortable seating for the ultimate movie-going experience.
                </div>
                <div className="socialIcons">
                    <Link
                        to={
                            "https://www.facebook.com/dhananjay.chauhan.9400?mibextid=ZbWKwL"
                        }
                        target="_blank"
                        className="icon"
                    >
                        <FaFacebookF />
                    </Link>
                    <Link
                        to={
                            "https://www.instagram.com/dhananjaychauhan__?igsh=MWloeXprZncxbmtveQ=="
                        }
                        target="_blank"
                        className="icon"
                    >
                        <FaInstagram />
                    </Link>
                    <Link
                        to={
                            "https://x.com/dhananjay9400?t=S0meU_-j52AUkOLoyonVLQ&s=09"
                        }
                        target="_blank"
                        className="icon"
                    >
                        <FaXTwitter />
                    </Link>
                    <Link
                        to={
                            "https://www.linkedin.com/in/dhananjay-chauhan-7521a4191"
                        }
                        target="_blank"
                        className="icon"
                    >
                        <FaLinkedin />
                    </Link>
                </div>
            </ContentWrapper>
            <TermsPopUp
                id={id}
                setId={setId}
                show={show}
                setShow={setShow}
            />
        </footer>
    );
};

export default Footer;
