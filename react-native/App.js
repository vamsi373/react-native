import React, {useEffect, useState} from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  Platform,
  TextInput,
  ScrollView,
} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);
  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <ScrollView>
      <View>
        <Text>API CALL IN RN</Text>
        {data.length
          ? data.map(item => (
              <View
                style={{
                  padding: 10,
                  boder: 2,
                  borderBottomColor: 'black',
                  borderBottomWidth: 2,
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    margin: 2,
                    padding: 2,
                    backgroundColor: '#ddd',
                  }}>
                  id: {item.id}
                </Text>
                <Text style={{fontSize: 25, margin: 2, padding: 2}}>
                  Title: {item.title}
                </Text>
                <Text style={{fontSize: 25, margin: 2, padding: 2}}>
                  body: {item.body}
                </Text>
              </View>
            ))
          : null}
      </View>
    </ScrollView>
  );
};

export default App;
