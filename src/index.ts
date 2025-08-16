import {
  ExportedConfig,
  withAndroidManifest,
  withEntitlementsPlist,
} from "expo/config-plugins";

export default function withDownloadMoreRamPlugin(
  appConfig: ExportedConfig,
  props: unknown = {}
): ExportedConfig {
  const { largeHeap, increasedMemoryLimit, extendedVirtualAddressing } =
    handleProps(props);

  // android
  if (largeHeap) {
    appConfig = withAndroidManifest(appConfig, function (decoratedAppConfig) {
      try {
        decoratedAppConfig.modResults.manifest.application![0].$[
          "android:largeHeap"
        ] = "true";
      } catch (e) {
        console.error(
          "[withDownloadMoreRamPlugin] android manifest largeHeap modification failed",
          e
        );
      }
      return decoratedAppConfig;
    });
  }

  // ios
  if (increasedMemoryLimit || extendedVirtualAddressing) {
    appConfig = withEntitlementsPlist(appConfig, function (decoratedAppConfig) {
      try {
        decoratedAppConfig.ios ??= {};
        decoratedAppConfig.ios.entitlements ??= {};
        if (increasedMemoryLimit) {
          decoratedAppConfig.ios.entitlements[
            "com.apple.developer.kernel.increased-memory-limit"
          ] = true;
        }
        if (extendedVirtualAddressing) {
          decoratedAppConfig.ios.entitlements[
            "com.apple.developer.kernel.extended-virtual-addressing"
          ] = true;
        }
      } catch (e) {
        console.error(
          "[withDownloadMoreRamPlugin] ios entitlements modification failed",
          e
        );
      }
      return decoratedAppConfig;
    });
  }

  return appConfig;
}

export function handleProps(props: unknown) {
  const defaultProps = {
    largeHeap: true,
    extendedVirtualAddressing: true,
    increasedMemoryLimit: true,
  };

  const { largeHeap, extendedVirtualAddressing, increasedMemoryLimit } =
    Object.assign(defaultProps, props);

  return {
    largeHeap: !!largeHeap,
    extendedVirtualAddressing: !!extendedVirtualAddressing,
    increasedMemoryLimit: !!increasedMemoryLimit,
  };
}
