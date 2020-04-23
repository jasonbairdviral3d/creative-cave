import React, { useEffect } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import $ from "jquery"
const PrivacyPolicyPage = () => {
  useEffect(() => {
    localStorage.setItem("count", 0)
    let element = document.getElementsByTagName("body")[0]
    element.style.backgroundColor = "#eb5751"
    $(".main-section-text").css("opacity", "1")
    $(".section-title").css("opacity", "0")
  }, [])
  return (
    <React.Fragment>
      <Header />
      <div style={{ backgroundColor: "#eb5751", height: "83vh" }}></div>
      <Footer />
    </React.Fragment>
  )
}

export default PrivacyPolicyPage
