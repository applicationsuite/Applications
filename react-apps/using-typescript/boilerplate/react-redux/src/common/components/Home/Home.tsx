import React from 'react';
import './Home.css';
import { User } from '../User';

export const Home = () => {
  return (
    <main className="container page">
      <span>Welcome to the Application</span>
      <User></User>
    </main>
  );
};
