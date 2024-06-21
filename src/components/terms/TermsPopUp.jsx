import React from "react";
import "./style.scss";

const TermsPopUp = ({ id, setId, show, setShow }) => {
    const hidePopup = () => {
        setShow(false);
        setId(null);
    };
    return (
      <div className={`termsPopup ${show ? "visible" : ""}`}>
        <div className="opacityLayer" onClick={hidePopup}></div>
        <div className="terms">
          <span className="closeBtn" onClick={hidePopup}>
            <button className="btn">Close</button>
          </span>
          <div className="termsText">
            {id === 0 && (
              <div>
                <h2 style={{ textAlign: "center" }}>Terms Of Use</h2>
                <p style={{ color: "white" }}>
                  Welcome to D-Cinema site. By accessing or using our Site, you
                  agree to comply with and be bound by these Terms of Use (the
                  "Terms"). Please read these Terms carefully before using our
                  Site.<br/><br/> Acceptance of Terms By using the Site, you agree to
                  these Terms and our Privacy Policy. If you do not agree with
                  any part of these Terms, you must not use the Site.<br/><br/> Changes to
                  Terms We may modify these Terms at any time. Any changes will
                  be effective immediately upon posting. Your continued use of
                  the Site constitutes your acceptance of the modified Terms.
                  Thank you for visiting D-Cinema. Enjoy your movie experience!
                </p>
              </div>
            )}
            {id === 1 && (
              <div>
                <h2 style={{ textAlign: "center" }}>Privacy-Policy</h2>
                <p style={{ color: "white" }}>
                  Welcome to D-Cinema site. We are committed to protecting your
                  privacy. This Privacy Policy outlines how we collect, use,
                  disclose, and safeguard your information when you visit our
                  Site. Please read this Privacy Policy carefully.
                  <br />
                  <br /> Data Security We implement appropriate technical and
                  organizational measures to protect your information from
                  unauthorized access, use, or disclosure. However, no method of
                  transmission over the internet or electronic storage is
                  completely secure.
                  <br />
                  <br />
                  Children's Privacy Our Site is not intended for children under
                  the age of 13. We do not knowingly collect personal
                  information from children under 13. If we become aware that we
                  have inadvertently received personal information from a child
                  under 13, we will delete such information from our records.
                  Changes to This Privacy Policy
                  <br />
                  <br /> We may update this Privacy Policy from time to time.
                  Any changes will be effective immediately upon posting the
                  updated Privacy Policy on our Site. Your continued use of the
                  Site after the changes are posted constitutes your acceptance
                  of the revised Privacy Policy.
                </p>
              </div>
            )}
            {id === 2 && (
              <div>
                <h2 style={{ textAlign: "center" }}>About Us</h2>
                <p style={{ color: "white" }}>
                  Welcome to D-Cinema, where the magic of cinema comes alive!
                  <br />
                  <br />
                  Who We Are At <br />
                  <br /> D-Cinema, we are passionate about bringing you the best
                  movie-going experience possible. From the latest blockbusters
                  to timeless classics and independent films, we curate a
                  diverse selection of movies to satisfy every taste. Our
                  mission is to create a welcoming space where film lovers can
                  come together and enjoy the art of storytelling on the big
                  screen.
                  <br />
                  <br />
                  Thank you for choosing D-Cinema. Sit back, relax, and let the
                  magic of cinema captivate you!
                  <br />
                  <br />
                  Contact Us For more information, feedback, or inquiries,
                  please feel free to reach out to us at
                  dhananjay.chauhan9500@gmail.com. We look forward to seeing you
                  at the movies!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default TermsPopUp;
