export const MICROFONTEND_RESOURCES = {
  MAIN_JS: 'main.js',
  MAIN_CSS: 'main.css'
};

export enum ScriptLoadStatus {
  Success = 'Success',
  Failure = 'Failure',
  NotStarted = 'NotStarted'
}

export interface IMicroFrontEndProps {
  hostUrl: string;
  hostName: string;
  userInfo: any;
  history: any;
  data: any;
  notify: (data: any) => void;
}


export interface IMicroFrontEndContext {
  hostUrl: string;
  hostName: string;
}

export interface IMicroFrontEndInfo {
  scriptId: string;
  scriptLoadStatus: ScriptLoadStatus;
  assetFile: string;
  mountEventName: string;
  unmountEventName: string;
  containerName: string;
  jsScriptName: string;
  cssScriptName: string;
}
