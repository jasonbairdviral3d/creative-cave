import React, { useState } from "react"
import Styles from "../styles/styles.module.scss"
import classnames from "classnames"
import { RightArrow } from "./icons"
import PaidSearch from "../images/paidSearchBlog.png"
import ContentMarketing from "../images/contentMarketingBlog.png"
import CaronaBlog from "../images/caronaBlog.png"

import { Link, graphql, useStaticQuery } from "gatsby"

const Blogs = () => {
  const {
    allInstaNode: { edges },
  } = useStaticQuery(graphql`
    query MyQuery {
      allInstaNode {
        edges {
          node {
            thumbnails {
              src
            }
            caption
            username
            likes
            original
          }
        }
      }
    }
  `)
  const [data, setData] = useState(edges.slice(0, 3))
  const [textBlog, setTextBlog] = useState("show more blogs")

  const handleBlogs = () => {
    if (textBlog === "show more blogs") {
      setData(edges)
      setTextBlog("show less blogs")
    } else {
      setData(edges.splice(0, 3))
      setTextBlog("show more blogs")
    }
  }
  return (
    <React.Fragment>
      <section
        data-color="#98C1D0"
        className={classnames(Styles.sectionBlog, "section-blog")}
      >
        <span className={classnames(Styles.sectionTitle, "section-title")}>
          Blog
        </span>
        <div className="container mt-5">
          <div className="row">
            <div className="col text-center">
              <span className={Styles.sectionSubHeading}>
                Need some marketing sauce?
              </span>
              <h2>We’ve got a blog for that.</h2>
            </div>
          </div>

          <div className="row">
            <div className="col text-center">
              <form className={Styles.formInline}>
                <div className={Styles.formGroup}>
                  <label htmlFor="exampleInputEmail1" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    className={Styles.formControl}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <button
                  type="submit"
                  className={classnames(Styles.btn, "btn ml-lg-4")}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section
        data-color="#EFEFEF"
        className={classnames(Styles.sectionSpotlights, "section-spotlights")}
      >
        <div className="container">
          <div className={classnames("row", Styles.spotlightRow)}>
            {/* {data.map(({ node: { thumbnails, caption } }, key) => {
              return (
                <div className={classnames("", Styles.spotlightCol)} key={key}>
                  <div className={Styles.spotlight}>
                    <div className={Styles.imageWrapper}>
                      {console.log("thumbail", thumbnails)}
                      <img
                        className={Styles.imgFluid}
                        src={thumbnails[3].src}
                        alt="Spotlight Image"
                      />
                    </div>
                    <div className={Styles.contentWrapper}>
                      <span className={Styles.subHeading}>
                        CONTENT MARKETING
                      </span>
                      <h3 className={Styles.heading}>{caption}</h3>
                      <Link to="/">
                        Read More{" "}
                        <RightArrow width="20" height="20" fill="#55B49B" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })} */}

            <div className={classnames("", Styles.spotlightCol)}>
              <div className={Styles.spotlight}>
                <div className={Styles.imageWrapper}>
                  <img
                    className={Styles.imgFluid}
                    src={CaronaBlog}
                    alt="Spotlight Image"
                  />
                </div>
                <div className={Styles.contentWrapper}>
                  <span className={Styles.subHeading}>REMOTE WORKING TIPS</span>
                  <h3 className={Styles.heading}>
                    Coronavirus, Remote Working & Your Business: Make the Best
                    of a Bad Situation
                  </h3>
                  <a
                    href="https://blog.creativecavemarketing.com/coronavirus-remote-working-your-business-make-the-best-of-a-bad-situation"
                    target="__blank"
                  >
                    Read More{" "}
                    <RightArrow width="20" height="20" fill="#55B49B" />
                  </a>
                </div>
              </div>
            </div>

            <div className={classnames("", Styles.spotlightCol)}>
              <div className={Styles.spotlight}>
                <div className={Styles.imageWrapper}>
                  <img
                    className={Styles.imgFluid}
                    src={PaidSearch}
                    alt="Spotlight Image"
                  />
                </div>
                <div className={Styles.contentWrapper}>
                  <span className={Styles.subHeading}>PAID SEARCH</span>
                  <h3 className={Styles.heading}>
                    The Quick Guide to B2B Paid Search
                  </h3>
                  <a
                    href="https://blog.creativecavemarketing.com/the-quick-guide-to-b2b-paid-search"
                    target="__blank"
                  >
                    Read More{" "}
                    <RightArrow width="20" height="20" fill="#55B49B" />
                  </a>
                </div>
              </div>
            </div>

            <div className={classnames("", Styles.spotlightCol)}>
              <div className={Styles.spotlight}>
                <div className={Styles.imageWrapper}>
                  <img
                    className={Styles.imgFluid}
                    src={ContentMarketing}
                    alt="Spotlight Image"
                  />
                </div>
                <div className={Styles.contentWrapper}>
                  <span className={Styles.subHeading}>CONTENT MARKETING</span>
                  <h3 className={Styles.heading}>
                    9 B2B Content Marketing Strategies and Examples
                  </h3>
                  <a
                    href="https://blog.creativecavemarketing.com/9-b2b-content-marketing-strategies-and-examples"
                    target="__blank"
                  >
                    Read More{" "}
                    <RightArrow width="20" height="20" fill="#55B49B" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={Styles.buttonWrapper}>
          <p className={Styles.seeMore}> SHOW MORE BLOGS</p>
        </div> */}
      </section>
    </React.Fragment>
  )
}

export default Blogs
