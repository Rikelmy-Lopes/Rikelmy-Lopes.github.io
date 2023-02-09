import React, { useState, useEffect, useCallback } from 'react';
import '../style/Projects.css';
import { Fade } from 'react-reveal';
import Container from 'react-bootstrap/Container';
import { Jumbotron } from './migration';
import Row from 'react-bootstrap/Row';
import ProjectCard from './ProjectCard';
import axios from 'axios';


const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = 'https://api.github.com';
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      // getting all repos
      const response = await axios.get(allReposAPI);
      // slicing to the length
      repoList = [...response.data.slice(0, length)];
      // adding specified repos
      try {
        for (let repoName of specfic) {
          const response = await axios.get(`${specficReposAPI}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specfic, specficReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <div id="projects" className='projects-container'>
      <Jumbotron fluid className="bg-white m-0">
        <Container>
          <Fade bottom duration={ 1500 }>
            <h2 className="display-3 pb-5 text-center">
              <span className='projects-sec__main' > { heading } </span>
              <span className='heading-sec__sub'> Alguns Projetos Back-end Desenvolvidos por Mim! </span>
            </h2>
          </Fade>
          <Row>
            {projectsArray.length
              ? projectsArray.map((project, index) => (
                <ProjectCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  value={project}
                />
              ))
              : dummyProjectsArr.map((project, index) => (
                <ProjectCard
                  key={`dummy-${index}`}
                  id={`dummy-${index}`}
                  value={project}
                />
              ))}
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

Project.propTypes = {}.isRequired;

export default Project;
