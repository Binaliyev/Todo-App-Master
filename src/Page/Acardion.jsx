import { Link, NavLink, Outlet } from "react-router-dom"
import  Upcoming  from "../Asets/Icons/acardion-icons/Acardion-icon-upcoming.svg"
import  Yesterday  from "../Asets/Icons/acardion-icons/Acordion-icon-yesterday.svg"
import  Today  from "../Asets/Icons/acardion-icons/Acordion-icon-today.svg"

export const Acardion = () => {
    return(
        <div className="acardion-box border">
            <div className="link-box-acardion">
            <NavLink to={"/today"} className={ (value) => value.isActive ? "activeText" : "noActiveTex"}><img src={Today} alt=""/>Today </NavLink>
            <NavLink to={"/yesterday"} className={(value) => value.isActive ? "activeText" : "noActiveTex"}><img src={Yesterday} alt="" />Yesterday</NavLink>
            <NavLink to={"/upcoming"} className={(value) => value.isActive ? "activeText" : "noActiveTex"}><img src={Upcoming} alt="" />Upcoming</NavLink>
            </div>
        </div>
    )
}