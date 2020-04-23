import React, { useEffect } from "react"
import Layout from "../components/layout"
import ContactForm from "../components/ContactForm"
import Header from "../components/header"
import Footer from "../components/footer"
import $ from "jquery"
const ContactUsPage = () => {
  useEffect(() => {
    localStorage.setItem("count", 0)
    let element = document.getElementsByTagName("body")[0]
    element.style.backgroundColor = "#eb5751"
    $(".main-section-text").css("opacity", "1")
    $(".section-title").css("opacity", "0")
  }, [])
  return (
    <React.Fragment style={{ backgroundColor: "#eb5751" }}>
      <Header />
      <ContactForm />
      <Footer />
    </React.Fragment>
  )
}

export default ContactUsPage
