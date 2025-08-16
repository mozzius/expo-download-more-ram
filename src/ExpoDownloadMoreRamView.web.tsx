import * as React from 'react';

import { ExpoDownloadMoreRamViewProps } from './ExpoDownloadMoreRam.types';

export default function ExpoDownloadMoreRamView(props: ExpoDownloadMoreRamViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
