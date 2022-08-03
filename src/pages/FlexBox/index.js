import {View, Text} from 'react-native';
import React from 'react';

const FlexBox = () => {
  // Column
  const ColumnFlexBox = () => {
    return (
      <View style={{height: 300, flexDirection: 'row'}}>
        <View style={{backgroundColor: '#ff7675', height: 100, flex: 1}} />
        <View style={{backgroundColor: '#ffeaa7', height: 100, flex: 2}} />
        <View style={{backgroundColor: '#55efc4', height: 100, flex: 3}} />
        <View style={{backgroundColor: '#0984e3', height: 100, flex: 4}} />
      </View>
    );
  };

  const JustifyContentFlexBox = () => {
    return (
      <View
        style={{
          backgroundColor: 'yellow',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#ff7675',
            height: 50,
          }}
        />
        <View style={{backgroundColor: '#ffeaa7', height: 50}} />
        <View style={{backgroundColor: '#55efc4', height: 50}} />
        <View style={{backgroundColor: '#0984e3', height: 50}} />
      </View>
    );
  };

  const AlignItemsFlexBox = () => {
    return (
      <View
        style={{
          height: 300,
          flexDirection: 'row',
          backgroundColor: 'yellow',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#ff7675',
            height: 50,
            flex: 1,
          }}
        />
        <View style={{backgroundColor: '#ffeaa7', height: 100, flex: 1}} />
        <View style={{backgroundColor: '#55efc4', height: 150, flex: 1}} />
        <View style={{backgroundColor: '#0984e3', height: 200, flex: 1}} />
      </View>
    );
  };

  const AlignContentFlexBox = () => {
    return (
      <View
        style={{
          backgroundColor: 'yellow',
          flexDirection: 'column',
          flex: 1,
          flexWrap: 'wrap',
          alignContent: 'space-around',
        }}>
        <View
          style={{
            backgroundColor: '#ff7675',
            height: 150,
            width: 50,
          }}
        />
        <View style={{backgroundColor: '#ffeaa7', height: 150, width: 50}} />
        <View
          style={{
            backgroundColor: '#ff7675',
            height: 150,
            width: 50,
          }}
        />
        <View style={{backgroundColor: '#ffeaa7', height: 150, width: 50}} />
        <View
          style={{
            backgroundColor: '#ff7675',
            height: 150,
            width: 50,
          }}
        />
        <View style={{backgroundColor: '#ffeaa7', height: 150, width: 50}} />
      </View>
    );
  };

  return (
    <AlignContentFlexBox />
    // <AlignItemsFlexBox />
    // <JustifyContentFlexBox />
    // <ColumnFlexBox />
  );
};

export default FlexBox;
