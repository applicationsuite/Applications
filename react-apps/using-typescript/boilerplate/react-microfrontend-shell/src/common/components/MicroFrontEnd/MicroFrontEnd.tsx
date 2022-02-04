import React from 'react';
import { IMicroFrontEndContext, IMicroFrontEndProps } from './MicroFrontEnd.models';
import { useInit } from './MicroFrontEnd.hooks';

export const MicroFrontEnd = (props: IMicroFrontEndProps) => {
  const { state, actions } = useInit(props);

  return (
    <main className="container page">
      <span>Welcome to the Application</span>
    </main>
  );
};
