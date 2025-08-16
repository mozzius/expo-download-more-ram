# expo-download-more-ram

Config plugin for requesting increased memory limits

# _Note: this might not pass review by the App/Play Store_

They seem to approve it at their discretion - if you don't have a good reason to use this, there's a chance that it will be rejected. Use it responsibly and only when necessary. Before you reach for this, try reducing the amount of memory your app requires first!

# Installation

Add the config plugin to your `app.json` and choose which options you want to enable. By default, all options are enabled.

- Android: Large heap ([docs](https://developer.android.com/guide/topics/manifest/application-element#largeHeap))
- Increased memory limit ([docs](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.kernel.increased-memory-limit))
- Extended virtual addressing ([docs](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.kernel.extended-virtual-addressing))

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
