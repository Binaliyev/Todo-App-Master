import { Link, Outlet } from "react-router-dom"
import LoginImg from "../Asets/Img/Loginet-logo.svg"
import { Avatar } from "@mui/material"
// import AvatarImg from "../Asets/Img/Ellipse 1.svg"
import profileIcons from "../Asets/Icons/Settings-Icons/healthicons_ui-user-profile.svg"
import settingsIcons from "../Asets/Icons/Settings-Icons/akar-icons_settings-horizontal.svg"
import loguteIcons from "../Asets/Icons/Settings-Icons/entypo_log-out.svg"
import { useState } from "react"
// import { Acardion } from "../Page/Acardion"
export const LoginetHeader = () => {
  const [menuVizebile, setMenuVizebile] = useState(false)
  const SettingsFuction = () => {
    setMenuVizebile(!menuVizebile)
  }
  let userName = window.localStorage.getItem("userName")
  let userPhoto = window.localStorage.getItem("userPhoto")
    return(
     <>
      <header className="LoginHeader">
        <div className="container">
            <div className="header-inner">
              <div className="logined-header-box">
                <img src={LoginImg} alt="" />
                <div className="avatar-box">
                  <Link onClick={SettingsFuction} className="avatar-Link">
                    <h3 className="avatar-text">{userName? userName : "Jamse"}</h3>
                     <Avatar alt={userName? userName : "Jamse"} src={userPhoto? userPhoto : ""}/>
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </header>
      {menuVizebile && (<div className="settings-box">
              <Link className="Link-settings"> <img src={profileIcons} alt="profile-icons" /> Profile</Link>
              <Link className="Link-settings"> <img src={settingsIcons} alt="" /> Setting</Link>
              <div className="border-box border-top my-3">
                 <Link onClick={() => {
                  window.localStorage.removeItem("tokenUser")
                  // window.localStorage.removeItem("userName")
                  // window.localStorage.removeItem("userPhoto")
                  window.location.reload()}}  
                  className="Link-settings logute">
                  <img src={loguteIcons} alt="" /> logout
                  </Link>
              </div>
            </div>) }
          <Outlet/>
     </>
    )
}