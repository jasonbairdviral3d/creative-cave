import React from "react"
import Styles from "../styles/styles.module.scss"
import classNames from "classnames"
import {
  TwitterIcon,
  FacebookIcon,
  YoutubeIcon,
  LinkedIn,
  InstagramIcon,
} from "./icons"
import hubpsot from "../images/hubpsot.png"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className={classNames(Styles.footer)}>
      <div className="container d-md-flex align-items-center justify-content-between text-center text-md-left">
        <div>
          <ul className="d-flex pl-0">
            <li className="mr-2">
              <a target="_blank" href="https://blog.creativecavemarketing.com/">
                Blog
              </a>
            </li>
            <li>|</li>
            <li className="ml-2 mb-0">
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
          <p>
            &copy; <strong>creative care</strong>
          </p>
        </div>
        <div className={Styles.imageWrapper}>
          <img src={hubpsot} />
        </div>
        <ul className={Styles.socialIcons}>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/creative-cave-marketing/"
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
            <a target="_blank" href="https://twitter.com/CreativeCaveMkt">
              <TwitterIcon width="20" height="20" fill={"white"} />
            </a>
          </li>
          {/* <li>
            <a target="_blank" href="">
              <YoutubeIcon width="20" height="20" fill={"white"} />
            </a>
          </li> */}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
