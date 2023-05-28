import "./bootstrap";

import {
    App,
    Root,
    StrictMode,
    createRoot,
    RootElementProps,
} from "@/Barrels/Components/App";

const rootElement: RootElementProps = document.getElementById("root");

if (rootElement) {
    const root: Root = createRoot(rootElement);

    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );
}
