import React, { StrictMode } from "react";

import {
    App,
    Root,
    store,
    axios,
    Provider,
    createRoot,
    RootElementProps,
} from "@/Barrels/Bootstrap";

window.axios = axios;

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

const rootElement: RootElementProps = document.getElementById("root");

if (rootElement) {
    const root: Root = createRoot(rootElement);

    root.render(
        <StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </StrictMode>
    );
}
