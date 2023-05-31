import "../../scss/app.scss";
import React from "react";

import { Sx } from "./sxStyles";

import {
    FavoriteIcon,
    ApplicationLogo,
    FloatButtons,
    TabMenu,
    RegistrationPanel,
    // ListingTab,
} from "@/Barrels/App";

export const App: React.FC = () => {
    return (
        <React.Fragment>
            <section className="page-container">
                <div className="wrapper">
                    <ApplicationLogo className="logo" />
                    <main className="content">
                        <div className="wrapper">
                            <TabMenu />
                            <RegistrationPanel />
                            {/*<ListingTab />*/}
                        </div>
                    </main>
                    <footer className="footer">
                        <div className="copyright">
                            <a
                                className="link"
                                href="https://github.com/r3c4-d3v"
                            >
                                <FavoriteIcon className="icon" />
                                <span className="description">
                                    Made with love
                                </span>
                            </a>
                        </div>
                    </footer>
                </div>
                {/*<FloatButtons />*/}
            </section>
        </React.Fragment>
    );
};
