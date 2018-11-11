import React from 'react';
import { Text, TouchableOpacity, } from 'react-native';

const ProcessedList = [{name: "Wow", start: "19 00", end: "21 00"}, {name: "Study", start: "22 00", end: "23 00"}]

const Tasks = (props) => {
  const { hide, style } = props;

  if (hide) {
    return null;
  }

  const list = ProcessedList.map((task, index)=>{
    var array = ['Task: ', task.name,', start time: ', task.start, ', end time: ', task.end].join('');
    return <TouchableOpacity style={style} key={index}><Text> {array} </Text></TouchableOpacity>;
    })

  return (
    list
  )
}

export {ProcessedList, Tasks}