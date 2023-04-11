import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Northern Breeze</title>
        <meta
          name="description"
          content="Modern Software development that does not not break"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <Image
                src="https://avatars.githubusercontent.com/u/68122202?s=400&u=4abc9827a8ca8b9c19b06b9c5c7643c87da51e10&v=4"
                alt="Northern Breeze"
                width="100"
                height="100"
                className="rounded-circle"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  ></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    Work
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    About
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <ul className="navbar-nav me-auto">
                  <li className="nav-link">
                    <a className="nav-link" href="#">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <button className="btn btn-outline-success" type="button">
                  Start a project
                </button>
              </form>
            </div>
          </div>
        </nav>
        <header>
          <div className="overlay"></div>
          <video playsInline={true} autoPlay={true} muted={true} loop={true}>
            <source src="./hero.mp4" type="video/mp4" />
          </video>
          <div className="container h-100">
            <div className="d-flex h-100 text-center align-items-center">
              <div className="w-100 text-white">
                <h1 className="display-3">Northern Breeze</h1>
                <p className="lead mb-0">
                  Let&lsquo;s start building something today
                </p>
                <button className="btn btn-primary">Start a project</button>
              </div>
            </div>
          </div>
        </header>
        <section className="services-section">
          <h4 className="small-header">Services</h4>
          <h2 className="large-header">Our Services</h2>
          <p className="description">
            Northern Breeze is a trusted software development business that
            provides reliable and cost-effective solutions. With a team of
            experienced developers, we offer tailored software development
            services for websites, web applications, mobile apps, and custom
            software. Our transparent and collaborative approach ensures that
            you are involved throughout the development process, and our
            utilization of industry standards and cutting-edge technologies
            ensures that we deliver scalable, robust, and secure solutions. Our
            competitive pricing and flexible payment options make our services
            affordable for businesses of all sizes, without compromising on
            quality or reliability. Partner with AffordableDev for affordable
            and reliable software solutions that meet your business needs.
            Contact us today for a free quote!
          </p>
          <div className="cards">
            <div className="row">
              <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
