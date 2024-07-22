import ReactDOM from "react-dom/client";
import "@/styles/reset.css";
import "@/styles/global.css";
import Router from "./router.tsx";

ReactDOM.createRoot(document.getElementById("main")!).render(<Router />);
