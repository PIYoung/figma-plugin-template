import { MemoryRouter, Routes, Route } from 'react-router-dom';

import { PATH } from './constants';
import { Home, User } from './pages';

export default function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path={PATH.HOME} element={<Home />} />
        <Route path={PATH.USER} element={<User />} />
      </Routes>
    </MemoryRouter>
  );
}
