import React from "react";

const Navbar = () => {
  // render() {
  return (
    <div style={{ fontFamily: "cursive"}}>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top fs-6" >
        <div className="container-fluid">
          <i class="bi bi-newspaper text-warning fs-3 "></i>
          <a className="navbar-brand" href="/">
            &nbsp; News-Now
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-auto">
                {/* <i class="fa-solid fa-dumbbell"></i> */}
                {/* <img src={ic-sp} alt="" /> */}
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <div className="d-lg-flex bg-success  text-md-start text-center">
                <li className="nav-item mx-2">
                  {/* <FontAwesomeIcon icon="fa-solid fa-volleyball" /> */}
                  <a href="/business" className="nav-link active">
                    business
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a href="/health" className="nav-link active">
                    health
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a href="/entertainment" className="nav-link active">
                    entertainment
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a href="/science" className="nav-link active">
                    science
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a href="/sports" className="nav-link active">
                    sports
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a href="/technology" className="nav-link active">
                    technology
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a href="/general" className="nav-link active">
                    general
                  </a>
                </li>
              </div>
            </ul>
          </div>
          <div className="d-lg-flex d-none  text-white">
             designed by: Betha Venkata sreenath
          </div>
        </div>
      </nav>
    </div>
  );
  // }
};

export default Navbar;
