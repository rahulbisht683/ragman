import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import HeroImg from "../assets/backgroundimg.png";
import logott from "../assets/logott.png";
import Home from "../assets/Home2.png";
import why from "../assets/why.png";
import phonev from "../assets/phonev.png";
import group2 from "../assets/Group2.png";
import group from "../assets/Group5097.png";
import vector2 from "../assets/Vector2.png";
import vector3 from "../assets/Vector3.png";
import services from "../assets/services.png";
import bin from "../assets/bin.png";
import paper from "../assets/paper.png";
import elect from "../assets/elect.png";
import group5101 from "../assets/Group5101.png";
import group5121 from "../assets/Group5121.png";
import group5122 from "../assets/Group5122.png";
import chasma from "../assets/chasma.png";
import motabhai from "../assets/motabhai.png";

import process from "../assets/process.png";
function HeroSection() {
  const width = window.innerWidth;
  const [visible, setVisible] = useState(true);

  const setdata = () => {
    if (width > 940) {
      setVisible(false);
    }
  };
  useEffect(() => {
    setdata();
    console.log("fdfdv", width);
  }, []);
  return (
    <>
      <div
        className="herosection"
        style={{
          backgroundImage: `url(${HeroImg})`,
        }}
      >
        <text className="smtext1">
          it's easy to sell scrap on RAG
          <text className="smtext1" style={{ color: "green" }}>
            MAN
          </text>
        </text>
        <img className="iitt" src={logott}></img>
        <text className="smtext2">Download the official RAGMAN app</text>
        <div className="numberinput">
          <div className="selldiv">
            <text>Sell Your Scrap</text>
          </div>
          <view className="viewpoint">
            <div
              style={{
                borderColor: "black",
                borderWidth: 5,
                borderRadius: 1,

                width: "15%",
                display: "flex",
                justifyContent: "center",
                alignSelf: "center",
                borderRight: "1px solid rgba(0, 0, 0, 0.3)",
              }}
            >
              <img className="phoneimg" src={phonev}></img>
            </div>
            <div className="phonediv">
              <text>+91</text>
              <input
                type="text"
                required
                placeholder="Enter your Mobile No"
                autoComplete="off"
                title="Full Name is required"
              ></input>
            </div>
          </view>
        </div>
        <text className="comingsoon">Coming Soon</text>
        {/*  <div
          style={{
            marginTop: "5vh",
            display: "flex",
            boxShadow: "rgb(0 0 0 / 35%) 0px 5px 15px",

            height: "16vh",
            width: "70vw",
            justifyContent: "center",
            borderRadius: 8,
          }}
        >
          <div className="setItem">
            <h1
              style={{
                color: "#59A70A",
              }}
            >
              Sell Your Scrap
            </h1>
            <h5 className="Easystep">In just 4 easy steps...</h5>
          </div>
          <div className="inputfeild">
            <div
              style={{
                marginLeft: 5,
              }}
            >
              <i class="fas fa-mobile-alt"></i>
            </div>
            <div
              style={{
                color: "yellow",
                marginLeft: 5,
                height: "5vh",
                alignItems: "center",
                display: "flex",
              }}
            >
              <input
                style={{
                  backgroundColor: "transparent",
                  borderWidth: 0,
                  color: "white",
                  outline: "none",
                }}
                type="text"
                required
                placeholder="Enter your Mobile No"
                autoComplete="off"
                title="Full Name is required"
              ></input>
            </div>
          </div>
          <button className="button">Proceed</button>
          {visible ? null : (
            <>
              <div
                style={{
                  overflow: "visible",
                }}
              >
                <h5
                  style={{
                    textAlign: "center",
                    backgroundColor: "green",
                    position: "absolute",
                    paddingInline: 8,
                    paddingTop: 4.5,
                    paddingBottom: 4.5,
                    left: "40vw",
                    top: "43.7vh",
                    color: "white",
                    borderRadius: 500,
                  }}
                >
                  01
                </h5>
                <h6
                  style={{
                    textAlign: "center",
                    color: "green",
                    position: "absolute",
                    left: "39vw",
                    top: "47.7vh",
                  }}
                >
                  Mobile No
                </h6>
              </div>
              <div>
                <h5
                  style={{
                    textAlign: "center",
                    backgroundColor: "green",
                    position: "absolute",
                    paddingInline: 8,
                    paddingTop: 4.5,
                    paddingBottom: 4.5,
                    left: "47vw",
                    top: "43.7vh",
                    color: "white",
                    borderRadius: 500,
                  }}
                >
                  02
                </h5>
                <h6
                  style={{
                    textAlign: "center",
                    color: "green",
                    position: "absolute",
                    left: "46.7vw",
                    top: "47.7vh",
                  }}
                >
                  Address
                </h6>
              </div>
              <div>
                <h5
                  style={{
                    textAlign: "center",
                    backgroundColor: "green",
                    position: "absolute",
                    paddingInline: 8,
                    paddingTop: 4.5,
                    paddingBottom: 4.5,
                    left: "54vw",
                    top: "43.7vh",
                    color: "white",
                    borderRadius: 500,
                  }}
                >
                  03
                </h5>
                <h6
                  style={{
                    textAlign: "center",
                    color: "green",
                    position: "absolute",
                    left: "53.5vw",
                    top: "47.7vh",
                  }}
                >
                  Schedule
                </h6>
              </div>
              <div>
                <h5
                  style={{
                    textAlign: "center",
                    backgroundColor: "green",
                    position: "absolute",
                    paddingInline: 8,
                    paddingTop: 4.5,
                    paddingBottom: 4.5,
                    left: "61vw",
                    top: "43.7vh",
                    color: "white",
                    borderRadius: 500,
                  }}
                >
                  04
                </h5>
                <h6
                  style={{
                    textAlign: "center",
                    color: "green",
                    position: "absolute",
                    left: "60vw",
                    top: "47.7vh",
                  }}
                >
                  Sell Scrap
                </h6>
              </div>
            </>
          )}
        </div> */}
      </div>

      <div className="bluediv">
        <text className="why">
          Why RAG
          <text className="why" style={{ color: "green" }}>
            MAN
          </text>
        </text>
        <text className="whysell">Sell Scrap On RAGMAN And Get Best Price</text>

        <div className="flow">
          <div className="yytt">
            <div className="yht">
              <img className="pptt" src={group}></img>
            </div>
            <text>Book Through App</text>
          </div>

          <div className="yytt">
            <div className="yht">
              <img className="rreee" src={group2}></img>
            </div>
            <text>Nearby Ragman</text>
          </div>

          <div className="yytt">
            <div className="yht">
              <img className="rreee" src={vector2}></img>
            </div>
            <text>Request For Pickup</text>
          </div>

          <div className="yytt">
            <div className="yht">
              <img className="rreee" src={vector3}></img>
            </div>
            <text>Deal Done</text>
          </div>
        </div>
      </div>

      <div className="howit">
        <text>How it's Works</text>
        <img src={services}></img>
      </div>

      <div className="ourscrap">
        <text>Our Scrap</text>
        <div className="line"></div>
        <div className="scroll">
          <div>
            <img className="bin" src={bin}></img>
            <text>Plastic</text>
          </div>

          <div>
            <img className="paper" src={paper}></img>
            <text>Paper</text>
          </div>

          <div>
            <img className="elect" src={elect}></img>
            <text>Electrical Items</text>
          </div>
        </div>
      </div>

      {/*} <div className="whatpeople">
        <text className="main">What Customers Say about us</text>
        <text className="dsds">
          Lorem ipsum dolor sit amet,. Aenean commodo ligula eget dolor. Aenean
          massa. Cum sociis natoque penatibus et magnis dis.
        </text>
        <div
          style={{
            backgroundColor: "#f5f5f5",
            display: "flex",
            width: "100%",
            whiteSpace: "nowrap",
            overflowX: "scroll",
          }}
        >
          <div
            style={{
              backgroundColor: "brown",
              width: "70%",
              height: "200px",
            }}
          >
            <text
              style={{
                height: "180px",
                width: "100%",
                backgroundColor: "cadetblue",
              }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
              must.
            </text>
            <div>
              <text>user 1</text>
            </div>
          </div>
          <div>
            <text
              style={{
                width: "90%",
              }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
              must.
            </text>
            <div>
              <img></img>
              <text>user 1</text>
            </div>
          </div>
          <div>
            <text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
              must.
            </text>
            <div>
              <img></img>
              <text>user 1</text>
            </div>
          </div>
          <div>
            <text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
              must.
            </text>
            <div>
              <img></img>
              <text>user 1</text>
            </div>
          </div>
        </div>
      </div> */}

      <div style={{ backgroundColor: "white" }} className="downappnow">
        <text className="downtext">Download App</text>
        <div className="line"></div>
        <div className="download">
          <div className="ddeerr">
            <img
              style={{
                width: "70%",
              }}
              src={group5101}
            ></img>
          </div>
          <div className="textdib">
            <div className="gaandu">
              <div className="circle"></div>
              <text>Instant pickup guarantee with live tracking. .</text>
            </div>
            <div className="gaandu">
              <div className="circle"></div>
              <text>
                A efficient way to connect buyer and seller ondemand. .
              </text>
            </div>
            <div className="gaandu">
              <div className="circle"></div>
              <text>
                Customer focused , computer coordinated best end user experience
                possible. .
              </text>
            </div>
            <img src={group5121}></img>
            <img style={{ marginTop: "40px" }} src={group5122}></img>
          </div>
        </div>
      </div>

      <div className="modi">
        <div className="amitsaha">
          <text>We support swachh bharath mission</text>
          <img src={chasma}></img>
        </div>
        <div className="line2">
          <div
            style={{
              width: "33.33%",
              height: "100%",
              backgroundColor: "#E7752C",
            }}
          ></div>
          <div
            style={{
              width: "33.33%",
              height: "100%",
              backgroundColor: "white",
            }}
          ></div>
          <div
            style={{
              width: "33.33%",
              height: "100%",
              backgroundColor: "#1C5B41",
            }}
          ></div>
        </div>

        <div className="speech">
          <div>
            <img src={motabhai}></img>
          </div>
          <div>
            <text>
              I am sure you have heard time and again that cleanliness is next
              to Godliness. Alas, things are often different when it comes to
              putting this into practice. On 2nd October we are launching Swachh
              Bharat Mission, a massive mass movement, that seeks to create a
              Clean India. Cleanliness was very close to Mahatma Gandhi's heart.
              A clean India is the best tribute we can pay to Bapu when we
              celebrate his 150th birth anniversary in 2019. Mahatma Gandhi
              devoted his life so that India attains 'Swarajya'. Now the time
              has come to devote ourselves towards 'Swachchhata' (cleanliness)
              of our motherland. I urge every one of you to devote at least
              hundred hours every year, that is two hours every week towards
              cleanliness. We can't let India remain unclean any longer. On 2nd
              October I myself will set out with a broom and contribute towards
              this pious task. Today, I appeal to everyone, particularly
              political and religious leadership, mayors, sarpanchs and captains
              of industry to plan and wholeheartedly engage in the task of
              cleaning your homes, work places, villages, cities and
              surroundings. I request your active support and participation in
              our collective quest to make a Swachh Bharat.”{" "}
            </text>
          </div>
        </div>
      </div>

      {/*<div
        style={{
          marginBottom: "10vh",
          marginTop: "10vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <img
          style={{
            width: "90vw",
          }}
          src={Home}
        ></img>
        <img
          style={{
            marginTop: "20vh",
            width: "80vw",
          }}
          src={why}
        ></img>
        <img
          style={{
            marginTop: "20vh",
            width: "90vw",
          }}
          src={process}
        ></img>
        <div
          style={{
            display: "flex",
          }}
        ></div>
      </div> */}
    </>
  );
}

export default HeroSection;
