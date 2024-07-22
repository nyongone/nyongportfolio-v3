import { Section } from "@/components/common";
import { military } from "./military.css";

const Military = () => {
    return (
        <Section title="병역 사항">
            <div className={military.container}>
                <p className={military.detail}>
                    4급 사회복무요원 소집대상, <b>산업기능요원</b> 혹은{" "}
                    <b>전문연구요원</b> 편입 희망하고 있습니다.
                </p>
            </div>
        </Section>
    );
};

export default Military;
