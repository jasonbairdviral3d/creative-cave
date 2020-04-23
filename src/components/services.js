import React, { useState } from "react"
import Styles from "../styles/styles.module.scss"
import bw from "../images/bw.png"
import { RightArrow } from "./icons"
import classnames from "classnames"
import { Link } from "gatsby"
import $ from "jquery"
const data = [
  {
    imageSrc: bw,
    text:
      "Want more leads knocking on your door? More new business? We thought so.",
    link: "Inbound Marketing",
    active: true,
  },
  {
    imageSrc: bw,
    text:
      "Do you know where your audience works and plays online? We do, and you need to meet them there.",
    link: "Paid Media & PR",
    active: false,
  },
  {
    imageSrc: bw,
    text:
      "You said you want more inbound leads, right? Your website and digital ecosystem have to be built to convert them.",
    link: "Websites & Technology",
    active: false,
  },
  {
    imageSrc: bw,
    text:
      "“B2B doesn’t have to be boring,”  remember?! Create a brand that your audience wants to be a part of.",
    link: "Creative",
    active: false,
  },
]

const Services = () => {
  const [rightSectionData, setRightSectionData] = useState(data[0])
  const [prevIndex, setPrevIndex] = useState(0)

  const handleActiveLink = index => {
    $(".service-link").css("pointer-events", "none")
    setPrevIndex(index)
    data[index].active = true
    data[prevIndex].active = false
    $(".service-text").css("opacity", "0")
    $(".img-fluid").css("opacity", "0")
    // $(".vertical-list").css("opacity", "0")
    setTimeout(function() {
      setRightSectionData(data[index])
      $(".service-text").css("opacity", "1")
      $(".img-fluid").css("opacity", "1")
      // $(".vertical-list").css("opacity", "1")
      $(".service-link").css("pointer-events", "inherit")
    }, 800)
  }
  return (
    <section
      data-color="#55B49B"
      className={classnames(Styles.sectionServices, "section-services")}
    >
      <span className={classnames(Styles.sectionTitle, "section-title")}>
        Services
      </span>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-5 order-1 order-lg-0">
            <ul className={classnames(Styles.verticalList, "vertical-list")}>
              {/* <li className={Styles.active}>
                <p onClick={() => handleActiveLink(0)}>
                  {rightSectionData.link}
                </p>
              </li> */}
              {data.map(({ link, text, imageSrc, active }, index) => {
                return (
                  <li className={`${active ? Styles.active : ""}`}>
                    <p
                      onClick={() => handleActiveLink(index)}
                      className="service-link"
                    >
                      {link}
                    </p>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="col-lg-6 order-0 order-lg-1 offset-lg-1 mb-5 mb-lg-0 text-center">
            <div className={Styles.verticalListContent}>
              <p className="service-text">{rightSectionData.text}</p>
              <img
                src={rightSectionData.imageSrc}
                className={classnames(Styles.imgFluid, "img-fluid")}
                alt="Content Image"
              />
              <Link
                to="/contact-us"
                className={classnames(Styles.cta, "d-flex align-items-center")}
              >
                Contact Us{" "}
                <span className="mr-2">
                  <RightArrow width="20" height="20" fill="#F6C24F" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
