import { IntroSection } from '../Sections/IntroSection';
import { SkillsSection } from '../Sections/SkillsSection';
import { ProjectsSection } from '../Sections/ProjectsSection';
import { AboutSection } from '../Sections/AboutSection';
import { ContactSection } from '../Sections/ContactSection';
import React from 'react';
import './MainSection.css';

function MainSection ({theme}) {
  return (
    <main className={`main theme-${theme}`}>
        <section id='presentation'>
          < IntroSection />
        </section>
        <section  id='skills'>
          < SkillsSection />
        </section>
        <section  id='projects'>
          < ProjectsSection />
        </section>
        <section  id='about-me'>
          < AboutSection />
        </section>
        <section  id='contact'>
          < ContactSection />
        </section>
    </main>
  )
};

export { MainSection };
