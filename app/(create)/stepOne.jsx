import { StatusBar } from "expo-status-bar";

import { View, Text, FlatList, ScrollView } from "react-native";
import ingredients from "../../constants/ingredients.json";

import { SafeAreaView } from "react-native-safe-area-context";

export default function stepOne() {
  const renderItem = ({ item }) => (
    <View style={{ borderWidth: 1, margin: 10, padding: 10 }}>
      <Text style={{ fontSize: 20 }}>{item.icon}</Text>
      <Text style={{ fontSize: 20 }}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View>
          <FlatList
            data={ingredients}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
