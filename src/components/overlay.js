import React, { useRef, useEffect, useState } from "react"
import Styles from "../styles/styles.module.scss"
import classnames from "classnames"
import completeLogo from "../images/CC_Logo.svg"
import { Link } from "gatsby"
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedIn,
  YoutubeIcon,
} from "./icons"
import hubpsot from "../images/hubpsot.png"

const Overlay = ({ overlay }) => {
  const overlayRef = useRef()
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    if (counter !== 0) {
      overlayRef.current.style.width = "100%"
    } else {
      setCounter(counter => counter + 1)
    }
  }, [overlay])
  const handleOverlay = () => {
    overlayRef.current.style.width = 0
  }
  return (
    <React.Fragment>
      <div id="myNav" className={Styles.overlay} ref={overlayRef}>
        <Link to="/" className={Styles.menuLogo}>
          <img src={completeLogo} alt="Logo" />
        </Link>
        <a className={Styles.closebtn} onClick={handleOverlay}></a>

        <div className={Styles.overlayMain}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul className={classnames(Styles.menuItems, Styles.firstMenu)}>
                  <li className="d-flex justify-content-center">
                    <a
                      target="_blank"
                      href="http://creativecavemarketing.com/index.html"
                    >
                      Home
                    </a>
                  </li>
                  <li className="d-flex justify-content-center">
                    <a
                      target="_blank"
                      href="http://creativecavemarketing.com/about.html"
                    >
                      About
                    </a>
                  </li>
                  <li className="d-flex justify-content-center">
                    <Link to="/contact-us">Contact</Link>
                  </li>
                  <li className="d-flex justify-content-center">
                    <a
                      target="_blank"
                      href="https://blog.creativecavemarketing.com/"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={Styles.footerContainer}>
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-4">
                  <ul className={Styles.footerLinks}>
                    <li>
                      <a
                        className="mr-0 pr-2"
                        target="_blank"
                        href="https://blog.creativecavemarketing.com/"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <Link className="ml-0 pl-1" to="/privacy-policy">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                  <p className="text-center text-lg-left">
                    &copy; <strong>creative care</strong>
                  </p>
                </div>
                <div className="col-lg-4 d-flex align-items-center justify-content-center">
                  <div className={Styles.footerLogoContainer}>
                    <img src={hubpsot} alt="Footer Logo" />
                  </div>
                </div>
                <div className="col-lg-4 d-flex align-items-center justify-content-center">
                  <ul className={Styles.socialIcons}>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/company-beta/10988876/"
                      >
                        <LinkedIn width="20" height="20" fill={"white"} />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/creativecavemarketing/"
                      >
                        <InstagramIcon width="20" height="20" fill={"white"} />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/creativecavemarketing/"
                      >
                        <FacebookIcon width="20" height="20" fill={"white"} />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://twitter.com/CreativeCaveMkt"
                      >
                        <TwitterIcon width="20" height="20" fill={"white"} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Overlay
