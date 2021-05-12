import React, {useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {getLocation} from '../reduxtoolkit/counterSlice';

const Router = () => {
  const {catData} = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => dispatch(getLocation())}>
        <Text>add</Text>
      </TouchableOpacity>
      <Text>{catData?.file}</Text>
    </View>
  );
};

export default Router;
