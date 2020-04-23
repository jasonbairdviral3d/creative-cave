import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import Styles from "../styles/styles.module.scss"
import Overlay from "./overlay"
import hamburger from "../images/hamburger.svg"
import completeLogo from "../images/CC_Logo.svg"
import halfLogo from "../images/C_Logo.svg"
import $ from "jquery"
import classnames from "classnames"
const Header = ({ siteTitle }) => {
  const [overlay, setOverlay] = useState(false)

  const listenScrollEvent = () => {
    var scroll = $(window).scrollTop()
    var scrollHeader = $("header").outerHeight()
    if (scroll > scrollHeader) {
      $(".site-logo").css("opacity", "0")
      $(".sticky-logo").css("opacity", "1")
    } else {
      $(".site-logo").css("opacity", "1")
      $(".sticky-logo").css("opacity", "0")
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  }, [])
  return (
    <header className={classnames(Styles.header, "header")}>
      <Overlay overlay={overlay} />
      <div className="container-fluid p-3">
        <div className="d-flex justify-content-between">
          <div className={Styles.logoWrapper}>
            <img
              src={completeLogo}
              className={classnames(
                Styles.siteLogo,
                Styles.logo,
                "site-logo logo"
              )}
              alt="Logo"
            />
            <img
              src={halfLogo}
              className={classnames(
                Styles.stickyLogo,
                Styles.logo,
                "sticky-logo logo"
              )}
              alt="Logo"
            />
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setOverlay(!overlay)
            }}
          >
            <img src={hamburger} />
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
