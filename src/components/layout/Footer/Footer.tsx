import { Layout, Typography } from 'antd'
import type { FC } from 'react'
import styles from './Footer.module.css'

const { Text } = Typography

const Footer: FC = () => (
  <Layout.Footer className={styles.footer} role="contentinfo">
    <div className={styles.watermark} aria-hidden="true">Cloudlyme</div>
    <div className={styles.inner}>
      <div className={styles.divider} role="separator" />
      <Text className={styles.copy}>© 2026 Cloudlyme — Made with 🌸</Text>
    </div>
  </Layout.Footer>
)

export default Footer
