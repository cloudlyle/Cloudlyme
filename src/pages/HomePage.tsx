import type { FC } from 'react'
import Navbar from '../components/layout/Navbar/Navbar'
import Footer from '../components/layout/Footer/Footer'
import HeroSection from '../components/sections/HeroSection/HeroSection'
import AboutSection from '../components/sections/AboutSection/AboutSection'
import SkillsSection from '../components/sections/SkillsSection/SkillsSection'
import ProjectsSection from '../components/sections/ProjectsSection/ProjectsSection'
import ContactSection from '../components/sections/ContactSection/ContactSection'

const HomePage: FC = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <Footer />
  </>
)

export default HomePage
