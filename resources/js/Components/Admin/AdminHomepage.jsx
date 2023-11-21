import React from "react";

export default function AdminHomepage() {
    const { user } = useContext(UserContext);
    return (
        <>
            <Header />
            <div className="main-content__content">
                <div className="main-content__heading-img">
                    <h1>Welcome, {user ? user.username : "Guest"}!</h1>
                    <img
                        className="main-content__img"
                        src={pic3}
                        alt="MOST ProTibet"
                    />
                </div>

                <div className="main-content__both-links">
                    <div className="main-content-box beneficiaries">
                        <div className="main-content-box__left">
                            <img src={pic2} alt="My support" />
                        </div>
                        <div className="main-content-box__right">
                            <img className="img-cross" src={cross} alt="" />
                            <h3>RECEIVERS</h3>
                            <button>
                                <Link to="/list">MORE</Link>
                            </button>
                        </div>
                    </div>
                    <div className="main-content-box news">
                        <div className="main-content-box__left">
                            <img src={pic1} alt="My support" />
                        </div>
                        <div className="main-content-box__right">
                            <img className="img-cross" src={cross} alt="" />
                            <h3>NEWS</h3>
                            <button>
                                <Link to="/news">MORE</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
