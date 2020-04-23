/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "swiper/swiper.scss"
import Header from "./header"
import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./footer"
import "aos/dist/aos.css"
import $ from "jquery"

const Layout = ({ children }) => {
  // const [count, setCount] = useState(0)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const listenScrollEvent = async () => {
    console.log("idher hai abhi bhi")
    let inTransition = false
    if ($(document)?.scrollTop() > $(".section-work")?.position()?.top + 150) {
      $("body").css("background", $(".section-work").attr("data-color"))
      setTimeout(async () => {
        $(".section-work .container, .section-work .work-title").css(
          "opacity",
          "1"
        )
        const count = await localStorage.getItem("count")
        if (count === "0") {
          $(".text-row").css("opacity", "1")
          await localStorage.setItem("count", 1)
          // await setCount(1)
          setTimeout(function() {
            if (!inTransition) {
              if ($(".left-image-row").hasClass("active")) {
                inTransition = true
                $(".left-image-row").removeClass("active")
                //$('.left-image-row').delay(600).fadeOut('slow');
                $(".left-image-row").css("opacity", "0")
                setTimeout(function() {
                  $(".right-image-row").css("opacity", "1")
                  $(".right-image-row").addClass("active")
                }, 800)

                setTimeout(function() {
                  inTransition = false
                }, 1000)
              } else if ($(".text-row")?.hasClass("active")) {
                inTransition = true
                $(".text-row").removeClass("active")
                //$('.text-row').delay(600).fadeOut('slow');
                $(".text-row").css("opacity", "0")
                setTimeout(function() {
                  $(".left-image-row").css("opacity", "1")
                  $(".image-div").css({ top: "-10%", opacity: "1" })
                  $(".mobile-image-div").css({ top: "-10%", opacity: "1" })

                  $(".left-image-row").addClass("active")
                }, 500)

                setTimeout(function() {
                  inTransition = false

                  setTimeout(function() {
                    inTransition = true
                    $(".left-image-row").removeClass("active")
                    //$('.left-image-row').delay(600).fadeOut('slow');
                    $(".left-image-row").css("opacity", "0")

                    setTimeout(function() {
                      $(".image-div").css({ right: "10%", opacity: "1" })
                      $(".mobile-image-div").css({ top: "40%", opacity: "1" })

                      $(".right-image-row").css("opacity", "1")
                      $(".right-image-row").addClass("active")
                      $(".btn-work").addClass("btn-work-active")
                      $(".btn-work").css("opacity", "1")
                    }, 350)

                    setTimeout(function() {
                      inTransition = false
                    }, 1000)
                  }, 1300)
                }, 1000)
              }
            }
          }, 1000)
        }
      }, 350)
    } else if (
      $(document)?.scrollTop() >=
      $(".section-main .main-section-text")?.position()?.top + 500
    ) {
      // $(".work-title").css("opacity", "0")
      // $(
      //   ".section-work .container, .section-work .work-title .main-section-text"
      // ).css("opacity", "0")
      $("body").css("background", $(".section-main").attr("data-color"))
    } else {
      setTimeout(function() {
        // $("body").css("background", $(".section-main").attr("data-color"))
        return $(".section-work .container, .section-work .work-title")?.css(
          "opacity",
          "0"
        )
      }, 200)
    }

    if ($(document).scrollTop() > $(".section-clients").position().top - 200) {
      $("body").css("background", $(".section-clients").attr("data-color"))

      setTimeout(function() {
        $(".section-clients .container, .section-clients .section-title").css(
          "opacity",
          "1"
        )
      }, 500)
    } else {
      setTimeout(function() {
        $(".section-clients .container, .section-clients .section-title").css(
          "opacity",
          "0"
        )
      }, 500)
    }
    if (
      $(document).scrollTop() >=
      $(".section-services").position().top - 200
    ) {
      $("body").css("background", $(".section-services").attr("data-color"))

      setTimeout(function() {
        $(".section-services .container, .section-services .section-title").css(
          "opacity",
          "1"
        )
      }, 500)
    } else {
      setTimeout(function() {
        $(".section-services .container, .section-services .section-title").css(
          "opacity",
          "0"
        )
      }, 500)
    }
    if ($(document).scrollTop() > $(".section-blog").position().top - 200) {
      $("body").css("background", $(".section-blog").attr("data-color"))

      setTimeout(function() {
        $(".section-blog .container, .section-blog .section-title").css(
          "opacity",
          "1"
        )
      }, 500)
    } else {
      setTimeout(function() {
        $(".section-blog .container, .section-blog .section-title").css(
          "opacity",
          "0"
        )
      }, 500)
    }

    if ($(document).scrollTop() > $(".section-spotlights").position().top) {
      $("body").css("background", $(".section-spotlights").attr("data-color"))
    }

    if ($(document).scrollTop() > $(".section-social").position().top - 200) {
      $("body").css("background", $(".section-social").attr("data-color"))

      setTimeout(function() {
        $(".section-social .container, .section-social .section-title").css(
          "opacity",
          "1"
        )
      }, 500)
    } else {
      setTimeout(function() {
        $(".section-social .container, .section-social .section-title").css(
          "opacity",
          "0"
        )
      }, 500)
    }

    $.fn.isInViewport = function() {
      let elementTop = $(this).offset().top
      let elementBottom = elementTop + $(this).outerHeight()

      let viewportTop = $(window).scrollTop()
      let viewportBottom = viewportTop + $(window).height()

      return elementBottom > viewportTop && elementTop < viewportBottom
    }
  }

  useEffect(() => {
    localStorage.setItem("count", 0)
    let element = document.getElementsByTagName("body")[0]
    element.style.backgroundColor = "#eb5751"
    $(".main-section-text").css("opacity", "1")
    $(".section-title").css("opacity", "0")
    window.addEventListener("scroll", listenScrollEvent)

    return () => {
      window.removeEventListener("scroll", listenScrollEvent)
    }
  }, [])
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div style={{ overflowX: "hidden" }}>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
