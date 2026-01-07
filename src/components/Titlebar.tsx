import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Titlebar:FC = () => {
  return (
      <View>
        <Text style = {styles.title}>BorrowBott</Text>
      </View>
  )
}
const styles = StyleSheet.create({
title :{
  fontSize: 32,
  fontWeight: 'bold',
  textAlign: 'center',
  marginVertical: 20,
}
});
export default Titlebar;