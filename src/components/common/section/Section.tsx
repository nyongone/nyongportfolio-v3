import { section } from "./section.css";

interface Props {
    children: React.ReactNode;
    title?: string;
}

const Section = ({ children, title }: Props) => {
    return (
        <section className={section.container}>
            {title && <h1 className={section.title}>{title}</h1>}
            {children}
        </section>
    );
};

export default Section;
