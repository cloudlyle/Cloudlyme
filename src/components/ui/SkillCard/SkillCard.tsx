import { Card, Typography } from 'antd'
import type { FC } from 'react'
import type { Skill } from '../../../types'
import styles from './SkillCard.module.css'

const { Title, Paragraph } = Typography

type SkillCardProps = Omit<Skill, 'id'>

const SkillCard: FC<SkillCardProps> = ({ emoji, title, description }) => (
  <Card className={styles.card} bordered={false}>
    <div className={styles.icon} aria-hidden="true">{emoji}</div>
    <Title level={3} className={styles.title}>{title}</Title>
    <Paragraph className={styles.body}>{description}</Paragraph>
  </Card>
)

export default SkillCard
