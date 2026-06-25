import { Card, Typography } from 'antd'
import type { FC } from 'react'
import type { Project } from '../../../types'
import TagPill from '../TagPill/TagPill'
import styles from './ProjectCard.module.css'

const { Title, Paragraph } = Typography

type ProjectCardProps = Omit<Project, 'id'>

const ProjectCard: FC<ProjectCardProps> = ({ title, description, tags, link }) => (
  <a href={link ?? '#'} className={styles.cardLink} aria-label={`${title} — view project`}>
    <Card
      bordered={false}
      className={styles.card}
      cover={<div className={styles.imagePlaceholder} aria-hidden="true" />}
    >
      <div className={styles.overlay} aria-hidden="true">
        <span className={styles.overlayLabel}>View Project →</span>
      </div>
      <Title level={4} className={styles.title}>{title}</Title>
      <Paragraph className={styles.desc}>{description}</Paragraph>
      <div className={styles.tags}>
        {tags.map((tag) => <TagPill key={tag} label={tag} />)}
      </div>
    </Card>
  </a>
)

export default ProjectCard
