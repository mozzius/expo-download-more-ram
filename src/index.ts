// Reexport the native module. On web, it will be resolved to ExpoDownloadMoreRamModule.web.ts
// and on native platforms to ExpoDownloadMoreRamModule.ts
export { default } from './ExpoDownloadMoreRamModule';
export { default as ExpoDownloadMoreRamView } from './ExpoDownloadMoreRamView';
export * from  './ExpoDownloadMoreRam.types';
