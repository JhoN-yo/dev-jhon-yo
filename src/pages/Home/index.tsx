import { AboutMeContainer, HomeContainer, EducationContainer, CommentContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <main>
        <AboutMeContainer>
          <h1>About Me</h1>
          <p>
            Hello, my name is Jhonata but you can call me JhoN, Im looking for new challenges and
            connections in the technology area in general at the moment.
          </p>
          <p>
            I intend to improve myself more and more as a Dev, so that with my knowledge I can
            develop projects and contribute to the community through applications that positively
            impact peoples lives! Currently Im focused on perfecting my knowledge of Frontend and
            Backend in Web 2.0.
          </p>
          <p>
            Feel free to send a message, get in touch for any purpose, such as a suggestion, job
            offers, opportunities, project ideas, constructive criticism or Networking.
          </p>
        </AboutMeContainer>
        <EducationContainer>
          <h1>Education</h1>
          <ul>
            <li>
              <strong>Rocketseat - Ignite React JS</strong>
              Specialization focused on React JS Front-End development
            </li>
            <li>
              <strong>Rocketseat - Discover</strong>
              Specialization focused on React JS Front-End development
            </li>
            <li>
              <strong>Self-Taught</strong>
              I study on my own, using tools such as Google, Youtube
              <br />
              and mainly through connections and open-source codes
            </li>
          </ul>
        </EducationContainer>
      </main>
      <CommentContainer>
        <img
          src='https://github-readme-activity-graph.cyclic.app/graph?username=JhoN-yo&bg_color=202225&color=87868B&line=87868B&point=292B2F&area=true&area_color=000&hide_border=true&custom_title=Activity%20Graph&)](https://github.com/ashutosh00710/github-readme-activity-graph'
          alt='jhon github contribution stats'
        />
      </CommentContainer>
    </HomeContainer>
  );
}
