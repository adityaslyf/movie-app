import { View, Text } from "react-native";
import AppNavigation from "./navigation/appNavigation";
import './global.css';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return <AppNavigation />;
}