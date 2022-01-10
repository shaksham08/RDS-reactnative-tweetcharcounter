import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

interface TweetMessageProps {
  tweet: string;
}

const setColor = (length: number) => {
  if (length >= 10) {
    return 'gray';
  } else if (length > 0) {
    return 'rgb(204,204,0)';
  } else {
    return 'red';
  }
};

const setBackground = (length: number) => {
  if (length >= 10) {
    return 'rgba(40,40,40,0.1)';
  } else if (length > 0) {
    return 'rgba(255,250,205,0.1)';
  } else {
    return 'rgba(255,0,0,0.1)';
  }
};

const TweetMessage: React.FC<TweetMessageProps> = ({tweet}) => {
  return (
    <View>
      <Text style={{...styles.message, color: setColor(280 - tweet.length)}}>
        {280 - tweet.length} charcters Remaining
      </Text>
    </View>
  );
};

// Props or State'
const App: React.FC<{}> = () => {
  const [tweet, setTweet] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tweet Character Counter</Text>
      <TextInput
        style={{
          ...styles.input,
          borderColor: setColor(280 - tweet.length),
          backgroundColor: setBackground(280 - tweet.length),
        }}
        multiline
        numberOfLines={10}
        onChangeText={value => setTweet(value)}
        value={tweet}
        placeholder="Lets Tweet!!!"
      />
      <TweetMessage tweet={tweet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
    padding: 8,
    borderColor: 'purple',
    borderWidth: 2,
  },
  heading: {
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 2,
    borderRadius: 20,
  },
  message: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
