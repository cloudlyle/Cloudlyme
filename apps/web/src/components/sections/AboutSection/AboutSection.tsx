import { Row, Col, Typography, Statistic } from 'antd'
import type { FC } from 'react'
import { useScrollAnimation } from '@cloudlyme/hooks'
import { SectionTitle } from '@cloudlyme/ui'
import styles from './AboutSection.module.css'

const { Paragraph } = Typography

const AboutSection: FC = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="about"
      ref={ref}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
      aria-labelledby="about-heading"
    >
      <div className={styles.inner}>
        <Row gutter={[{ xs: 0, md: 64 }, { xs: 48, md: 0 }]} align="middle">

          {/* Photo */}
          <Col xs={24} md={10}>
            <div className={styles.photoWrap}>
              <div className={styles.photoGlow} aria-hidden="true" />
              <div className={styles.photo} role="img" aria-label="About photo placeholder">
                <span aria-hidden="true">✿</span>
              </div>
            </div>
          </Col>

          {/* Copy */}
          <Col xs={24} md={14}>
            <SectionTitle
              eyebrow="About me"
              title="Hello, I'm a maker of soft, useful things."
              align="left"
            />

            <Paragraph className={styles.body}>
              I design and build digital experiences with a gentle eye for detail.
              My work lives at the intersection of warmth and craft — interfaces that
              feel calm, considered, and a little bit magical.
            </Paragraph>
            <Paragraph className={styles.body}>
              When I'm not at my desk you'll find me chasing cherry blossom season,
              collecting stationery, and brewing far too much tea.
            </Paragraph>

            <div className={styles.stats}>
              <Statistic
                title="Years creating"
                value="6+"
                valueStyle={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent)', fontSize: 42, lineHeight: 1 }}
              />
              <Statistic
                title="Projects shipped"
                value="40+"
                valueStyle={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent)', fontSize: 42, lineHeight: 1 }}
              />
              <Statistic
                title="Cups of tea"
                value="∞"
                valueStyle={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent)', fontSize: 42, lineHeight: 1 }}
              />
            </div>
          </Col>

        </Row>
      </div>
    </section>
  )
}

export default AboutSection
