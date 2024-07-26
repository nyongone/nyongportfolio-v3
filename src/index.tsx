import ReactDOM from "react-dom/client";
import "@/styles/reset.css";
import "@/styles/global.css";
import App from "./app.tsx";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("main")!).render(
    <RecoilRoot>
        <App />
    </RecoilRoot>
);
