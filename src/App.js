import Header from './components/Header';
import Presentation from './components/Presentation';
import AboutMe from './components/About-Me';
import Projects from './components/Projects';
import ContactMe from './components/Contact-Me';
import Footer from './components/Footer';

const repos = {
  show: true,
  heading: "Projetos",
  gitHubUsername: "Rikelmy-Lopes", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ['Project-Store-Manager', 'Rikelmy-Lopes.github.io', 'trybe-exercicios', 'Rikelmy-Lopes'],
};

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
