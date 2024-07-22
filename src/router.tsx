import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage, MainPage, ProjectsPage } from "@/pages";
import { Layout } from "@/components/layout";

export const routes = [
    { name: "메인", element: <MainPage />, path: "/" },
    { name: "자기소개", element: <AboutPage />, path: "/about" },
    { name: "프로젝트", element: <ProjectsPage />, path: "/projects" },
];

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    {routes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                        />
                    ))}
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default Router;
