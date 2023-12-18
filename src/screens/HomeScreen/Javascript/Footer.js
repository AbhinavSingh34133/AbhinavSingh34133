import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Footer.css"



const Footer = () => {
  return (
    <>
    <br />
    <br />
    <br />
    <br />
      <div class="container w-100" style={{backgroundColor:'#232323' , width:'full'}}>
        <footer class="py-5">
          <div class="row">
            <div class="col-2">
              <h5 className="text-warning">Useful Links</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    IIT Roorkee
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    UBA IIT Delhi
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Faculty
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Student Team
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Action Plan
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-3">
              <h5 className="text-warning">Recent Events</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2 text-muted">
                On the eve of 75th Independence Day, Team UBA IITR brings one-of-its-kind talk by Mr. Swapnil Tewari on topic- 'O Yuva!-Unleash your superpower.'
                </li>
                <li class="nav-item mb-2">
                  <a href="www.facebook.com/OYuva.ubaiitr/" class="nav-link p-0 text-warning">
                  www.facebook.com/OYuva.ubaiitr/
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-2">
              <h5 className="text-warning">IITR Social Media</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-3 offset-1">
              <form>
                <h5 className="text-warning">Contact Us</h5>
                <p className="text-muted">Address : Student Activity Center,Unnat Bharat Abhiyan, IIT Roorkee, Uttarakhand</p>
                <p className="text-muted">Phone : (+91) 7452971049</p>
                <p className="text-muted">Email : uba@iitr.ac.in</p>
                <div class="d-flex w-100 gap-2 text-muted">
                </div>
              </form>
            </div>
          </div>

          <div class="d-flex justify-content-between py-4 my-4 border-top " style={{backgroundColor:'#77777782'}}>
            <p>WEBSITE DEVELOPED BY UBA IITR WITH ❤️ <br />
COPYRIGHT © 2022 SOCIAL WELFARE. ALL RIGHTS RESERVED.</p>
            <ul class="list-unstyled d-flex">
              <li class="ms-3">
                <a class="link-dark" href="#">
                  <svg class="bi" width="24" height="24">
                    <a href="#"></a>
                  </svg>
                </a>
              </li>
              <li class="ms-3">
                <a class="link-dark" href="#">
                  <svg class="bi" width="24" height="24">
                    <a href="#"></a>
                  </svg>
                </a>
              </li>
              <li class="ms-3">
                <a class="link-dark" href="#">
                  <svg class="bi" width="24" height="24">
                    <a href="#"></a>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer



