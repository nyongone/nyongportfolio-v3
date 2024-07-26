import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const withFramerMotion = (children: React.ReactNode) => {
    return (
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
    );
};

export default withFramerMotion;
