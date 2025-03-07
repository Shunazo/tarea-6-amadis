import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'tarea.couteau',
  appName: 'tarea-couteau',
  webDir: 'www'
,
    android: {
       buildOptions: {
          keystorePath: 'c:\Users\Abel\Desktop\keys.jks',
          keystoreAlias: 'key0',
       }
    }
  };

export default config;
