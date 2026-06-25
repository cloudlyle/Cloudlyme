import { Typography } from 'antd'
import type { FC } from 'react'
import styles from './SectionTitle.module.css'

const { Title } = Typography

interface SectionTitleProps {
  eyebrow: string
  title: string
  align?: 'left' | 'center'
}

const SectionTitle: FC<SectionTitleProps> = ({ eyebrow, title, align = 'left' }) => (
  <div className={styles.wrap} style={{ textAlign: align }}>
    <span className={styles.eyebrow}>{eyebrow}</span>
    <Title level={2} className={styles.title}>
      {title}
    </Title>
  </div>
)

export default SectionTitle
