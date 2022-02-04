import {
  IMicroFrontEndInfo,
  IMicroFrontEndProps,
  IMicroFrontEndContext,
  MICROFONTEND_RESOURCES,
  ScriptLoadStatus
} from './MicroFrontEnd.models';

export const loadMicroFrontEndJss = (
  microFrontEndInfo: IMicroFrontEndInfo,
  manifest: any,
  updateData: (data: any) => void
) => {
  const script = document.createElement('script');
  script.id = microFrontEndInfo.jsScriptName;
  document.head.appendChild(script);
  script.onload = () => updateData({ scriptLoadStatus: ScriptLoadStatus.Success });
  script.onerror = () => {
    updateData({
      scriptLoadStatus: ScriptLoadStatus.Failure,
      error: 'Error in loading microfront end manifest script file'
    });
  };
  script.src = getMainJSFilePath(microFrontEndInfo.hostUrl, manifest);
};

export const loadMicroFrontEndCSS = (
  microFrontEndInfo: IMicroFrontEndInfo,
  manifest: any,
  updateData: (data: any) => void
) => {
  var head = document.getElementsByTagName('head')[0];
  var link = document.createElement('link');
  link.id = microFrontEndInfo.cssScriptName;
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = getMainCSSFilePath(microFrontEndInfo.hostUrl, manifest);
  head.appendChild(link);
};

export const getMainJSFilePath = (hostUrl: string, manifest: any) => {
  return manifest.files
    ? `${hostUrl}${manifest.files[MICROFONTEND_RESOURCES.MAIN_JS]}`
    : `${hostUrl}${manifest[MICROFONTEND_RESOURCES.MAIN_JS]}`;
};
export const getMainCSSFilePath = (hostUrl: string, manifest: any) => {
  return manifest.files
    ? `${hostUrl}${manifest.files[MICROFONTEND_RESOURCES.MAIN_CSS]}`
    : `${hostUrl}${manifest[MICROFONTEND_RESOURCES.MAIN_CSS]}`;
};

export const getMicroFrontEndDetails = (hostName: string, hostUrl: string) => {
  const scriptId = (new Date().getUTCMilliseconds() + Math.floor(Math.random() * 1000)).toString();
  let microFrontEndInfo: IMicroFrontEndInfo = {
    hostName: hostName,
    hostUrl: hostUrl,
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

export const loadMicroFrontEndManifest = async (
  microFrontEndInfo: IMicroFrontEndInfo,
  updateData: (data: any) => void
) => {
  fetch(microFrontEndInfo.assetFile)
    .then((res) => {
      return res.ok
        ? res.json()
        : updateData({ error: 'Error in loading microfront end manifest file' });
    })
    .then((manifest) => {
      loadMicroFrontEndJss(microFrontEndInfo, manifest, updateData);
      loadMicroFrontEndCSS(microFrontEndInfo, manifest, updateData);
    })
    .catch(() => updateData({ error: 'Error in loading microfront end manifest file' }));
};

export const loadMicroFrontEnd = (props: IMicroFrontEndProps, state: IMicroFrontEndInfo) => {
  if (state && state.scriptLoadStatus === ScriptLoadStatus.Success) {
    if (window[state.mountEventName]) {
      let contextData: IMicroFrontEndContext = {
        history: history,
        userInfo: props.userInfo,
        data: props.data,
        notify: props.notify
      };
      window[state.mountEventName](state.containerName, contextData);
    } else {
      props.onLoadError && props.onLoadError(state.error!);
      console.error(`Mount method is not provided for the [Microfrontend: ${state.hostName}]`);
    }
  } else if (state.error) {
    props.onLoadError && props.onLoadError(state.error!);
    console.error(state.error);
  }
};

export const unloadMicroFrontEnd = (props: IMicroFrontEndProps, state: IMicroFrontEndInfo) => {
  if (state.scriptLoadStatus === ScriptLoadStatus.Success) {
    if (window[state.unmountEventName]) window[state.unmountEventName](state.containerName);
    // UnMount methd is not provided by microfrontend.
    else {
      console.error(`UnMount method is not provided for the [Microfrontend: ${state.hostName}]`);
    }
  }
  //if javascript script is added to main html removing the same
  const jssElement: any = document.getElementById(state.jsScriptName);
  if (jssElement) {
    jssElement.parentNode &&
      jssElement.parentNode.removeChild &&
      jssElement.parentNode.removeChild(jssElement);
  }
  const cssElement: any = document.getElementById(state.cssScriptName);
  if (cssElement) {
    cssElement.parentNode &&
      cssElement.parentNode.removeChild &&
      cssElement.parentNode.removeChild(cssElement);
  }
};
