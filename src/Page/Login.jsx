import { Button } from "@mui/material"
import Logo from "../Asets/Img/logo.svg"
import google from "../Asets/Icons/flat-color-icons_google.svg"
import gitHupIcon from "../Asets/Icons/mdi_github.svg"
import { Link } from "react-router-dom"
export const LoginPage = () => {
    return(
        <main>
            <section className="hero">
                <div className="container">
                    <div className="hero-inner">
                        <div className="Login-box mx-auto">
                            <img src={Logo} alt="site-Logo" />
                            <h1 className="signin-text">Signin</h1>
                            <div className="Login-button-box text-center">
                            <Button className="d-block mx-auto text-dark border"variant="outlined">
                            <img src={google} alt="google-logo" /> Continue using Google</Button>
                            <Button className="text-dark d-block mx-auto border"
                             variant="outlined">  <img src={gitHupIcon} alt="gitHup-logo" /> Continue using Github</Button>
                            </div>
                            <div className="login-footer text-center mx-auto my-5 border-top">
                                <Link to={"/Signup"} className="login-footer-text">Not have account ? <span style={{color:"#FF4F5A"}}>Signup</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}