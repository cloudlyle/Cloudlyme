import type { FC } from 'react'
import styles from './Footer.module.css'

const Footer: FC = () => (
  <footer className={styles.footer} role="contentinfo">
    <div className={styles.watermark} aria-hidden="true">Cloudlyme</div>
    <div className={styles.inner}>
      <div className={styles.divider} role="separator" />
      <p className={styles.copy}>© 2026 Cloudlyme — Made with 🌸</p>
    </div>
  </footer>
)

export default Footer
