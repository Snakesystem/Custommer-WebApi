// src/App.tsx
import PrivateRoute from '@components/PrivateRoute';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './home/home';
import LoginPage from './auth/login';
import ForgetPasswordPage from './auth/forgetpassword';
import OrganizationPage from './home/organization';
import NotesPage from './home/notes';
import ProjectPage from './home/project';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage/>} />
          <Route path="/organization" element={<OrganizationPage/>} />
          <Route path="/notes" element={<NotesPage/>} />
          <Route path="/project" element={<ProjectPage/>} />
        </Route>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<ForgetPasswordPage/>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
