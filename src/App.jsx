import Header from './components/Header/Header';
import Presentation from './components/Presentation/Presentation';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import { repos } from './config';

function App() {
  return (
    <>
      <Header />
      <Presentation />
      <AboutMe />
      <Projects
        heading={repos.heading}
        username={repos.gitHubUsername}
        length={repos.reposLength}
        specfic={repos.specificRepos} />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
