import { Tag } from 'antd'
import type { FC } from 'react'
import styles from './TagPill.module.css'

interface TagPillProps {
  label: string
}

const TagPill: FC<TagPillProps> = ({ label }) => (
  <Tag className={styles.pill}>{label}</Tag>
)

export default TagPill
