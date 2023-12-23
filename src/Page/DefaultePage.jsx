import { Form, Link } from "react-router-dom"
import Img from "../Asets/Img/4005526 1 (1).png"
import Icon1 from "../Asets/Icons/fluent_tasks-app-28-filled.svg"
import Icon2 from "../Asets/Icons/clarity_note-edit-solid.svg"
import Icon3 from "../Asets/Icons/ic_round-work-history.svg"
import Icon4 from "../Asets/Icons/ic_round-event-repeat.svg"
import endImg from "../Asets/Img/image 1.png"
import endLogo from "../Asets/Icons/icon.svg"
import { Header } from "../Layout/Header"

export const DefaultePage = () => {
    return(
        <>
        <Header/>
        <main>
            <section className="hero" style={{marginTop:"10rem"}}>
                <div className="container">
                    <div className="hero-inner text-center">
                        <div className="text-box text-center">
                            <h1 className="text">Organizing your day activity with Todo Daily</h1>
                            <div className="get-start-box mx-auto">
                               <Link to={"/getStart"} className="get-start-link text-light my-5">Get started</Link>
                            </div>
                        </div>
                        <div className="img-box">
                           <img src={Img} alt="site-Img" />
                        </div>
                        <div className="site-icons-box mx-auto">
                            <h1>Don't let your day doing nothing</h1>
                            <div className="icons-box">
                                <div>
                                     <img src={Icon1} alt="site-Icons" />
                                     <h3>Small task</h3>
                                </div>
                                <div>
                                     <img src={Icon2} alt="site-Icons" />
                                     <h3>Write it</h3>
                                </div>
                                <div>
                                     <img src={Icon3} alt="site-Icons" />
                                     <h3>Do it</h3>
                                </div>
                                <div>
                                     <img src={Icon4} alt="site-Icons" />
                                     <h3>Repeat</h3>
                                </div>
                            </div>
                        </div>
                        <div className="achieve-box mx-auto">
                            <img src={endImg} width={"583px"} height={"370px"} alt="end-Img" />
                            <div className="end-text">
                                <h2 className="my-5 text-start mx-5">Achieve your target and won your life</h2>
                                <div className="get-end-box mx-5">
                                   <Link to={"/getStart"} className="get-start-link text-light my-5 ">Get started</Link>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer>
            <div className="container">
                <div className="footer-inner mx-auto my-5">
                    <div className="inner-box">
                        <div className="footer-text-box">
                            <div className="footer-logo">
                                <img src={endLogo} alt="footer-Logo" />
                                <h5>Lets change your habit join with million people</h5>
                            </div>
                            <div className="footer-text">
                                 <h4>DK Tech Company</h4>
                                 <p>Uma Street, Lost City, Aincard</p>
                            </div>
                        </div>
                        <div className="Lorem-box">
                            <div className="features-pricing-box">
                                <h1 className="features-pricing-text">Features</h1>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                            <div className="features-pricing-box">
                                <h1 className="features-pricing-text">Pricing</h1>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}