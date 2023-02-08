import React, { lazy, Suspense } from 'react';
// import Header from './components/Header';
// import Presentation from './components/Presentation';
// import AboutMe from './components/About-Me';
// import Projects from './components/Projects';
// import ContactMe from './components/Contact-Me';
// import Footer from './components/Footer';
import { repos } from './config';

const Header = lazy(() => import('./components/Header'));
const Presentation = lazy(() => import('./components/Presentation'));
const AboutMe = lazy(() => import('./components/About-Me'));
const Projects = lazy(() => import('./components/Projects'));
const ContactMe = lazy(() => import('./components/Contact-Me'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Presentation />
        <AboutMe />
        <Projects 
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}/>
        <ContactMe />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
