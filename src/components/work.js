import React, { useEffect } from "react"
import "./work.scss"
import $ from "jquery"
import { Link } from "gatsby"
const Work = () => {
  const listenScrollEvent = () => {
    var inTransition = false
    var windowHeight = $(window).height()
    if (
      $(document).scrollTop() >
      $(".section-work").position().top + windowHeight / 6
    ) {
      // if (!inTransition) {
      //   if ($(".right-image-row").hasClass("active")) {
      //   } else if ($(".left-image-row").hasClass("active")) {
      //     inTransition = true
      //     $(".left-image-row").removeClass("active")
      //     //$('.left-image-row').delay(600).fadeOut('slow');
      //     $(".left-image-row").css("opacity", "0")
      //     setTimeout(function() {
      //       $(".right-image-row").css("opacity", "1")
      //       $(".right-image-row").addClass("active")
      //     }, 700)
      //     setTimeout(function() {
      //       inTransition = false
      //     }, 1200)
      //   } else if ($(".text-row").hasClass("active")) {
      //     inTransition = true
      //     $(".text-row").removeClass("active")
      //     //$('.text-row').delay(600).fadeOut('slow');
      //     $(".text-row").css("opacity", "0")
      //     setTimeout(function() {
      //       $(".left-image-row").css("opacity", "1")
      //       $(".left-image-row").addClass("active")
      //     }, 700)
      //     setTimeout(function() {
      //       inTransition = false
      //     }, 1200)
      //   }
      // }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)

    return () => {
      window.removeEventListener("scroll", listenScrollEvent)
    }
  })

  return (
    <section data-color="#EFEFEF" className="container-fluid section-work ">
      <span className="work-title">Work</span>
      <div
        className="container position-relative"
        style={{ marginTop: "6rem" }}
      >
        <div
          id="first"
          className="row text-row active align-items-center justify-content-center"
        >
          <div className="col mb-5 mb-md-0 d-flex align-items-center justify-content-center">
            <div className="text-container">
              <h1>
                We're the B2B digital marketing agency you want to work with.
              </h1>
            </div>
          </div>
        </div>

        <div
          id="second"
          className="row left-image-row align-items-center justify-content-center"
        >
          <div className="col-md-6 mb-5 mb-md-0">
            <div className="image-wrapper">
              <img
                className="img-fluid"
                src={require("../images/man.png")}
                alt="Content Image"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-wrapper">
              <p>
                You are already an <span className="text-with-bg">expert</span>{" "}
                in your industry ..{" "}
              </p>
            </div>
          </div>
        </div>

        <div
          id="third"
          className="row right-image-row align-items-center justify-content-center"
        >
          <div className="col-md-6 mb-5 mb-md-0">
            <div className="text-wrapper d-flex align-items-center flex-column">
              <p>
                We're experts at using those insights to <br />
                <span className="text-with-bg">
                  captivate your audience and keep their attention
                </span>
              </p>
              <Link to="/" className="btn-work theme-primary-btn">
                Get Started
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-wrapper">
              <img
                className="img-fluid"
                src={require("../images/woman.png")}
                alt="Content Image"
              />
            </div>
          </div>
        </div>
        <div className="image-div">
          <img src={require("../images/yellow circle.png")} />
        </div>
        <div className="mobile-image-div">
          <img src={require("../images/yellow circle.png")} />
        </div>
      </div>
    </section>
  )
}

export default Work
