import React from "react";
import Img from "./img/logo2.png";
import Card1 from "./img/card-1.jpg";
import Card2 from "./img/card-2.jpg";
import Card3 from "./img/card-3.jpg";
import SVG from "./img/chart.svg";
import Nav from "./components/navbar/navbar";

import Video from "./img/Magic-Mouse-Scroll.mp4";

function App() {
  return (
    <div>
      <Nav />
      <header id="home" className="header">
        <div className="header__logo-box">
          <img className="header__logo" src={Img} alt="no pic" />
        </div>

        <div className="header__text-box   ">
          <h1 className="heading-primary">
            <span className="heading-primary--main">
              We are Digital Agency{" "}
            </span>
            <span className="heading-primary--sub">& Marketing</span>
          </h1>
          <a href="#" className="btn btn--white">
            Contact with us
          </a>
        </div>
      </header>

      <main>
        <section  className="section-about">
          <div className="u-center-text u-margin-bottom-small">
            <h2 className="heading-secondary ">
              <span className="heading-secondary--main">
                Why does your business need{" "}
                <span className="heading-secondary--main u-margin-bottom-small">
                  {" "}
                  AgencyCo?
                </span>
              </span>
              <span id="info" className="heading-secondary--sub">
                Following reasons show advantages of adding AgencyCo to your
                lead
                <span  className="heading-secondary--sub">
                  pages, demos and checkouts
                </span>
              </span>
            </h2>
          </div>

          <div  className="row">
            <div className="col-1-of-3">
              <div className="card">
                <div className="u-margin-bottom-small">
                  {" "}
                  <img className="card__img" src={Card1} alt="img" />
                </div>
                <div className="u-center-text">
                  <h3 className="card__heading">
                    <span className="card__heading--main u-display-block">
                      Backlink Analytics
                    </span>
                    <span className="card__heading--sub">
                      <span className="u-display-block">
                        Build your online store’s trust using Social
                      </span>
                      <span className="u-display-block">
                        Proof & Urgency. Realize importance of
                      </span>
                      <span className="u-display-block">
                        social proof in customer’s purchase
                      </span>
                      <span className="u-display-block">decision.</span>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="card">
                <div className="u-margin-bottom-small">
                  {" "}
                  <img className="card__img" src={Card2} alt="img" />
                </div>
                <div className="u-center-text">
                  <h3 className="card__heading">
                    <span className="card__heading--main u-display-block">
                      Keyword Rankings
                    </span>
                    <span className="card__heading--sub">
                      <span className="u-display-block">
                        Increase sales by showing true dynamics of{" "}
                      </span>
                      <span className="u-display-block">
                        your website. Build your online store’s trust
                      </span>
                      <span className="u-display-block">
                        using Social Proof & Urgency for your{" "}
                      </span>
                      <span className="u-display-block">business.</span>
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              {" "}
              <div className="card">
                <div className="u-margin-bottom-small">
                  {" "}
                  <img className="card__img" src={Card3} alt="img" />
                </div>
                <div className="u-center-text">
                  <h3 className="card__heading">
                    <span className="card__heading--main u-display-block">
                      Competitor Analysis
                    </span>
                    <span className="card__heading--sub">
                      <span className="u-display-block">
                        Realize importance of social proof in
                      </span>
                      <span className="u-display-block">
                        customer’s purchase decision. Increase
                      </span>
                      <span className="u-display-block">
                        sales by showing true dynamics of your
                      </span>
                      <span className="u-display-block">website.</span>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-info">
          <div className="bg-video">

            <video className="bg-video__content" autoPlay muted loop>
              <source src={Video} type="video/mp4" />
              your browers cant suppoert
            </video>



          </div>
          <div className="u-center-text u-margin-bottom-big">
            <div className="row">
              <div className="col-1-of-2">
                <div className="u-margin-bottom-small">
                  <h2 className="card__heading--main">Who we are</h2>
                  <p className="heading-tertiary__paragraph">
                    <span className="u-display-block">
                      Proactively syndicate open-source e-markets after low-risk
                    </span>
                    <span className="u-display-block">
                      high-yield synergy. Professionally simplify visionary
                    </span>
                    <span className="u-display-block">
                      technology before team driven sources.
                    </span>
                  </p>
                </div>
                <div className="row">
                  <div className="col-1-of-2">
                    <h3 className="heading-tertiary">
                      <span className=" heading-tertiary--main">
                        <svg
                          className="heading-tertiary__svg  heading-tertiary__svg--blue"
                          xmlns="http://www.w3.org/2000/svg"
                         
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 19h-4v-4h4v4zm6 0h-4v-8h4v8zm6 0h-4v-13h4v13zm6 0h-4v-19h4v19zm1 2h-24v2h24v-2z" />
                        </svg>
                        Increase
                      </span>
                    </h3>
                    <p className="heading-tertiary__paragraph">
                      A top promo bar that counts down until a few discounts.
                    </p>
                  </div>
                  <div className="col-1-of-2">
                    {" "}
                    <h3 className="heading-tertiary">
                    
                      <span className="heading-tertiary--main">
                        <svg
                          className="heading-tertiary__svg  heading-tertiary__svg--red"
                          xmlns="http://www.w3.org/2000/svg"
                         
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 3.875l-6 1.221 1.716 1.708-5.351 5.358-3.001-3.002-7.336 7.242 1.41 1.418 5.922-5.834 2.991 2.993 6.781-6.762 1.667 1.66 1.201-6.002zm0 17.125v2h-24v-22h2v20h22z" />
                        </svg>
                        Product analytics
                      </span>
                    </h3>
                    <p className="heading-tertiary__paragraph">
                      Display recent conversions, build credibility and trust.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-1-of-2">
                <div className="bg-video__img">
                  <img className="bg-video__img--image" src={SVG} alt="svg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="Main-Img-text">
          <div className="row Main-Img-text__card">
            <div className="col-1-of-2">
              <div className="Main-Img-text__img"></div>
            </div>
            <div className="u-display-block">
              <div className="col-1-of-2">
                <div className="card__heading--main u-display-block">
                  Happy to Assist You
                  <p className="heading-tertiary__paragraph">
                    Professionally simplify visionary technology before team
                    driven sources.
                  </p>
                </div>

                <div className="row">
                  <div className="u-display-block">
                    <div className="col-1-of-2">
                      <div className="u-margin-bottom-small">
                        <h3 className="heading-tertiary">
                        
                          <span className="heading-tertiary--main">
                            <svg
                              className="heading-tertiary__svg  heading-tertiary__svg--green"
                              xmlns="http://www.w3.org/2000/svg"
                             
                              viewBox="0 0 24 24"
                            >
                              <path d="M22 4v12h-20v-12h20zm2-2h-24v16h24v-16zm-7 18h-10v2h10v-2z" />
                            </svg>
                            Product analytics
                          </span>
                        </h3>
                        <p className="heading-tertiary__paragraph">
                          Synergistically deliver next-generation relationships
                          whereas bleeding-edge resources.
                        </p>
                      </div>
                      <div className="u-margin-bottom-small">
                      <a href="#" className="btn btn--white  Main-Img-text__btn_none">
                        Contact with us
                      </a></div>
                    </div>{" "}
                  </div>
                  <div className="u-display-block">
                    <div className="col-1-of-2">
                      <h3 className="heading-tertiary">
                        <span className="heading-tertiary--main">
                          <svg
                            className="heading-tertiary__svg  heading-tertiary__svg--purple"
                            xmlns="http://www.w3.org/2000/svg"
                            
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 9v8h-2v-8h2zm2-2h-6v12h6v-12zm6-4v14h-2v-14h2zm2-2h-6v18h6v-18zm6 13v3h-2v-3h2zm2-2h-6v7h6v-7zm1 9h-24v2h24v-2z" />
                          </svg>
                          Product analytics
                        </span>
                      </h3>
                      <p className="heading-tertiary__paragraph">
                        Phosfluorescently empower compelling intellectual
                        capital and revolutionary web services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

<span id="price" className="heading-secondary--main u-center-text u-border">
                      Over Services
                    </span>
        <section  className="section-Price">

        
          <div className="row">
       

            <div className="col-1-of-3">
              <div className="card">

             
                <div className="u-margin-bottom-small"> </div>

                <div className="u-center-text">
                  <div className="u-border-bottom u-margin-bottom-small">
                    <div className="u-margin-bottom-small ">
                      <h3 className="card__heading">
                        <span className="card__heading--main--2 u-display-block">
                          $29
                          <spa className="card__heading--sub--2 u-display-block">
                            Basic License
                          </spa>
                        </span>
                      </h3>
                    </div>
                  </div>
                  <div className="u-margin-bottom-small">
                    <ul className="section-Price__list-container">
                      <li className="section-Price__list">
                        Push Notifications
                      </li>
                      <li className="section-Price__list">Data Transfer</li>
                      <li className="section-Price__list">SQL Database</li>
                      <li className="section-Price__list">
                        Search & SEO Analytics
                      </li>
                      <li className="section-Price__list">
                        24/7 Phone Support
                      </li>
                      <li className="section-Price__list">
                        2 months technical suppor
                      </li>
                      <li className="section-Price__list">
                        2+ profitable keyword
                      </li>
                    </ul>
                  </div>
                  <a href="#" className="btn btn--dark">
                    Purchuse Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="card  card--white">
                <div className="u-margin-bottom-small"> </div>

                <div className="u-center-text">
                  <div className="u-border-bottom u-margin-bottom-small">
                    <div className="u-margin-bottom-small ">
                      <h3 className="card__heading">
                        <span className="card__heading--main--2 u-display-block">
                          $149
                          <spa className="card__heading--sub--2 u-display-block">
                            Extended License
                          </spa>
                        </span>
                      </h3>
                    </div>
                  </div>
                  <div className="u-margin-bottom-small">
                    <ul className="section-Price__list-container  section-Price__list-container--white">
                      <li className="section-Price__list">
                        Push Notifications
                      </li>
                      <li className="section-Price__list">Data Transfer</li>
                      <li className="section-Price__list">SQL Database</li>
                      <li className="section-Price__list">
                        Search & SEO Analytics
                      </li>
                      <li className="section-Price__list">
                        24/7 Phone Support
                      </li>
                      <li className="section-Price__list">
                        1 Year technical support
                      </li>
                      <li className="section-Price__list">
                        50+ profitable keyword
                      </li>
                    </ul>
                  </div>
                  <a href="#" className="btn btn--white">
                    Purchuse Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              {" "}
              <div className="card">
                <div className="u-margin-bottom-small"> </div>

                <div className="u-center-text">
                  <div className="u-border-bottom u-margin-bottom-small">
                    <div className="u-margin-bottom-small ">
                      <h3 className="card__heading">
                        <span className="card__heading--main--2 u-display-block">
                          $29
                          <spa className="card__heading--sub--2 u-display-block">
                            Basic License
                          </spa>
                        </span>
                      </h3>
                    </div>
                  </div>
                  <div className="u-margin-bottom-small">
                    <ul className="section-Price__list-container">
                      <li className="section-Price__list">
                        Push Notifications
                      </li>
                      <li className="section-Price__list">Data Transfer</li>
                      <li className="section-Price__list">SQL Database</li>
                      <li className="section-Price__list">
                        Search & SEO Analytics
                      </li>
                      <li className="section-Price__list">
                        24/7 Phone Support
                      </li>
                      <li className="section-Price__list">
                        2 months technical suppor
                      </li>
                      <li className="section-Price__list">
                        2+ profitable keyword
                      </li>
                    </ul>
                  </div>
                  <a href="#" className="btn btn--dark">
                    Purchuse Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="Contact-section">
          <div className="u-left-text u-margin-bottom-medium">
            <div className="row">
              <div className="col-1-of-2">
                <h2 className="heading-secondary ">
                  <div className="u-margin-bottom-smaller">
                    <span className="heading-secondary--main">
                      Contact with us
                    </span>
                  </div>

                  <span className="heading-secondary--sub">
                    <div className="u-margin-bottom-small">
                      Use the contact form or
                      <span className="heading-secondary--sub">
                        pay us a visit for a coffee at the office. Dynamically
                        innovate
                      </span>
                      <span className="heading-secondary--sub">
                        competitive technology after an expanded array of
                        leadership.
                      </span>
                    </div>

                    <div className="u-margin-bottom-small">
                      <span className="heading-secondary--sub">
                        Head Office
                      </span>
                      <span className="heading-secondary--sub">
                        121 King St, Melbourne VIC 3000, Australia
                      </span>
                    </div>
                    <div className="u-margin-bottom-small">
                      <span className="heading-secondary--sub">
                        Phone: +61 2 8376 6284
                      </span>
                      <span className="heading-secondary--sub">
                        Email : hello@yourdomain.com
                      </span>
                    </div>
                  </span>
                </h2>
              </div>

              <div className="col-1-of-2">
                <h2 className="heading-secondary ">
                  <div className="u-margin-bottom-smaller">
                    <span className="heading-secondary--main">
                      Reach us quickly
                    </span>
                  </div>
                </h2>
                <form action="" className="Contact-section__input">
                  <div className="row">
                    <div className="col-1-of-2">
                      <input
                        type="text"
                        className="Contact-section__input"
                        placeholder="Enter name"
                      />
                    </div>
                    <div className="col-1-of-2">
                      <input
                        type="email"
                        className="Contact-section__input"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1-of-2">
                      <input
                        type="text"
                        className="Contact-section__input"
                        placeholder="Your Phone"
                      />
                    </div>
                    <div className="col-1-of-2">
                      <input
                        type="text"
                        className="Contact-section__input"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <textarea
                      type="text"
                      className="Contact-section__input"
                      placeholder="Message..."
                    />
                  </div>
                  <button
                    href="#"
                    className="btn2 btn2--white u-center-text u-align"
                  >
                    Submit
                  </button>
                </form>{" "}
              </div>
            </div>
          </div>
        </section>
        <section className="footer-section">
          <div className="row">
            <div className="col-1-of-3">
              <div className="row">
                <div className="col-1-of-2">
                  <div className="u-display-block">
                    <img
                      className="header__logo"
                      style={{ color: "red" }}
                      width="100%"
                      src={Img}
                      alt="no pic"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row u-display-block heading-tertiary__paragraph u-line-height">
              <div className="col-1-of-4 u-display-block"> About Us</div>
              <div className="col-1-of-4 u-display-block">Contact Us</div>
              <div className="col-1-of-4 u-display-block">Pricing</div>
              <div className="col-1-of-4 u-display-block">
                Our Services
                <span className="u-display-block">
                  {" "}
                  &copy; site created by Jason Aviles{" "}
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <section className="grid-test">
        <div className="row">
          <div className="col-1-of-2">col-1-of-2"</div>
          <div className="col-1-of-2">col-1-of-2"</div>
        </div>

        <div className="row">
          <div className="col-1-of-3">col-1-of-3</div>
          <div className="col-1-of-3">col-1-of-3</div>

          <div className="col-1-of-3">col-1-of-3</div>
        </div>

        
        <div className="row">
          <div className="col-1-of-3">col-1-of-3</div>
        

          <div className="col-2-of-3">col-2-of-3</div>
        </div>


        <div className="row">
          <div className="col-1-of-4">col-1-of-4</div>
          <div className="col-1-of-4">col-1-of-4</div>
          <div className="col-1-of-4">col-1-of-4</div>
          <div className="col-1-of-4">col-1-of-4</div>
        </div>

        <div className="row">
          <div className="col-1-of-4">col-1-of-4</div>
          <div className="col-1-of-4">col-1-of-4</div>
          <div className="col-2-of-4">col-2-of-4</div>
  
        </div>

        <div className="row">
          <div className="col-1-of-4">col-1-of-4</div>
        
          <div className="col-3-of-4">col-3-of-4</div>
  
        </div>
      </section> */}
    </div>
  );
}

export default App;
