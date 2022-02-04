import React from 'react';

export const getConfig = async (configfile: string) => {
  return fetch(window.location.origin + '/' + configfile)
    .then((response) => response.json())
    .catch((error) => console.log('Error in loading Config file'));
};

export const useConfig = (configfile: string) => {
  const [config, setConfig] = React.useState();
  React.useEffect(() => {
    (async () => {
      setConfig(await getConfig(configfile));
    })();
  }, [configfile]);
  return config;
};
