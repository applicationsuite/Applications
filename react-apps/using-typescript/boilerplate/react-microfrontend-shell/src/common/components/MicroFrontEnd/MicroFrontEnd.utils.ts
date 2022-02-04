import {
  IMicroFrontEndInfo,
  MICROFONTEND_RESOURCES,
  ScriptLoadStatus
} from './MicroFrontEnd.models';

export const loadMicroFrontEndJss = () => {};

export const loadMicroFrontEndCSS = () => {};

export const getMainJSFilePath = (host: string, manifest: any) => {
  return manifest.files
    ? `${host}${manifest.files[MICROFONTEND_RESOURCES.MAIN_JS]}`
    : `${host}${manifest[MICROFONTEND_RESOURCES.MAIN_JS]}`;
};
export const getMainCSSFilePath = (host: string, manifest: any) => {
  return manifest.files
    ? `${host}${manifest.files[MICROFONTEND_RESOURCES.MAIN_CSS]}`
    : `${host}${manifest[MICROFONTEND_RESOURCES.MAIN_CSS]}`;
};

export const getMicroFrontEndDetails = (hostUrl: string, hostName: string) => {
  const scriptId = (new Date().getUTCMilliseconds() + Math.floor(Math.random() * 1000)).toString();
  let microFrontEndInfo: IMicroFrontEndInfo = {
    scriptId: scriptId,
    scriptLoadStatus: ScriptLoadStatus.NotStarted,
    assetFile: `${hostUrl}/asset-manifest.json`,
    mountEventName: `render${hostName}`,
    unmountEventName: `unmount${hostName}`,
    containerName: `${hostName}-container`,
    jsScriptName: `micro-frontend-script-${hostName}-${scriptId}`,
    cssScriptName: `micro-frontend-css-${hostName}-${scriptId}`
  };
  return microFrontEndInfo;
};
