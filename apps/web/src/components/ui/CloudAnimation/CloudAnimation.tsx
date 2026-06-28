import type { FC } from 'react'
import styles from './CloudAnimation.module.css'

const CLOUDS = [
  { top: 12, scale: 1.1, dur: 60, delay:   0, opacity: 0.09 },
  { top: 34, scale: 0.8, dur: 80, delay: -20, opacity: 0.07 },
  { top: 58, scale: 1.3, dur: 95, delay: -45, opacity: 0.08 },
  { top: 76, scale: 0.7, dur: 70, delay: -10, opacity: 0.06 },
]

const CloudSVG: FC = () => (
  <svg viewBox="0 0 260 110" width="100%" height="100%">
    <g fill="currentColor">
      <ellipse cx={80}  cy={70} rx={70} ry={40} />
      <ellipse cx={150} cy={55} rx={60} ry={50} />
      <ellipse cx={200} cy={75} rx={55} ry={34} />
      <ellipse cx={120} cy={80} rx={80} ry={30} />
    </g>
  </svg>
)

const CloudAnimation: FC = () => (
  <div className={styles.layer} aria-hidden="true">
    {CLOUDS.map((c, i) => (
      <div
        key={i}
        className={styles.cloud}
        style={{
          top: `${c.top}vh`,
          width: `${260 * c.scale}px`,
          height: `${110 * c.scale}px`,
          opacity: c.opacity,
          animationDuration: `${c.dur}s`,
          animationDelay: `${c.delay}s`,
        }}
      >
        <CloudSVG />
      </div>
    ))}
  </div>
)

export default CloudAnimation
