import React from "react";
import logo from "./images/favicon/android-chrome-192x192.png";
import icon from "./images/icons/angle-down-solid.svg";
import "./css/minimal.css";

export default function Minimal() {
  return (
    <>
      <div id="home">
        <header>
          <div className="head">
            <h1>
              <img src={logo} alt="Logo" />
            </h1>
            <h6>v2.6.0</h6>
          </div>
          <ul>
            <li>home</li>
            <li>components</li>
            <li>
              pages &nbsp;
              <span>
                {" "}
                <img src={icon} alt="Icon" />
              </span>
            </li>
            <li>documentation</li>
            <li>purchase now</li>
          </ul>
        </header>
        <div className="spotlight">
          <div className="left">
            <h2>
              Start a <br /> new project
              <br /> with <span>minimal</span>
            </h2>
            <p>
              The starting point for your next project based on
              easy-to-customize Material-UI helps you bulid apps fasterand
              better.
            </p>

            <div className="images">
              <nav className="diamond">
                <img
                  src={require("./images/home/ic_sketch_small.svg").default}
                  alt=""
                ></img>
              </nav>
              <small>Preview in Sketch Cloud</small>
            </div>
            <div className="button">
              <nav className="charge">
                <img
                  src={require("./images/icons/bolt-solid.svg").default}
                  alt=""
                />
              </nav>
              <small>live preview</small>
            </div>
            <ul className="icon">
              <li>
                <img
                  src={require("./images/home/ic_sketch.svg").default}
                  alt=""
                />
              </li>
              <li>
                <img
                  src={require("./images/home/ic_figma.svg").default}
                  alt=""
                />
              </li>
              <li>
                <img
                  src={require("./images/home/ic_material.svg").default}
                  alt=""
                />
              </li>
              <li>
                <img
                  src={require("./images/home/ic_react.svg").default}
                  alt=""
                />
              </li>
              <li>
                <img src={require("./images/home/ic_js.svg").default} alt="" />
              </li>
              <li>
                <img src={require("./images/home/ic_ts.svg").default} alt="" />
              </li>
            </ul>
          </div>

          <div className="right">
            <nav className="hero">
              <img src={require("./images/home/hero.png")} alt="" />
            </nav>
          </div>
        </div>
      </div>
      <div id="help">
        <div className="minimal">
          <h6>minimal</h6>
          <h1>what minimal helps you ?</h1>
        </div>
        <ul className="design">
          <li>
            <nav className="ui-ux">
              <img
                src={require("./images/icons/ic_design.svg").default}
                alt="UI-UX Design"
              />
            </nav>
            <h3>UI & UX Design</h3>
            <p>
              The set is built on the principles of the atomic design system.It
              helps you to create projects fastest and easily customized
              packages for your projects.{" "}
            </p>
          </li>
          <li>
            <nav className="develop">
              <img
                src={require("./images/icons/ic_code.svg").default}
                alt="Development"
              />
            </nav>
            <h3>development</h3>
            <p>
              Easy to customize and extend each component,saving you time and
              money.
            </p>
          </li>
          <li>
            <nav className="brand">
              <img
                src={require("./images/brand/logo_single.svg").default}
                alt="Brand"
              />
            </nav>
            <h3>branding</h3>
            <p>
              Consistent design in color, font ...makes brand recognition easy
            </p>
          </li>
        </ul>
      </div>
      <div id="interface">
        <div className="pack">
          <h5>interface starter kit</h5>
          <h1>
            Huge pack <br />
            of elements
          </h1>
          <p>
            We collected most popular elements. Menu, sliders, buttons, inputs
            etc. are all here. Just dive in!{" "}
          </p>
          <button>view all components</button>
        </div>
        <ul className="message">
          <li>
            <img
              src={require("./images/home/screen_light_1.png")}
              alt="Screen_light_1"
            />
          </li>
          <li>
            <img
              src={require("./images/home/screen_light_2.png")}
              alt="Screen_light_2"
            />
          </li>
          <li>
            <img
              src={require("./images/home/screen_light_3.png")}
              alt="Screen_light_3"
            />
          </li>
        </ul>
      </div>
      <div id="darkmode">
        <ul className="lightmode">
          <li>
            <img src={require("./images/home/lightmode.png")} alt="Lightmode" />
          </li>
          <li>
            <img src={require("./images/home/darkmode.png")} alt="Darkmode" />
          </li>
        </ul>
        <div className="theme">
          <nav className="shapes">
            <img src={require("./images/home/shape.svg").default} alt="Shape" />
          </nav>
          <nav className="shape">
            <small>easy switch between styles.</small>
            <h3>Dark mode</h3>
            <p>A dark theme that feels easier on the eyes.</p>
          </nav>
        </div>
      </div>
      <div id="theme-color">
        <small> choose your style </small>
        <h3>Theme color</h3>
        <p>Express your own style with just one click.</p>
        <div className="color">
          <ul className="theme-image">
            <li>
              <img
                src={require("./images/home/theme-color/grid.png")}
                alt="Grid-img"
              />
            </li>
            <li>
              <img
                src={require("./images/home/theme-color/block1-default.png")}
                alt="Block1-img"
              />
            </li>
            <li>
              <img
                src={require("./images/home/theme-color/screen-default.png")}
                alt="Screen-img"
              />
            </li>
            <li>
              <img
                src={require("./images/home/theme-color/sidebar-default.png")}
                alt="sidebar-img"
              />
            </li>
            <li>
              <img
                src={require("./images/home/theme-color/block2-default.png")}
                alt="block2-img"
              />
            </li>
          </ul>

          <div className="color-change">
            <ul className="color-select">
              <li>
                <nav></nav>
              </li>
              <li>
                <nav></nav>
              </li>
              <li>
                <nav></nav>
              </li>
              <li>
                <nav></nav>
              </li>
              <li>
                <nav></nav>
              </li>
              <li>
                <nav></nav>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="clean-section">
        <div className="clean-title">
          <h5>clean & clear</h5>
          <h2>
            Beautiful, modern and <br /> clean user interfaces
          </h2>
        </div>
        <ul className="clean-image">
          <li>
            <img
              src={require("./images/home/clean-1.png")}
              alt="Clean-image1"
            />
          </li>
          <li>
            <img
              src={require("./images/home/clean-2.png")}
              alt="Clean-image2"
            />
          </li>
          <li>
            <img
              src={require("./images/home/clean-3.png")}
              alt="Clean-image3"
            />
          </li>
          <li>
            <img
              src={require("./images/home/clean-4.png")}
              alt="Clean-image4"
            />
          </li>
          <li>
            <img
              src={require("./images/home/clean-5.png")}
              alt="Clean-image5"
            />
          </li>
          <li>
            <img
              src={require("./images/home/clean-6.png")}
              alt="Clean-image6"
            />
          </li>
          <li>
            <img
              src={require("./images/home/clean-7.png")}
              alt="Clean-image7"
            />
          </li>
          <li>
            <img
              src={require("./images/home/clean-8.png")}
              alt="Clean-image8"
            />
          </li>
          <li>
            <img
              src={require("./images/home/clean-9.png")}
              alt="Clean-image9"
            />
          </li>
          <li>
            <img
              src={require("./images/home/clean-10.png")}
              alt="Clean-image10"
            />
          </li>
        </ul>
      </div>
      <div id="price">
        <div className="price-title">
          <h6>pricing plans</h6>
          <h2>The right plan for your business</h2>
          <p>Choose the perfect plan for your needs. Always flexible to grow</p>
        </div>
        <ul className="price-list">
          <li className="list1">
            <h5>license</h5>
            <h4>standard</h4>
            <nav>
              <img
                src={require("./images/home/ic_js.svg").default}
                alt="Js-image"
              />
            </nav>
            <ul className="standard1">
              <li>
                <span>
                  <img
                    src={require("./images/icons/green-tick.png")}
                    alt="Green-tick"
                  />
                </span>
                <p>One end products</p>
              </li>
              <li>
                <span>
                  <img
                    src={require("./images/icons/green-tick.png")}
                    alt="Green-tick"
                  />
                </span>
                <p>12 months updates</p>
              </li>
              <li>
                <span>
                  <img
                    src={require("./images/icons/green-tick.png")}
                    alt="Green-tick"
                  />
                </span>
                <p>6 months of support</p>
              </li>
              <li>
                <span>
                  <img
                    src={require("./images/icons/green-tick.png")}
                    alt="Green-tick"
                  />
                </span>
                <p>JavaScript version</p>
              </li>
              <li>
                <span>
                  <img
                    src={require("./images/icons/gray-tick.png")}
                    alt="Gray-tick"
                  />
                </span>
                <p>TypeScript version </p>
              </li>
              <li>
                <span>
                  <img
                    src={require("./images/icons/gray-tick.png")}
                    alt="Gray-tick"
                  />
                </span>
                <p>Design Resources</p>
              </li>
              <li>
                <span>
                  <img
                    src={require("./images/icons/gray-tick.png")}
                    alt="Gray-tick"
                  />
                </span>
                <p>Commercial application </p>
              </li>
            </ul>
            <small>Learn more {">"} </small>
            <button className="plan1">choose plan</button>
          </li>
          <li className="list2">
            <h5>license</h5>
            <h4>standard plus</h4>
            <ul className="plus">
              <li>
                <img
                  src={require("./images/home/ic_sketch.svg").default}
                  alt="Sketch image"
                />
              </li>
              <li>
                <img
                  src={require("./images/home/ic_figma.svg").default}
                  alt="Figma image"
                />
              </li>
              <li>
                <img
                  src={require("./images/home/ic_js.svg").default}
                  alt="Js image"
                />
              </li>
              <li>
                <img
                  src={require("./images/home/ic_ts.svg").default}
                  alt="Ts image"
                />
              </li>
            </ul>
            <ul className="standard2">
              <li>
                <span>
                  <img
                    src={require("./images/icons/green-tick.png")}
                    alt="Green-tick"
                  />
                </span>
                <p>One end products</p>
              </li>
              <li>
                <span>
                  <img
                    src={require("./images/icons/green-tick.png")}
                    alt="Green-tick"
                  />
                </span>
                <p>12 months updates</p>
              </li>
              <li>
                <span>
                  <img
                    src={require("./images/icons/green-tick.png")}
                    alt="Green-tick"
                  />
                </span>
                <p>6 months of support</p>
              </li>
              <li>
                <span>
                  <img
                    src={require("./images/icons/green-tick.png")}
                    alt="Green-tick"
                  />
                </span>
                <p>JavaScript version</p>
              </li>
              <li>
                <span>
                  <img
                    src={require("./images/icons/green-tick.png")}
                    alt="Green-tick"
                  />
                </span>
                <p>TypeScript version</p>
              </li>
              <li>
                <span>
                  <img
                    src={require("./images/icons/green-tick.png")}
                    alt="Green-tick"
                  />
                </span>
                <p>Design Resources</p>
              </li>
              <li>
                <span>
                  <img
                    src={require("./images/icons/gray-tick.png")}
                    alt="Gray-tick"
                  />
                </span>
                <p>Commercial application</p>
              </li>
            </ul>
            <small>Learn more {">"}</small>
            <button className="plan2">choose plan</button>
          </li>
          <li className="list3">
            <h5>license</h5>
            <h4>extended</h4>
            <ul className="extend">
              <li>
                <img
                  src={require("./images/home/ic_sketch.svg").default}
                  alt="Sketch image"
                />
              </li>
              <li>
                <img
                  src={require("./images/home/ic_figma.svg").default}
                  alt="Figma image"
                />
              </li>
              <li>
                <img
                  src={require("./images/home/ic_js.svg").default}
                  alt="Js image"
                />
              </li>
              <li>
                <img
                  src={require("./images/home/ic_ts.svg").default}
                  alt="Ts image"
                />
              </li>
            </ul>
            <ul className="standard3">
              <li>
                <span>
                  <img
                    src={require("./images/icons/green-tick.png")}
                    alt="Green image"
                  />
                </span>
                <p>One end products</p>
              </li>
              <li>
                <span>
                  <img
                    src={require("./images/icons/green-tick.png")}
                    alt="Green image"
                  />
                </span>
                <p>12 months updates</p>
              </li>
              <li>
                <span>
                  <img
                    src={require("./images/icons/green-tick.png")}
                    alt="Green image"
                  />
                </span>
                <p>6 months of support</p>
              </li>
              <li>
                <span>
                  <img
                    src={require("./images/icons/green-tick.png")}
                    alt="Green image"
                  />
                </span>
                <p>JavaScript version</p>
              </li>
              <li>
                <span>
                  <img
                    src={require("./images/icons/green-tick.png")}
                    alt="Green image"
                  />
                </span>
                <p>TypeScript version</p>
              </li>
              <li>
                <span>
                  <img
                    src={require("./images/icons/green-tick.png")}
                    alt="Green image"
                  />
                </span>
                <p>Design Resources</p>
              </li>
              <li>
                <span>
                  <img
                    src={require("./images/icons/green-tick.png")}
                    alt="Green image"
                  />
                </span>
                <p>Commercial application</p>
              </li>
            </ul>
            <small>Learn more {">"}</small>
            <button className="plan3">choose plan</button>
          </li>
        </ul>
      </div>
      <div id="contact">
        <div className="contact-us">
          <h2>Still have questions ?</h2>
          <p>Please describe your case to receive that most accurate advice.</p>
          <nav className="contacts">
          <span >contact us</span>
          </nav>
        </div>
        <div className="purchase">
          <nav className="rocket-img">
            <img src={require("./images/home/rocket.png")} alt="Rocket image" />
          </nav>
          <div className="kit">
            <h2>
              Get started with <br /> minimal kit today
            </h2>
            <button className="purchase-now">purchase now</button>
          </div>
        </div>
      </div>
      <div id="footer">
        <nav className="footer-img">
          <img
            src={require("./images/favicon/favicon.png")}
            alt="Minimal-logo"
          />
        </nav>
        <div className="copyright">
          <nav className="copy">
            <img
              src={require("./images/icons/copyright.png")}
              alt="Copyrights-logo"
            />
          </nav>
          <h6>All rights reserved
          <br /> <small>made by <span>minimals.cc </span></small>
          </h6>
        </div>
      </div>
    </>
  );
}
