import React, { useState, useRef } from "react"
import Styles from "../styles/styles.module.scss"
import Swiper from "react-id-swiper"
import { SliderRightArrow, SliderLeftArrow, DownArrow, UpArrow } from "./icons"
import quotation from "../images/Quotation.png"
import classnames from "classnames"
import Alegion from "../images/Alegion_Logo_Final.png"
import Hyphen from "../images/Hyphen.png"
import PursuitSales from "../images/Pursuit_Sales_Logo.jpg"
import TenantBase from "../images/tenantbase-logo.png"
import Gaskill from "../images/The_Gaskill_Group.png"
import Upsuite from "../images/Upsuite-Logo.png"

const data = [
  {
    author: "Don Roedner, Alegion",
    review:
      "I just finished a 120-day website overhaul with Jon and CC, who in normal times also handle all of our design needs and troubleshoot HubSpot issues for us. These guys truly bring everything to our relationship: broad strategic marketing sensibilities, deep HubSpot expertise, tremendous design chops, around-the-clock TLC, love for MY company, and patience with a very fast-growing software startup. Jon and his team are consultative, great to brainstorm with, versatile and flexible, knowledgable to a fault, and palpably committed to my success as a marketing executive. I couldn't be more enthusiastic about endorsing a partner.",
    companyLogo: Alegion,
    readMore: true,
  },
  {
    author: "Ranjit Jose, Hyphen - Be Heard at Work!",
    review:
      "We have been using Creative Cave for last year and half and am extremely pleased with their work. They have been great to work with, nimble in adjusting to moving targets, and been key to executing our marketing strategy. Would recommend them any day.",
    readMore: false,
    companyLogo: Hyphen,
  },
  {
    author: "Carter Hopkins, Pursuit Sales Solutions",
    review:
      "Created Cave is more than an agency, they are a partner! We have moved all of our marketing efforts over to them and they have knocked it out of the park. Their efforts have helped us scale as a company. They took time to truly understand our goals and then execute upon them. I would recommend Creative Cave to anyone.",
    companyLogo: PursuitSales,
    readMore: false,
  },
  {
    author: "Mike Zei, TenantBase",
    review:
      "Creative Cave is a team that spends the time to get to know your business and helps get the best out of you to build a marketing strategy. They are organized, thoughtful and you can count on them deliver high quality work across the board. They continue to exceed my expectations after working together for almost a year.",
    companyLogo: TenantBase,
    readMore: false,
  },
  {
    author: "Amy Dettmer, The Gaskill Group, Keller Williams Realty",
    review:
      "Jon and Carter took the time to really understand our business, who we are and what was important to us before adding their creative ideas and making magic happen! That made all the difference when it came to our new logo design, colors and business cards. This company offers everything you could need to not just make you look good, but truly stand out in whatever industry you're in. Thank you!",
    companyLogo: Gaskill,
    readMore: true,
  },
  {
    author: "Ben Wright, Upsuite",
    review:
      "Creative Cave worked with Upsuite on content marketing for our business. They provided great strategy, reliable execution, and very high quality, professional work. I would recommend them highly!",
    companyLogo: Upsuite,
    readMore: false,
  },
]

const Carousel = () => {
  const textRef = useRef([])
  const [showLessBtnRef, setShowLessBtnRef] = useState([
    true,
    true,
    true,
    true,
    true,
  ])
  const [swiper, updateSwiper] = useState(null)
  const params = {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  }

  const handleText = index => {
    const activeText = textRef.current[index]
    if (activeText.style.height === "auto") {
      activeText.style.height = "165px"
      const temp = [...showLessBtnRef]
      temp[index] = !temp[index]
      setShowLessBtnRef(temp)
    } else {
      activeText.style.height = "auto"
      const temp = [...showLessBtnRef]
      temp[index] = !temp[index]
      setShowLessBtnRef(temp)
    }
  }

  return (
    <section
      data-color="#F6C24F"
      className={classnames(Styles.carousel, "section-clients")}
    >
      <span className="section-title">Clients</span>
      <div className="container mt-5 position-relative">
        <div className={Styles.heading}>
          <span className="mb-0">Our clients love working with us.</span>
          <h2 className="font-weight-bold">
            But they love our results even more.
          </h2>
        </div>
        <div className={classnames(Styles.carouselBtn, "mt-4")}>
          <button
            type="button"
            role="presentation"
            onClick={() => swiper.slidePrev()}
          >
            <span>
              <SliderLeftArrow width="20" height="15" />
            </span>
          </button>
          <button
            type="button"
            role="presentation"
            onClick={() => swiper.slideNext()}
          >
            <span>
              <SliderRightArrow width="20" height="15" />
            </span>
          </button>
        </div>
        <div className="mt-4">
          <Swiper {...params} getSwiper={updateSwiper}>
            {data.map(({ companyLogo, review, author, readMore }, index) => {
              return (
                <div className={Styles.presentationCard} key={index}>
                  <div>
                    <p
                      className={Styles.text}
                      ref={el => (textRef.current[index] = el)}
                    >
                      {review}
                    </p>
                    {readMore && (
                      <div
                        className={Styles.showLessButtons}
                        onClick={() => handleText(index)}
                      >
                        {showLessBtnRef[index] && (
                          <span className={Styles.show_text}>
                            Read More <DownArrow height="15" width="15" />
                          </span>
                        )}
                        {!showLessBtnRef[index] && (
                          <span className={Styles.hide_text}>
                            Read Less <UpArrow height="15" width="15" />
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <div>
                    <img src={companyLogo} alt="Group" width="100" />
                    <span className={Styles.nameOrg}>{author}</span>
                    <span className={Styles.designation}>
                      Marketing Manager
                    </span>
                  </div>
                </div>
              )
            })}
          </Swiper>
        </div>
        <div className={Styles.quotation}>
          <img src={quotation} />
        </div>
      </div>
    </section>
  )
}

export default Carousel
