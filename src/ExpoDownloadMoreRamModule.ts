import { NativeModule, requireNativeModule } from 'expo';

import { ExpoDownloadMoreRamModuleEvents } from './ExpoDownloadMoreRam.types';

declare class ExpoDownloadMoreRamModule extends NativeModule<ExpoDownloadMoreRamModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoDownloadMoreRamModule>('ExpoDownloadMoreRam');
