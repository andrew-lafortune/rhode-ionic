import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.rhode.starter',
  appName: 'rhode',
  webDir: 'www',
  bundledWebRuntime: false,

  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;
