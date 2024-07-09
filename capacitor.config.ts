import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "stride",
  webDir: "out",
  server: {
    url: "http://192.168.0.71:3000",
    cleartext: true,
  },
};

export default config;
