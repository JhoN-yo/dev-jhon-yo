import {
  SideBarContainer,
  ProfileContainer,
  PersonalContainer,
  LocationInfo,
  HardSkills,
  SoftSkills,
  SocialLinks,
} from './styles';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { iconsURL } from '~/data/iconsData';
import { FaDiscord, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export function Sidebar() {
  return (
    <SideBarContainer>
      <ProfileContainer>
        <img
          src='https://media.discordapp.net/attachments/1062575673362874410/1073725859086737488/Oslow.png'
          alt='user logo'
        />
        <strong>Jhonata Moura</strong>
        <span>Front-End Developer</span>
      </ProfileContainer>
      <LocationInfo>
        <FaMapMarkerAlt size={10} />
        <p>Campina Grande, PB, Brazil</p>
      </LocationInfo>
      <PersonalContainer>
        <HardSkills>
          <h1>Hard Skills</h1>
          <ul>
            <li id='htmlIcon'>
              <img src={iconsURL.HTML} alt='HTML5 Logo' />
              Html5
            </li>
            <li id='cssIcon'>
              <img src={iconsURL.CSS} alt='CSS3 Logo' />
              Css3
            </li>
            <li id='jsIcon'>
              <img src={iconsURL.JS} alt='Javascript Logo' />
              Javascript
            </li>
            <li id='tsIcon'>
              <img src={iconsURL.TS} alt='Typescript Logo' />
              Typescript
            </li>
            <li id='reactIcon'>
              <img src={iconsURL.REACT} alt='ReactJS Logo' />
              Reeact JS
            </li>
            <li id='sassIcon'>
              <img src={iconsURL.SASS} alt='SASS Logo' />
              SASS
            </li>
            <li id='styledComponentsIcon'>
              <img src={iconsURL.STYLED_COMPONENTS} alt='Styled Components Logo' />
              Styled-components
            </li>
            <li id='gitIcon'>
              <img src={iconsURL.GIT} alt='Git Logo' />
              Git/GitHub
            </li>
          </ul>
        </HardSkills>
        <SoftSkills>
          <h1>Soft Skills</h1>
          <ul>
            <li>Comunication</li>
            <li>Cooperation</li>
            <li>Organization</li>
            <li>Creativity</li>
            <li>Adaptability</li>
            <li>Emotional Intelligence</li>
            <li>Ability to Solve Problems</li>
            <li>Interpersonal Relationship</li>
          </ul>
        </SoftSkills>
      </PersonalContainer>
      <SocialLinks>
        <a href='https://www.linkedin.com/in/jhonata-moura-33b380238/'>
          <FaLinkedinIn size={16} />
        </a>
        <a href='https://github.com/JhoN-yo'>
          <FaGithub size={16} />
        </a>
        <a href='https://discord.gg/8A35bAAspS'>
          <FaDiscord size={16} />
        </a>
      </SocialLinks>
    </SideBarContainer>
  );
}
