import { Avatar, Button } from 'antd'
import type { FC } from 'react'
import CloudAnimation from '../../ui/CloudAnimation/CloudAnimation'
import styles from './HeroSection.module.css'

const HeroSection: FC = () => (
  <section id="top" className={styles.section} aria-labelledby="hero-name">
    <CloudAnimation />

    <div className={styles.inner}>

      {/* Left: copy */}
      <div className={styles.copy}>
        <span className={styles.eyebrow}>Personal Studio · Est. 2026</span>

        <h1 id="hero-name" className={styles.name}>
          Cloudly<em>me</em>
        </h1>

        <p className={styles.tagline}>Dreamer. Builder. Creator.</p>

        <p className={styles.desc}>
          A quiet corner of the internet where soft ideas grow into thoughtful things —
          design, code, and the small details in between.
        </p>

        <div className={styles.actions}>
          <Button
            href="#work"
            size="large"
            className={styles.btnPrimary}
          >
            View my work
          </Button>
          <Button
            href="#about"
            size="large"
            className={styles.btnGhost}
          >
            More about me
          </Button>
        </div>
      </div>

      {/* Right: avatar */}
      <div className={styles.avatarWrap}>
        <div className={styles.avatarRing} role="img" aria-label="Profile photo">
          <Avatar className={styles.avatar}>CL</Avatar>
        </div>
      </div>

    </div>
  </section>
)

export default HeroSection
