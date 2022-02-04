import React from 'react';
import {
  IMicroFrontEndContext,
  IMicroFrontEndProps,
  ScriptLoadStatus
} from './MicroFrontEnd.models';
import { useInit } from './MicroFrontEnd.hooks';
import { ProgressIndicator } from '@fluentui/react';
import { loadMicroFrontEnd } from './MicroFrontEnd.utils';

export const MicroFrontEnd = (props: IMicroFrontEndProps) => {
  const { state, actions } = useInit(props);
  loadMicroFrontEnd(props, state);
  return (
    <>
      {state.scriptLoadStatus === ScriptLoadStatus.NotStarted && <ProgressIndicator />}
      <div id={`${props.hostName}-container`} dir="ltr" />
    </>
  );
};
