import { Row, Col } from 'antd'
import type { FC } from 'react'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'
import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import ProjectCard from '../../ui/ProjectCard/ProjectCard'
import { projects } from '../../../data/projects'
import styles from './ProjectsSection.module.css'

const ProjectsSection: FC = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="work"
      ref={ref}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
      aria-labelledby="work-heading"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionTitle
            eyebrow="Selected work"
            title="Recent projects"
            align="left"
          />
          <p className={styles.sub}>
            A small selection of things I've loved making lately.
          </p>
        </div>

        <Row gutter={[24, 24]}>
          {projects.map((project) => (
            <Col key={project.id} xs={24} sm={12} lg={8}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
              />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default ProjectsSection
