import { Text, View } from "react-native";
import {
  ActivityIndicator,
  Avatar,
  Button,
  Card,
  MD2Colors,
  Portal,
} from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>config for EXPO with tailwindcss and react-native paper</Text>
    </View>
  );
};
