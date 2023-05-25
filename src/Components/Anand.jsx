import DropdownComponent from './DropDown';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {sendMessage} from '../Redux/Slice';
import React, {memo, useState} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {useSelector} from 'react-redux';

const Anand = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  //   console.log('dropdown', value);
  const send = ({text, value}) => {
    dispatch(sendMessage({text, value}));
  };
  const users = useSelector(state => {
    return state.message.data;
  });
  // console.log('users', users);

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };
  return (
    <View>
      <TextInput
        placeholder="Message"
        style={styles.input}
        numberOfLines={5}
        multiline={true}
        onChangeText={msg => setText(msg)}
        value={text}
      />
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={users}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Send To"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        renderItem={renderItem}
      />

      <Button title="Send" onPress={() => send({text, value})} />
    </View>
  );
};

export default Anand;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
  },
  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
