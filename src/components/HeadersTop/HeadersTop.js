import React from "react";
import "./HeadersTop.css";

// import { GoLocation } from 'react-icons/go';
import { GoLocation } from "@react-icons/all-files/go/GoLocation";
import { FaRegClock } from "@react-icons/all-files/fa/FaRegClock";
import { FiFacebook } from "@react-icons/all-files/fi/FiFacebook";
import { RiTwitterLine } from "@react-icons/all-files/ri/RiTwitterLine";
import { ImPinterest2 } from "@react-icons/all-files/im/ImPinterest2";
import { ImLinkedin2 } from "@react-icons/all-files/im/ImLinkedin2";
const HeadersTop = () => {
  
  return (
    <div>
      <section class="header-top">
        <div class="container">
          <div class="row">
            <div class=" col-12 col-md-7">
              <div class="header-top-left">
                <div class="location">
                  {/* <i class="fas fa-map-marker-alt"></i> */}
                   <GoLocation class="me-2"/>
                  234 Triumph, Los Angeles,
                  California, US
                </div>
                <div class="time">
                  < FaRegClock class="me-2"/>
                  Mon - Sat 8.00 - 18.00. Sunday
                  CLOSED
                </div>
              </div>
            </div>
            <div class="col-12 col-md-5">
              <div class="header-top-right">
                <ul class="social-icon">
                  <li>
                     <FiFacebook/>
                  </li>
                  <li>
                    <RiTwitterLine/>
                  </li>
                  <li>
                    <ImPinterest2/>
                  </li>
                  <li>
                   <ImLinkedin2/>
                  </li>
                </ul>
                <div class="header-top-btn">
                  <a href="#" class="btn site-btn">
                    get a appointment!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeadersTop;
