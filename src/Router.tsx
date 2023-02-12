import { Route, Routes } from 'react-router-dom';
import { Home } from '~/pages/Home/index';
import { Contact } from '~/pages/Contact';
import { DefaultLayout } from '~/layouts/DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  );
}
