import { Platform, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {Platform.select({
          ios: "Check the entitlements file",
          android: "Check the AndroidManifest.xml file",
        })}
      </Text>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
  },
} as const;
