import { Layout } from 'antd'
import type { FC } from 'react'
import Navbar from '../components/layout/Navbar/Navbar'
import Footer from '../components/layout/Footer/Footer'
import HeroSection from '../components/sections/HeroSection/HeroSection'
import AboutSection from '../components/sections/AboutSection/AboutSection'
import SkillsSection from '../components/sections/SkillsSection/SkillsSection'
import ProjectsSection from '../components/sections/ProjectsSection/ProjectsSection'
import ContactSection from '../components/sections/ContactSection/ContactSection'

const HomePage: FC = () => (
  <Layout style={{ background: 'transparent' }}>
    <Navbar />
    <Layout.Content>
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </Layout.Content>
    <Footer />
  </Layout>
)

export default HomePage
