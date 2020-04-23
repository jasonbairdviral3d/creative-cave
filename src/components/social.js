import React, { useState, useRef } from "react"
import Styles from "../styles/styles.module.scss"
import marketing from "../images/CC_IG-Post_9-B2B--Content-Marketing--Strategies-and--Examples.png"
import awarness from "../images/CC_IG-Post_How-B2B-Brand--Awareness-Tactics--Help-Your-Customers--Find-You.png"
import generation from "../images/CC_IG-Post_6-B2B-Lead-Generation-Tactics-to-Increase-Your-Sales-Opportunities.png"
import relevant from "../images/CC_IG-Post_Are-Keywords--Still-Relevant-to--SEO-in-2020.png"
import post from "../images/CC_IG-Post_LongerBlogsPerformBetter.png"
import blog from "../images/image1.png"
import classnames from "classnames"
import { DownArrow, UpArrow, SliderLeftArrow, SliderRightArrow } from "./icons"
import Swiper from "react-id-swiper"

const Social = () => {
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

  return (
    <section
      data-color="#52557D"
      className={classnames(Styles.sectionSocial, "section-social")}
    >
      <span className={classnames(Styles.sectionTitle, "section-title")}>
        Social
      </span>
      <div className="container mt-5">
        <h2>Hang out in the Cave</h2>
        <div className="row d-none d-sm-flex">
          <div className="col-sm-6 col-lg-4 mb-3">
            <div className={Styles.imageWrapper}>
              <a
                href="https://www.instagram.com/p/B5tEF9tBdJi/"
                target="__blank"
              >
                <img
                  className={Styles.imgFluid}
                  src={marketing}
                  alt="Blog post"
                />
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-3">
            <div className={Styles.imageWrapper}>
              <a
                href="https://www.instagram.com/p/B4gE8JeDWQW/"
                target="__blank"
              >
                <img
                  className={Styles.imgFluid}
                  src={awarness}
                  alt="Blog post"
                />
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-3">
            <div className={Styles.imageWrapper}>
              <a
                href="https://www.instagram.com/p/B5ECpb5l9h6/"
                target="__blank"
              >
                <img
                  className={Styles.imgFluid}
                  src={generation}
                  alt="Blog post"
                />
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-3">
            <div className={Styles.imageWrapper}>
              <a
                href="https://www.instagram.com/p/B3p5XGBF0E8/"
                target="__blank"
              >
                <img
                  className={Styles.imgFluid}
                  src={relevant}
                  alt="Blog post"
                />
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-3">
            <div className={Styles.imageWrapper}>
              <a
                href="https://www.instagram.com/p/B2zhrdzlgT7/"
                target="__blank"
              >
                {" "}
                <img className={Styles.imgFluid} src={post} alt="Blog post" />
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-3">
            <div className={Styles.imageWrapper}>
              <a
                href="https://www.instagram.com/p/B2AgpqQhwpU/"
                target="__blank"
              >
                <img className={Styles.imgFluid} src={blog} alt="Blog post" />
              </a>
            </div>
          </div>
        </div>

        <section className="d-sm-none">
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
              {[
                { imageSrc: marketing },
                { imageSrc: awarness },
                { imageSrc: generation },
                { imageSrc: relevant },
                { imageSrc: post },
                { imageSrc: blog },
              ].map(({ imageSrc }, index) => {
                return (
                  <div
                    className={Styles.imageWrapper}
                    ref={el => (textRef.current[index] = el)}
                    key={index}
                  >
                    <img
                      className={Styles.imgFluid}
                      src={imageSrc}
                      alt="Blog post"
                    />
                  </div>
                )
              })}
            </Swiper>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Social
