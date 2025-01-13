import Head from "next/head";
import Image from "next/image";
import { IonIcon } from "@ionic/react";
import {
  closeCircleOutline,
  chevronForwardCircleOutline,
  menuOutline,
  telescopeOutline,
  desktopOutline,
  chevronForwardOutline,
  bulbOutline,
  arrowUpOutline,
  location,
  mail,
  call,
  logoTwitter,
  logoInstagram,
  logoFacebook,
  rocketOutline,
  codeSlashOutline,
  colorPaletteOutline,
  phonePortraitOutline,
} from "ionicons/icons";

export default function Home() {
  return (
    <body id="top">
      <header className="header" data-header>
        <div className="container">
          <div className="overlay" data-overlay></div>
          <a href="#">
            <h1 className="logo">Northern Breeeze</h1>
          </a>
          <nav className="navbar" data-navbar>
            <div className="navbar-top">
            <Image
                  src="https://avatars.githubusercontent.com/u/68122202?s=400&u=4abc9827a8ca8b9c19b06b9c5c7643c87da51e10&v=4"
                  width={100}
                  height={100}
                  className="rounded-circle"
                  alt="Northern Breeze Logo"
                />
              <a href="#" className="logo">
                Northern Breeze
              </a>
              <button
                className="nav-close-btn"
                aria-label="Close Menu"
                data-nav-close-btn
              >
                <IonIcon icon={closeCircleOutline} size="small" />
              </button>
            </div>
            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="#home" className="navbar-link" data-navbar-link>
                  Home
                </a>
              </li>

              <li className="navbar-item">
                <a href="#about" className="navbar-link" data-navbar-link>
                  About
                </a>
              </li>

              <li className="navbar-item">
                <a href="#services" className="navbar-link" data-navbar-link>
                  Services
                </a>
              </li>

              <li className="navbar-item">
                <a href="#features" className="navbar-link" data-navbar-link>
                  Features
                </a>
              </li>

              <li className="navbar-item">
                <a href="#blog" className="navbar-link" data-navbar-link>
                  Blog
                </a>
              </li>

              <li className="navbar-item">
                <a href="#" className="navbar-link" data-navbar-link>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          <a href="#" className="btn">
            <IonIcon icon={chevronForwardCircleOutline} />
            <span>Get A Quote</span>
          </a>

          <button
            className="nav-open-btn"
            aria-label="Open Menu"
            data-nav-open-btn
          >
            <IonIcon icon={menuOutline} />
          </button>
        </div>
      </header>
      <main>
        <article>
          <section className="hero" id="home">
            <div className="container">
              <div className="hero-content">
                <p className="hero-subtitle">Solutions and Innovation</p>
                <h2 className="h2 hero-title">
                  We offer software solutions and Innovations
                </h2>
                <p className="hero-text">
                  At Northern We Offer Software Solution and Innovation for
                  Small and Medium Business That Scales
                </p>
                <button className="btn">Learn More</button>
              </div>
              <figure className="hero-banner">
                <Image
                  src="https://raw.githubusercontent.com/codewithsadee/desinic/master/assets/images/hero-banner.png"
                  width="694"
                  height="529"
                  loading="lazy"
                  alt="hero-banner"
                  className="w-100 banner-animation"
                />
              </figure>
            </div>
          </section>
          <section className="section about" id="about">
            <div className="container">
              <figure className="about-banner">
                <Image
                  src="https://github.com/codewithsadee/desinic/blob/master/assets/images/about-banner.png?raw=true"
                  width="700"
                  height="532"
                  loading="lazy"
                  alt="about banner"
                  className="w-100 banner-animation"
                />
              </figure>
              <div className="about-content">
                <h2 className="h2 section-title underline">Why Our Agency</h2>
                <p className="about-text">
                  We work closely with you to make sure your vision reaches
                  market quicker. We are in it with you in the long run, with
                  support and brain storming of ideas. Your Ideas don't have to
                  be market proven we will make sure they reach market quicker
                  to test out what the user likes.
                </p>
                <p className="about-text">
                  We accomodate any kind of idea and budget, we also have full
                  visibility on where we are and when is the product ready to
                  reach market.
                </p>
              </div>
            </div>
          </section>
          <section className="section service" id="services">
            <div className="container">
              <h2 className="h2 section-title underline">
                Our Speciallization
              </h2>

              <ul className="service-list">
                <li>
                  <div className="service-card">
                    <div className="card-icon">
                      <IonIcon icon={telescopeOutline} />
                    </div>
                    <h3 className="h3 title">Strategy & Research</h3>
                    <p className="text">
                      We dive deep into understanding your business, industry
                      trends, and audience insights. Our team crafts effective
                      strategies tailored to your goals, ensuring data-driven
                      decisions for sustainable growth.
                    </p>
                    <button className="card-btn" aria-label="Show More">
                      <IonIcon icon={chevronForwardCircleOutline} />
                    </button>
                  </div>
                </li>
                <li>
                  <div className="service-card">
                    <div className="card-icon">
                      <IonIcon icon={desktopOutline} />
                    </div>
                    <h3 className="h3 title">Web Development</h3>
                    <p className="text">
                      From simple websites to complex platforms, we create
                      high-quality, responsive, and scalable web solutions. Our
                      development process focuses on functionality, design, and
                      user experience to bring your vision to life.
                    </p>
                    <button className="card-btn" aria-label="Show More">
                      <IonIcon icon={chevronForwardCircleOutline} />
                    </button>
                  </div>
                </li>
                <li>
                  <div className="service-card">
                    <div className="card-icon">
                      <IonIcon icon={phonePortraitOutline} />
                    </div>
                    <h3 className="h3 title">Cross Platform Mobile</h3>
                    <p className="text">
                      We offer cross-platform mobile solution for android and
                      iOS, leverage technologies such as React Native or
                      Flutter. We will help you reach user on the mobile
                      platform with our cross-platform solutions
                    </p>
                    <button className="card-btn" aria-label="Show More">
                      <IonIcon icon={chevronForwardOutline} />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section className="section features" id="features">
            <div className="container">
              <h2 className="h2 section-title underline">Our Features</h2>
              <ul className="features-list">
                <li>
                  <div className="features-card">
                    <div className="icon">
                      <IonIcon icon={bulbOutline} />
                    </div>
                    <div className="content">
                      <h3 className="h3 title">Idea & Analysis</h3>
                      <p className="text">
                        We transform your ideas into actionable strategies
                        through in-depth research and analysis. By understanding
                        your business needs and goals, we lay the foundation for
                        success.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="features-card">
                    <div className="icon">
                      <IonIcon icon={colorPaletteOutline} />
                    </div>
                    <div className="content">
                      <h3 className="h3 title">Designing</h3>
                      <p className="text">
                        Our creative team crafts visually stunning and
                        user-friendly designs that capture your brand essence.
                        We prioritize aesthetics, functionality, and a seamless
                        user experience.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <figure className="features-banner">
                <Image
                  src="https://raw.githubusercontent.com/codewithsadee/desinic/master/assets/images/feautres-banner.png"
                  width="369"
                  height="318"
                  loading="lazy"
                  alt="Features Banner"
                  className="w-100 banner-animation"
                />
              </figure>
              <ul className="features-list">
                <li>
                  <div className="features-card">
                    <div className="icon">
                      <IonIcon icon={codeSlashOutline} />
                    </div>
                    <div className="content">
                      <h3 className="h3 title">Development</h3>
                      <p className="text">
                        Our expert developers build robust and scalable
                        solutions using the latest technologies. From coding to
                        deployment, we ensure your project is both efficient and
                        future-proof.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="features-card">
                    <div className="icon">
                      <IonIcon icon={rocketOutline} />
                    </div>
                    <div className="content">
                      <h3 className="h3 title">Testing & Lunching</h3>
                      <p className="text">
                        Before launching, we rigorously test every aspect of
                        your solution to ensure performance, security, and
                        usability. Once perfected, we help you launch with
                        confidence.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </main>
      <footer className="footer">
        <div className="footer-top section">
          <div className="container">
            <div className="footer-brand">
              <a href="#" className="logo">
                Northern Breeze
              </a>
              <p className="text">
                Maecenas pellentesque placerat quam, in finibus nisl tincidunt
                sed. Aliquam magna augue, malesuada ut feugiat eget, cursus eget
                felis.
              </p>
              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    <IonIcon icon={logoFacebook} />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <IonIcon icon={logoInstagram} />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <IonIcon icon={logoTwitter} />
                  </a>
                </li>
              </ul>
            </div>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Our links</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Services
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Team
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Blog
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Our Services</p>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Strategy & Research
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Web Solution
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  App Design
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Other links</p>
              </li>
              <li>
                <a href="#" className="footer-link">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Support
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Contact Us</p>
              </li>
              <li className="footer-item">
                <div className="footer-item-icon">
                  <IonIcon icon={call} />
                </div>
                <div>
                  <a href="#" className="footer-item-link">
                    +27 72 793 2352
                  </a>
                </div>
              </li>
              <li className="footer-item">
                <div className="footer-item-icon">
                  <IonIcon icon={mail} />
                </div>
                <div>
                  <a href="#" className="footer-item-link">
                    samuelmthwa79@gmail.com
                  </a>
                  <a href="#" className="footer-item-link">
                    cybermanleumas@gmail.com
                  </a>
                </div>
              </li>
              <li className="footer-item">
                <div className="footer-item-icon">
                  <IonIcon icon={location} />
                </div>
                <address className="footer-item-link">
                  Riverside View Fourways
                </address>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2023{" "}
            <a href="#" className="copyright-link">
              Northern Breeze
            </a>
            . All Right Reserved
          </p>
        </div>
      </footer>
      <a
        href="#top"
        className="go-top active"
        aria-label="Go To Top"
        data-go-top
      >
        <IonIcon icon={arrowUpOutline} />
      </a>
    </body>
  );
}
