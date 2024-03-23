import React from 'react';

import { Props } from './types';
import { useNavigate } from 'react-router-dom';

import User from '../../assets/images/test.png';

export const Home: React.FC<Props> = () => {
  const router = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <img src={User} alt='my-user' />
      <button
        onClick={() => {
          router('/users');
        }}>
        Go to users
      </button>
    </div>
  );
};

Home.displayName = 'Page.Home';
