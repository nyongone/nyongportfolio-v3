import { layout } from "./layout.css";
import { Footer, Header, Navigation } from "@/components/layout";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div className={layout.flexbox}>
            <Navigation />
            <div className={layout.container}>
                <Header />
                <AnimatePresence>
                    <motion.main
                        key="main"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                    >
                        {children}
                    </motion.main>
                </AnimatePresence>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
