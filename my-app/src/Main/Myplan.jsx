import React from "react";
import Button from "react-bootstrap/Button";
import "antd/dist/antd";
import { Menu } from "antd";
import { BiSolidDashboard } from "react-icons/bi";
import { GiSeedling } from "react-icons/gi";
import { FaPuzzlePiece } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { TiCloudStorageOutline } from "react-icons/ti";
import { AiOutlineMail } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";
import { BsCheck2All } from "react-icons/bs";
import { LuUserCog2 } from "react-icons/lu";
import { LuMessagesSquare } from "react-icons/lu";
import { IoMdNotifications } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import "./Style.css";

function Myplan() {
  const arr = [
    {
      name: "Basic",
      offer: 89.99,
      price: 9.99,
      users: 25,
      storage: 25,
      support: "Email Support",
    },
    {
      name: "Standard",
      offer: 189.99,
      price: 99.99,
      users: 50,
      storage: 60,
      support: "Email+Chat Support",
    },
    {
      name: "Premium",
      offer: 389.99,
      price: 199.99,
      users: 75,
      storage: 100,
      support: "Email+chat+Whatsapp Support",
    },
  ];
  return (
    <div className="main-container">
      
    <div>
      <img
        src="https://media.licdn.com/dms/image/D560BAQFPvoYeqPTghg/company-logo_200_200/0/1683376258927?e=1702512000&v=beta&t=-iF5t1P1PJYeawUZKdzsgTRAsf_Huzbomrpf3EOpxrI"
        alt="Company Logo"
        className="logo"
      />
    </div>
    <div className="header"></div>

    <div className="myplan-container">
      <div className="menu-container">
        <Menu
          defaultOpenKeys={["1"]}
          defaultSelectedKeys={["1"]}
          className="menu"
          mode="inline"
        >
          <div className="user-profile">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt="User Avatar"
              className="avatar"
            />
            <div className="user-details">
              <h3>
                Ram Mohan
                <BiChevronRight />
              </h3>
              <p>rammohan@gmail.com</p>
            </div>
          </div>

          <Menu.Item key="1">
            <BiSolidDashboard /> Dashboard
          </Menu.Item>

          <Menu.Item key="3">
            <GiSeedling /> Perks
          </Menu.Item>
          <Menu.Item key="4">
            <FaPuzzlePiece /> Addons
          </Menu.Item>

          <Menu.Item key="5">
            {" "}
            <LuMessagesSquare /> FAQ
          </Menu.Item>

          <Menu.Item key="6">
            {" "}
            <LuUserCog2 /> Support
          </Menu.Item>
          <Menu.Item key="7" style={{ marginTop: 190 ,color:"blue"}}>
            <RiLogoutCircleRLine />
            Logout
          </Menu.Item>
        </Menu>
      </div>

      <div className="content-container">
        <div className="head">
          <h1 className="choosepln" >
            Choose a plan that's just right for you !
          </h1>

          <div className="btn-group" role="group" aria-label="Basic example">
            <div>
              <Button type="button" className="mnth">
                Monthly
              </Button>{" "}
            </div>

            <div>
              <Button type="button" className="mnth">
                Annually{" "}
                <sup style={{ color: "green" }}>
                  {" "}
                  <b>-10%</b>
                </sup>
              </Button>
            </div>
          </div>
        </div>
        <div className="subscription-plans">
          {arr.map((item) => (
            <div className="subscription-plan" key={item.name}>
              <h2>{item.name}</h2>
              <strike style={{ color: "red" }}>
                <p style={{ color: "black" }}>${item.offer}/mo</p>
              </strike>
              <h3 style={{ fontSize: "24px" }}>${item.price}/mo</h3>

              <Button
                className={
                  item.name === "Basic"
                    ? "basic-button"
                    : item.name === "Standard"
                    ? "standard-button"
                    : "premium-button"
                }
              >
                Get Started
                <HiArrowNarrowRight />
              </Button>

              <hr />

              <p>What you'll get:</p>

              <p>
                {" "}
                <AiOutlineUser /> Upto{item.users} Users
              </p>
              <p>
                {" "}
                <TiCloudStorageOutline />
                Upto{item.storage}gb Storage
              </p>
              <p>
                <AiOutlineMail /> {item.support}
              </p>
              <u>
                <h6 style={{ fontSize: "12PX", textAlign: "center" }}>
                  EXPLORE FEATURES{" "}
                  <BiRightArrow
                    className={
                      item.name === "Basic"
                        ? "basic"
                        : item.name === "Standard"
                        ? "standard"
                        : "premium"
                    }
                  />
                </h6>
              </u>
            </div>
          ))}
        </div>
        <div className="subscription-plans2">
          <div className="subscription-plan2">
            <div
              style={{
                display: "flex",
                textAlign: "left",
                marginLeft: "20px",
              }}
            >
              <div>
                <p>
                  {" "}
                  <Button className="forever" size="sm">
                    Free Forever
                  </Button>
                </p>
                <h2 style={{ fontSize: "20px" }}>Free Starter</h2>
                <p>
                  The quickest and easiest way to try protocols with basic
                  functionalities
                </p>

                <Button className="free">
                  Get Started <HiArrowNarrowRight />
                </Button>
                <br />
              </div>
              <div>
                <p>What you'll get:</p>

                <p>
                  <AiOutlineUser /> Upto 8 Users
                </p>
                <p>
                  <TiCloudStorageOutline />
                  Upto 3gb Storage
                </p>
                <p>
                  {" "}
                  <AiOutlineMail /> Email Support
                </p>
                <p>
                  <BsCheck2All />
                  Basics of Documents, task flow, voting, accounting, banking,
                  notes, investor, director and team management included
                </p>
              </div>
            </div>
          </div>
          <div className="subscription-plan2">
            <div
              style={{
                display: "flex",
                textAlign: "left",
                marginLeft: "20px",
              }}
            >
              <div>
                <p>
                  {" "}
                  <Button className="lets" size="sm">
                    Let's Connect
                  </Button>
                </p>
                <h6 style={{ fontSize: "20px" }}>Enterprise Plan</h6>
                <p>
                  Effortlessly customize and fine-tune services as your needs
                  shift, ensuring the perfect tools for success
                </p>

                <Button className="connect">
                  Contact Us <HiArrowNarrowRight />
                </Button>
              </div>
              <div className="enterprice-plan">
                <p>What you'll get:</p>

                <p>
                  <AiOutlineUser /> More than 75 Users
                </p>

                <p>
                  {" "}
                  <BsCheck2All />
                  Customization of all other features
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <Button
          style={{
            backgroundColor: "white",
            color: "blue",
            border: "none",
            marginLeft: "10px",
          }}
        >
          <IoMdNotifications />
          <sup style={{ color: "red" }}>
            <b>3</b>{" "}
          </sup>
        </Button>
      </div>
    </div>
  </div>
  );
}

export default Myplan;
