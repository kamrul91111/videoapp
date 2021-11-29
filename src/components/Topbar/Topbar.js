import React from "react";
import {Navbar, Nav} from "rsuite";
import {Link} from "react-router-dom";
import './topnav.css'

// import default style fir react suite
import 'rsuite/dist/rsuite.min.css'; 

const Topbar = () => {
  return (
    <div>
      <Navbar style={{backgroundColor: "lightblue"}}>
        {/* logo area */}
        <Navbar.Header>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <a href="/" className="navbar-brand logo">
              <h6>Video App</h6>
            </a>
          </div>
        </Navbar.Header>
        {/* items */}
        <Navbar.Body>
          <Nav>
            <Nav.Item>
              <Link
                className="link"
                style={{textDecoration: "none"}}
                to="/"
              >
                Videos
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                className="link"
                to="/playlists"
                style={{textDecoration: "none"}}
              >
                Playlists
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </div>
  );
};

export default Topbar;
