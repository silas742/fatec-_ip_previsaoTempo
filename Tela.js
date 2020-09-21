import React from "react";
import { View, StyleSheet } from "react-native";

const Tela = (props) => {
  return (
    <View style={{ ...estilos.tela, ...props.estilos }}>
      {props.children}
    </View>
  );
};

const estilos = StyleSheet.create({
  tela: {
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "#282B28",
    elevation: 4,
    borderRadius: 10,
    padding: 12,
    shadowRadius: 5,
  },
});
export default Tela;
