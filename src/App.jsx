
import './App.css'
import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import HeroGradient from './components/heroSection/HeroGradient'
import HeroMain from './components/heroSection/HeroMain'
import NavbarMain from './components/navbar/NavbarMain'
import SkillsMain from './components/skillSection/SkillsMain'
import SubHeroMain from './components/subHeroSection/SubHeroMain'
import SubSkills from './components/skillSection/SubSkills'
import ExperienceMain from './components/experienceSection/ExperienceMain'
import ProjectsMain from './components/projectSection/ProjectsMain'
import FooterMain from './components/footer/FooterMain'
import ContactMeMain from './components/contactMeSection/ContactMeMain'
import React from 'react'
function App() {
  return (
    <div className='overflow-y-hidden scrollbarHide'>
    <NavbarMain />
    <HeroMain />
    <HeroGradient />
    <SubHeroMain  />
    <AboutMeMain />
    <SkillsMain />
    <SubSkills />
    <ExperienceMain/>
    <ProjectsMain />
    <ContactMeMain />
    <FooterMain />
    </div>
  )
}

export default App
