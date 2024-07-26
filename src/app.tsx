import { Layout } from "@/components/layout";
import { pageAtom } from "@/recoil/page.atom";
import { useRecoilValue } from "recoil";
import { MainPage, AboutPage, ProjectsPage } from "@/pages";
import withFramerMotion from "@/hocs/withFramerMotion";

const App = () => {
    const currentPage = useRecoilValue(pageAtom);
    return (
        <Layout>
            {currentPage === 1 && withFramerMotion(<MainPage />)}
            {currentPage === 2 && withFramerMotion(<AboutPage />)}
            {currentPage === 3 && withFramerMotion(<ProjectsPage />)}
        </Layout>
    );
};

export default App;
