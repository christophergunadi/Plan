import React from 'react';
import { Text, TouchableOpacity, Alert, } from 'react-native';

const ProcessedList = [{name: "Yoga", start: 14, end: 15}, {name: "Cook", start: 18, end: 19}, {name: "Study", start: 21, end: 23}]

_schedule = (title, start, end) => {
  Expo.Calendar.createEventAsync(Expo.Calendar.DEFAULT, {title: title, startDate: new Date().setHours(start), endDate: new Date().setHours(end)});
}

onPressSchedule = (title, start, end) => {
  Alert.alert(
    'Event Suggestion',
    'Would you like to #plan for ' + title + ' from ' + start + ' 00 to ' + end + " 00?",
    [
      {text: 'Yes', onPress: () => _schedule(title, start, end)},
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    ],
    { cancelable: false }
  )
}

const Tasks = (props) => {
  const { hide, style, onPress } = props;

  if (hide) {
    return null;
  }

  const list = ProcessedList.map((task, index)=>{
    var array = ['Task: ', task.name,', start time: ', task.start, ' 00, end time: ', task.end, ' 00'].join('');
    return <TouchableOpacity onPress={() => onPressSchedule(task.name, task.start, task.end)} style={style} key={index}><Text> {array} </Text></TouchableOpacity>;
    })

  return (
    list
  )
}

export {ProcessedList, Tasks}