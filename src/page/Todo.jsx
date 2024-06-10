import React, { useState } from 'react';
import '../component/style.css';

export default function Todo() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="wrapper">
      <aside id="sidebar" className={isExpanded ? 'expand' : ''}>
        <div className="d-flex">
          <div className="user-img">
            <a data-bs-toggle="dropdown" aria-expanded="false">
              <img src="img/gojo.png" alt="me" />
            </a>
            <ul className="dropdown-menu mt-5 ms-2" style={{ backgroundColor: '#006E92' }}>
              <div className="dropdown-item d-flex gap-1">
                <img src="img/gojo.png" alt="me" />
                <div className="mt-3 text-white">
                  <h3>Satoru Gojo</h3>
                  <span>@satorugojo</span>
                </div>
              </div>
              <li>
                <hr style={{ width: 'auto', color: 'white', height: '2px', border: 'none', backgroundColor: 'white' }} />
              </li>
              <li>
                <a className="dropdown-item text-white" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item text-white" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item text-white" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr style={{ width: 'auto', color: 'white', height: '2px', border: 'none', backgroundColor: 'white' }} />
              </li>
              <li>
                <a className="dropdown-item text-white" href="/">
                  logout
                </a>
              </li>
            </ul>
          </div>
          <div className="sidebar-logo text-white">
            <a>Satoru Gojo</a>
            <span>@satorugojo</span>
          </div>
          <div className="logo">
            <div className="sidebar-item">
              <a href="#" className="sidebar-link">
                <i className="fi fi-rr-bell"></i>
              </a>
            </div>
            <button className="toggle-btn" type="button" onClick={handleToggle}>
              <i className="fi fi-rr-sidebar"></i>
            </button>
          </div>
        </div>

        <hr style={{ width: 'auto', color: 'white', height: '2px', border: 'none', backgroundColor: 'white' }} />

        <ul className="sidebar-nav">
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="lni lni-home"></i>
              <span>Home</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="lni lni-user"></i>
              <span>Profile</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="/Todo" className="sidebar-link">
              <i className="fi fi-rr-clipboard-list"></i>
              <span>Projects</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="lni lni-bubble"></i>
              <span>Chat</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="/Tips1" className="sidebar-link">
              <i className="fi fi-rr-bulb"></i>
              <span>Tips</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="fi fi-rr-search"></i>
              <span>Search</span>
            </a>
          </li>
        </ul>

        <hr style={{ width: 'auto', color: 'white', height: '2px', border: 'none', backgroundColor: 'white' }} />

        <div className="sidebar-item">
          <a href="#" className="sidebar-link">
            <i className="fi fi-rr-interrogation"></i>
            <span>Help</span>
          </a>
        </div>

        <hr style={{ width: 'auto', color: 'white', height: '2px', border: 'none', backgroundColor: 'white' }} />

        <div className="sidebar-item">
          <a href="#" className="sidebar-link">
            <i className="lni lni-diamond-alt"></i>
            <span>Upgrade your plan</span>
          </a>
        </div>
      </aside>
      <div className="main p-3">
        <div className="d-flex justify-content-between">
          <div className="text-left">
            <p>My Project #1</p>
            <p className="desk">
              Let's make your day more productive by using <br />
              Producify!
            </p>
          </div>
          <div className="date">
            <p>1 Januari 2025</p>
          </div>
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
}
