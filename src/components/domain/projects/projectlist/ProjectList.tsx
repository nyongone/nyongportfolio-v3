import { motion } from "framer-motion";
import { projectList } from "./projectList.css";

interface Props {
    data: {
        id: number;
        title: string;
        term: string;
        part: string;
        imgSrc: string;
        link: string;
    }[];
}

const ProjectList = ({ data }: Props) => {
    return (
        <div className={projectList.container}>
            {data.map((item) => (
                <motion.div
                    key={item.id}
                    className={projectList.card}
                    onClick={() => (window.location.href = item.link)}
                    whileHover={{
                        scale: 1.1,
                    }}
                >
                    <img className={projectList.image} src={item.imgSrc} />
                    <h3 className={projectList.title}>{item.title}</h3>
                    <span className={projectList.term}>{item.term}</span>
                </motion.div>
            ))}
        </div>
    );
};

export default ProjectList;
