import { Section } from "../../../common";
import { education } from "./education.css";

const Education = () => {
    return (
        <Section title="학력">
            <div className={education.container}>
                <p className={education.current}>
                    순천대학교 컴퓨터공학과 학사
                </p>
                <p className={education.term}>
                    2021.03 ~ 현재, 4학년 2학기 휴학 예정
                </p>
                <p className={education.detail}>
                    4년동안 컴퓨터공학과를 다니며 컴퓨터구조 및 자료구조,
                    데이터베이스응용, 웹 프로그래밍, 모바일 프로그래밍 등의
                    과목을 이수하였습니다.
                </p>
            </div>
        </Section>
    );
};

export default Education;
