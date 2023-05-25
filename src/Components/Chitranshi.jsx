import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import moment from 'moment';
import {FlatList} from 'react-native-gesture-handler';
const Chitranshi = () => {
  const newMessage = useSelector(state => state.message.messages);
  // console.log('chitranshi', newMessage);

  // console.log(moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a'));
  const time = moment(Date.now()).format(' h:mm:ss a');
  return (
    <View style={styles.container}>
      <Text>Sender:</Text>
      <FlatList
        data={newMessage}
        renderItem={({item}) => {
          console.log(item);
          return (
            <View>
              <Text>{item.text}</Text>
            </View>
          );
        }}
      />
      <Text>{time}</Text>
    </View>
  );
};

export default Chitranshi;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    borderWidth: 1,
    margin: 50,
  },
});
