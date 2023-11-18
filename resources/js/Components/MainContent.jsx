import pic1 from "../../../public/media/india-0558-2.jpg";
import pic2 from "../../../public/media/india-0513.jpg";
import pic3 from "../../../public/media/india-0464.jpg";

import React, { useContext } from "react";
import "../../css/MainContent.scss";
import Header from "./Header";
import UserContext from "./UserContext";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import cross from "../../../public/graphic/symbol-big.png";

export default function MainContent() {
    const { user } = useContext(UserContext);
    return (
        <>
            <Header />
            <div className="main-content__content">
                <div className="main-content__heading-img">
                    <div className="main-content__text">
                        <h1>Welcome, {user ? user.username : "Guest"}!</h1>
                        <p>
                            Together we build an environment for mutual sharing of
                            human values. We support the basic needs of Tibetan
                            individuals and communities in exile in the Indian
                            Himalayas. We help to maintain the national identity and
                            cultural wealth of Tibet.
                            <p>
                                Donating improves the lives of Tibetans. It creates
                                future opportunities for children and contributes to
                                dignified living conditions for Tibetan seniors and
                                families in poverty. cultural wealth of Tibet.
                            </p>
                        </p>
                        <p>
                            <strong>Thank you for being here!</strong>
                        </p>
                    </div>
                    <img className="main-content__img" src={pic3} alt="MOST ProTibet" />
                </div>

                <div className="main-content__both-links">
                    <div className="main-content-box beneficiaries">
                        <div className="main-content-box__left">
                            <img src={pic2} alt="My support" />
                        </div>
                        <div className="main-content-box__right">
                            <img className="img-cross" src={cross} alt="" />
                            <h3>
                                PEOPLE I SUPPORT
                            </h3>
                            <button>MORE<Link to="/list"></Link></button>
                        </div>
                    </div>
                    <div className="main-content-box news">
                    <div className="main-content-box__left">
                            <img src={pic1} alt="My support" />
                        </div>
                        <div className="main-content-box__right">
                            <img className="img-cross" src={cross} alt="" />
                            <h3>
                                NEWS
                            </h3>
                            <button>MORE<Link to="/news"></Link></button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
