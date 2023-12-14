import { Link, NavLink } from "react-router-dom"
import Logo from "../Asets/Img/logo.svg"
export const Header = () => {
    return(
        <header style={{}}>
            <div className="container">
                <div className="header-inner my-4 d-flex align-items-center justify-content-between">
                    <Link className="Logo"><img src={Logo} alt="todo-Logo" /></Link>
                    <ul className="header-ul d-flex align-items-center justify-content-around">
                        <li className="header-list">
                            <NavLink to={"/login"} className={(event) =>  event.isActive ? "text-decoration-underline d-none" : "text-decoration-none text-danger"}>Login</NavLink>
                        </li>
                        <li className="header-list">
                            <NavLink to={"/signup"} className={(event) =>  event.isActive?  "text-decoration-underline d-none" : "text-decoration-none text-dark"}>Signup</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}