import React, { useState } from "react";
import {Button,FlatList,Keyboard,StyleSheet,TextInput,View,} from "react-native";
import ItemPrevisao from "./components/ItemPrevisao";

export default function App() {
  const [cidade, setCidade] = useState("");
  const [previsoes, setPrevisoes] = useState([]);
//api nova
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lang=pt_br&q=";
  const apiKey = "fa73df36a8401fdd0e0f6c360e014eaf";

const procurarPrevisoes = (e) => {
    e.preventDefault();
    
  const capturarPrevisoes = (cidade) => {
    setCidade(cidade);
  };

  
    setPrevisoes([]);
    const target = url + cidade + "&appid=" + apiKey;
    fetch(target)
      .then((dados) => {
        return dados.json();
      })
      .then((dados) => {
        console.log("dados", dados);
        setPrevisoes([dados]);
        Keyboard.dismiss();
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inicio}>
        <TextInput
          style={styles.nomeCidade}
          placeholder="Digite o nome da cidade"
          value={cidade}
          onChangeText={capturarPrevisoes}
        />
        <Button title="Pesquisar" onPress={procurarPrevisoes} />
      </View>
      <FlatList
        data={previsoes}
        renderItem={(previsao) => <ItemPrevisao previsao={previsao.item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inicio: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    shadowRadius: 6,
    shadowColor: "#282B28",
  }, 
  container: {
    padding: 40,
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#FFF",
  }, 
  nomeCidade: {
    padding: 20,
    borderBottomColor: "#282B28",
    borderBottomWidth: 3,
    textAlign: "center",
    flexGrow: "0.7",
  },
});
