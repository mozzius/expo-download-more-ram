# expo-download-more-ram

Config plugin for requesting increased memory limits

Before you reach for this, try reducing the amount of memory your app requires first!

Apple in particular does not like it when you add unnecessary entitlements to your app. Use at own risk of App/Play Store rejection!

## Installation

Install the package

```bash
$ npm install expo-download-more-ram
```

Add the config plugin to your `app.json` and choose which options you want to enable. By default, all options are enabled.

- Android: Large heap ([docs](https://developer.android.com/guide/topics/manifest/application-element#largeHeap))
- iOS: Increased memory limit ([docs](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.kernel.increased-memory-limit))
- iOS: Extended virtual addressing ([docs](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.kernel.extended-virtual-addressing))

```json
{
  "expo": {
    // etc etc
    "plugins": [
      [
        "expo-download-more-ram",
        {
          "largeHeap": true, // android
          "increasedMemoryLimit": true, // ios
          "extendedVirtualAddressing": true // ios
        }
      ]
    ]
  }
}
```
