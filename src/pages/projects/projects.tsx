import { Section } from "@/components/common";
import { ProjectList } from "@/components/domain/projects";
import { projectData } from "@/contents/project";

const ProjectsPage = () => {
    return (
        <Section title="프로젝트들">
            <ProjectList data={projectData} />
        </Section>
    );
};

export default ProjectsPage;
