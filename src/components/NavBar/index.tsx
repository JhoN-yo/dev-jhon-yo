import { NavBarContainer } from './styles';
import { NavLink } from 'react-router-dom';
import { ImHome3 } from 'react-icons/im';
import { RiFoldersFill } from 'react-icons/ri';
import { MdSupportAgent } from 'react-icons/md';

export function NavBar() {
  return (
    <NavBarContainer>
      <nav>
        <NavLink to='/' title='Home'>
          <ImHome3 />
        </NavLink>
        <NavLink to='/projects' title='Projects'>
          <RiFoldersFill />
        </NavLink>
        <NavLink to='/contact' title='Contact'>
          <MdSupportAgent />
        </NavLink>
      </nav>
    </NavBarContainer>
  );
}
