import { techstack } from "./techstack.css";
import { Section } from "@/components/common";

const TechStack = () => {
    return (
        <Section title="기술 스택">
            <div className={techstack.container}>
                <p className={techstack.detail}>
                    <b>Javascript</b> 위주로 개발을 하고 있습니다. <b>React</b>,{" "}
                    <b>Next.js</b>를 이용하여 웹 서비스를 개발합니다. 또한
                    프로젝트 내 체계적인 타입 검증을 위해 TypeScript를 학습하고
                    있습니다.
                </p>
            </div>
        </Section>
    );
};

export default TechStack;
