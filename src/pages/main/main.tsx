import { Education, TechStack, Military } from "@/components/domain/main";
import { main } from "./main.css";

const MainPage = () => {
    return (
        <>
            <div className={main.container}>
                <Education />
                <TechStack />
                <Military />
            </div>
        </>
    );
};

export default MainPage;
