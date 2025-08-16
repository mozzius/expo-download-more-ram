import { registerWebModule, NativeModule } from 'expo';

import { ExpoDownloadMoreRamModuleEvents } from './ExpoDownloadMoreRam.types';

class ExpoDownloadMoreRamModule extends NativeModule<ExpoDownloadMoreRamModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoDownloadMoreRamModule, 'ExpoDownloadMoreRamModule');
