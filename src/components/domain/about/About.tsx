import { Section } from "@/components/common";
import { about } from "./about.css";
import { aboutData } from "@/contents/about";

const About = () => {
    return (
        <Section title="자기 소개">
            {aboutData.map((item) => (
                <div key={item.id} className={about.container}>
                    <h2 className={about.title}>{item.title}</h2>
                    <div className={about.detail}>
                        {item.paragraphs.map((para, idx) => (
                            <p key={idx} className={about.paragraph}>
                                {para}
                            </p>
                        ))}
                    </div>
                </div>
            ))}
        </Section>
    );
};

export default About;
