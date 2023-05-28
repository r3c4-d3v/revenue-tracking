import "../../scss/home.scss";
import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo/ApplicationLogo";

const App: React.FC = () => (
    <React.Fragment>
        <div className="page-container">
            <div className="wrapper">
                <ApplicationLogo className="logo" />
                <h2 className="title">Revenue Tracking Web Application</h2>

                <main className="content">
                    <section className="wrapper"></section>
                </main>
                <footer className="footer">
                    <div className="copyright">
                        <a className="link" href="https://github.com/r3c4-d3v">
                            <span className="icon">&hearts;</span>
                            <span className="description">Made with love</span>
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    </React.Fragment>
);

export default App;
