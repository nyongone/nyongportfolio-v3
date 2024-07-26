import { layout } from "./layout.css";
import { Footer, Header, Navigation } from "@/components/layout";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div className={layout.flexbox}>
            <Navigation />
            <div className={layout.container}>
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
