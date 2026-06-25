import { useState, useEffect } from 'react'
import { Drawer, Button } from 'antd'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import type { FC } from 'react'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'About',     href: '#about' },
  { label: 'What I Do', href: '#skills' },
  { label: 'Work',      href: '#work' },
]

const Navbar: FC = () => {
  const [scrolled,    setScrolled]    = useState(false)
  const [drawerOpen,  setDrawerOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setDrawerOpen(false)

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>

        <a href="#top" className={styles.logo} aria-label="Cloudlyme — scroll to top">
          CLOUDLYME
        </a>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Site navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className={styles.ctaBtn}>Say hello</a>
        </nav>

        {/* Mobile hamburger */}
        <Button
          className={styles.menuBtn}
          icon={<MenuOutlined />}
          type="text"
          aria-label="Open navigation menu"
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen(true)}
        />
      </div>

      {/* Mobile Drawer */}
      <Drawer
        open={drawerOpen}
        onClose={close}
        placement="right"
        width={280}
        closeIcon={<CloseOutlined style={{ color: 'var(--color-text)' }} />}
        styles={{
          header: { background: 'var(--color-bg)', borderBottom: '1px solid rgba(242,167,181,0.2)' },
          body: {
            background: 'var(--color-bg)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '36px',
          },
        }}
        title={
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, letterSpacing: '0.3em' }}>
            CLOUDLYME
          </span>
        }
      >
        {[...NAV_LINKS, { label: 'Say hello', href: '#contact' }].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.drawerLink}
            onClick={close}
          >
            {link.label}
          </a>
        ))}
      </Drawer>
    </header>
  )
}

export default Navbar
