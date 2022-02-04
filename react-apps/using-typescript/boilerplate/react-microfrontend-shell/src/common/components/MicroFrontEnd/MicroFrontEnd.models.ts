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
  history: any;
  userInfo?: any;
  data?: any;
  notify?: (data: any) => void;
  onLoadError?: (error: string) => void;
}

export interface IMicroFrontEndContext {
  userInfo: any;
  history: any;
  data?: any;
  notify?: (data: any) => void;
}

export interface IMicroFrontEndInfo extends IMicroFrontEndProps {
  scriptId: string;
  scriptLoadStatus: ScriptLoadStatus;
  assetFile: string;
  mountEventName: string;
  unmountEventName: string;
  containerName: string;
  jsScriptName: string;
  cssScriptName: string;
  error?: string;
}
