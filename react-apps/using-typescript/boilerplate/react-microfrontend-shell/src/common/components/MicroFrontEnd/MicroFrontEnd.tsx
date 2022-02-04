import React from 'react';
import {
  IMicroFrontEndContext,
  IMicroFrontEndProps,
  ScriptLoadStatus
} from './MicroFrontEnd.models';
import { useInit } from './MicroFrontEnd.hooks';
import { ProgressIndicator } from '@fluentui/react';

export const MicroFrontEnd = (props: IMicroFrontEndProps) => {
  const { state, actions } = useInit(props);
  return (
    <>
      {!window[state.mountEventName] && <ProgressIndicator />}
      <div id={`${state.containerName}`} dir="ltr" />
    </>
  );
};
