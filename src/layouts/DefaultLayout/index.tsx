import { Outlet } from 'react-router-dom';
import { NavBar } from '~/components/NavBar';
import { Sidebar } from '~/components/Sidebar';
import { LayoutContainer, PagesContainer } from './styles';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Sidebar />
      <PagesContainer>
        <NavBar />
        <Outlet />
      </PagesContainer>
    </LayoutContainer>
  );
}
