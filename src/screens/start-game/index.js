import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Card } from "../../components";

import { styles } from "./styles";

export const StartGame = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comenzar juego</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.label}>Escribe un numero</Text>
        <TextInput style={styles.input} placeholder="0" />

        <View style={styles.buttonContainer}>
          <Button
            title="Reiniciar"
            onPress={() => console.log("reiniciar")}
            color="#C4C9E9"
          />
          <Button
            title="Confirmar"
            onPress={() => console.log("confirmar")}
            color="#97A1D8"
          />
        </View>
      </Card>
    </View>
  );
};

export default StartGame;
