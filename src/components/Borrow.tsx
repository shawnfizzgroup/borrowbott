import { FC, useState } from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';

const Borrow:FC = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <SafeAreaView>
      <Button onPress={showDatepicker} title="Show date picker!" />
      <Button onPress={showTimepicker} title="Show time picker!" />
      <Text>selected: {date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1, // Takes up the full screen
    // justifyContent: 'center', // Centers content vertically
    // alignItems: 'center', // Centers content horizontally
    // backgroundColor: '#f2f2f2', // Light gray background,
    // borderWidth: 1,
    // borderColor: 'black',
    // borderRadius: '10px',
    // padding: 20,
  },
  title: {
    fontSize: 24, // Large font size
    fontWeight: 'bold', // Bold text
    color: 'black', // Text color
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginTop: 8, // Spacing between the title and subtitle
  },
  group: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid'
  }
});
export default Borrow;