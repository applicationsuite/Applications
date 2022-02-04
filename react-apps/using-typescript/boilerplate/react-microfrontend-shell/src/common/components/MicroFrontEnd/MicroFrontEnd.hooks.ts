import { useEffect, useReducer } from 'react';
import { microFrontEndReducer } from './MicroFrontEnd.reducers';
import { MICRO_FRONTEND_ACTIONS, IMicroFrontEndActions } from './MicroFrontEnd.actions';
import { IMicroFrontEndProps, IMicroFrontEndInfo } from './MicroFrontEnd.models';
import { getMicroFrontEndDetails } from './MicroFrontEnd.utils';

export const useInit = (props: IMicroFrontEndProps) => {
  const [state, dispatch] = useReducer(microFrontEndReducer, {});
  const actions = microFrontEndActions(dispatch, state) as IMicroFrontEndActions;

  useEffect(() => {
    actions.initialize(props);
  }, [props]);
  return { state: state as IMicroFrontEndInfo, actions };
};

const microFrontEndActions = (dispatch: any, state: IMicroFrontEndInfo) => {
  const actions: IMicroFrontEndActions = {
    initialize: (props: IMicroFrontEndProps) => {
      const initialData: IMicroFrontEndInfo = getMicroFrontEndDetails(
        props.hostUrl,
        props.hostName
      );
      dispatch({ type: MICRO_FRONTEND_ACTIONS.INITIALIZE, data: initialData });
      return initialData;
    },
    updateData: (data: any) => {
      dispatch({ type: MICRO_FRONTEND_ACTIONS.INITIALIZE, data: data });
    }
  };
  return actions;
};
