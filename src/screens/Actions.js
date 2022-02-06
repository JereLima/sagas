import React, { useState } from "react";
import { useSelector } from "react-redux";
import { View, Button, SafeAreaView, TextInput, Text, StyleSheet, ScrollView, StatusBar } from "react-native";
import { useDispatch } from "react-redux";
import { getComments, reset } from "../store/auth/actions";

const Actions = () => {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.authReducer);

  const saveName = () => {
    dispatch(getComments());
  };

  const clearList = () => {
    dispatch(reset());
  };

  return (
    <SafeAreaView
      style={css.safe}
    >
      <Button title="Buscar Lista" onPress={() => saveName()} />
      <ScrollView>
      {comments.map((item, index) => (
        <View key={index} style={css.item}>
            <Text>Nome: {item.name}</Text>
            <Text>Pessoa: {item.email}</Text>
          </View>
      ))}
      </ScrollView>
      <Button title="Apagar" onPress={() => clearList()} />
    </SafeAreaView>
  );
};

export default Actions;

const css = StyleSheet.create({
  safe:{
    flex: 1,
    backgroundColor: '#ccc',
    paddingTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: 'white',
    marginTop: 5,
    justifyContent: 'center',
    paddingLeft: 20,
    borderRadius: 10,
    marginHorizontal: 15,
    paddingVertical: 5
  }
})