import { Card } from 'antd'
import type { FC } from 'react'
import type { Skill } from '../../../types'
import styles from './SkillCard.module.css'

type SkillCardProps = Omit<Skill, 'id'>

const SkillCard: FC<SkillCardProps> = ({ emoji, title, description }) => (
  <Card className={styles.card} bordered={false}>
    <div className={styles.icon} aria-hidden="true">{emoji}</div>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.body}>{description}</p>
  </Card>
)

export default SkillCard
