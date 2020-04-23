import React, { useRef, useEffect } from "react"
import Styles from "../styles/styles.module.scss"
import smile from "../images/smile.png"
import sleep from "../images/sleep.png"
import classnames from "classnames"
import $ from "jquery"
import "./jumbotron.scss"
import { Link } from "gatsby"
const Jumbotron = () => {
  const jumbotronRef = useRef()

  useEffect(() => {
    setTimeout(function() {
      $(".first-item").css({ opacity: "0", top: "280px" })
      setTimeout(function() {
        $(".second-item").css("opacity", "1")
        setTimeout(function() {
          $(".start-btn").css("opacity", "1")
        }, 1000)
      }, 900)
    }, 1000)
  })
  return (
    <div
      data-color="#EB5751"
      className={classnames(Styles.jumbotron, "section-main")}
      ref={jumbotronRef}
    >
      <div className="container">
        <div className="row position-relative">
          <div className="col d-flex align-items-center justify-content-center flex-column position-absolute first-item">
            <img src={sleep} alt="Smile Icon" style={{ width: "110px" }} />
            <h1
              className={classnames(
                Styles.mainSectionText,
                "text-center  main-section-text"
              )}
            >
              B2B Doesn't have to be boring.
            </h1>
          </div>
          <div className="d-flex flex-column align-items-center position-absolute second-item-main">
            <div className="col d-flex align-items-center justify-content-center flex-column second-item">
              <img src={smile} alt="Smile Icon" style={{ width: "110px" }} />
              <h1
                className={classnames(
                  Styles.mainSectionText,
                  "text-center  main-section-text second-heading"
                )}
              >
                Stand out from the crowd. <br /> Build more relationships. Close
                more deals.
              </h1>
            </div>
            <div>
              <Link to="/" className="btn theme-primary-btn start-btn">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron
