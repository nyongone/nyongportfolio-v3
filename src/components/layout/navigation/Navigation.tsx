import { routes } from "@/router";
import { navigation } from "./navigation.css";
import { useLocation } from "react-router-dom";

const Navigation = () => {
    const loc = useLocation();

    return (
        <nav className={navigation.container}>
            {routes.map((route) => (
                <a
                    className={`${navigation.item}${
                        loc.pathname === route.path ? ` active` : ``
                    }`}
                    key={route.path}
                    href={route.path}
                >
                    {route.name}
                </a>
            ))}
        </nav>
    );
};

export default Navigation;
