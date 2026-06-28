import { Row, Col } from 'antd'
import type { FC } from 'react'
import { useScrollAnimation } from '@cloudlyme/hooks'
import { SectionTitle } from '@cloudlyme/ui'
import SkillCard from '../../ui/SkillCard/SkillCard'
import { skills } from '../../../data/skills'
import styles from './SkillsSection.module.css'

const SkillsSection: FC = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="skills"
      ref={ref}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
      aria-labelledby="skills-heading"
    >
      <div className={styles.inner}>
        <SectionTitle
          eyebrow="What I do"
          title="A few things I'm good at"
          align="center"
        />

        <Row gutter={[24, 24]}>
          {skills.map((skill) => (
            <Col key={skill.id} xs={24} sm={12} lg={8}>
              <SkillCard
                emoji={skill.emoji}
                title={skill.title}
                description={skill.description}
              />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default SkillsSection
