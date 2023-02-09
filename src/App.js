import React from 'react';
import Header from './components/Header';
import Presentation from './components/Presentation';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import { repos } from './config';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
