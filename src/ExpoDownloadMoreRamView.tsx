import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoDownloadMoreRamViewProps } from './ExpoDownloadMoreRam.types';

const NativeView: React.ComponentType<ExpoDownloadMoreRamViewProps> =
  requireNativeView('ExpoDownloadMoreRam');

export default function ExpoDownloadMoreRamView(props: ExpoDownloadMoreRamViewProps) {
  return <NativeView {...props} />;
}
