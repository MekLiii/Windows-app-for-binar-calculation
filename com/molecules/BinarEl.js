/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import NumberInput from '../atoms/NumberInput';
import ButtonCom from '../atoms/ButtonCom';

const App = () => {
  const [divide, setDivide] = useState('0');
  const [byDivide, setByDivide] = useState('0');
  const [sign, setSign] = useState('+');

  let dividor = parseInt(divide, 2);
  let byDividor = parseInt(byDivide, 2);

  const divideNumbers = (x, y) => {
    parseInt(x, 10);
    parseInt(y, 10);
    let result;
    if (sign == '/') {
      result = x / y;
    }
    if (sign == '*') {
      result = x * y;
    }
    if (sign == '-') {
      result = x - y;
    }
    if (sign == '+') {
      result = x + y;
    }
    return Math.round(parseFloat(result.toString(2)));
  };

  const restResult = () => {
    if (sign == '/') {
      const rest = parseInt(dividor, 10) % parseInt(byDividor, 10);
      return rest.toString(2);
    } else return NaN;
  };

  const deciminaryRest = () => {
    if (sign == '/') {
      const restDec = divide % byDivide;
      return parseInt(restDec, 10);
    } else return NaN;
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.buttonBox}>
          <ButtonCom title="Dzielenie" onPress={() => setSign('/')} color='#00ADB5'/>
          <ButtonCom title="Mnożenie" onPress={() => setSign('*')} color='#00ADB5'/>
          <ButtonCom title="Dodawanie" onPress={() => setSign('+')} color='#00ADB5'/>
          <ButtonCom title="Odejmowanie" onPress={() => setSign('-')} color='#00ADB5'/>
        </View>
        <View style={styles.inputBox}>
          <ButtonCom
            onPress={() => setDivide(divide + '1')}
            title="+"
            style={styles.addButton}
            color='#00ADB5'
          />
          <ButtonCom
            onPress={() => setDivide(divide.slice(0, -1))}
            title="-"
            style={[{margin: 20}]}
            color='#00ADB5'
          />
          <NumberInput value={divide} onChangeText={setDivide} />
          <Text style={[{fontSize: 25, margin: 5}]}>{sign}</Text>
          <NumberInput value={byDivide} onChangeText={setByDivide} />
          <ButtonCom
            onPress={() => setByDivide(byDivide + '1')}
            title="+"
            style={styles.addButton}
            color='#00ADB5'
          />
          <ButtonCom
            onPress={() => setByDivide(byDivide.slice(0, -1))}
            title="-"
            style={[{margin: 20}]}
            color='#00ADB5'
          />
        </View>
        <View style={styles.textCointainer}>
          <View style={styles.textBox}>
            <Text style={styles.title}>System 10</Text>
            <Text style={styles.text}>Liczba 1:{!dividor ? 0 : dividor}</Text>
            <Text style={styles.text}>
              Liczba 2: {!byDividor ? 0 : byDividor}
            </Text>
            <Text style={styles.text}>
              Wynik:
              {!divideNumbers(dividor, byDividor)
                ? 0
                : parseInt(divideNumbers(dividor, byDividor), 2)}
            </Text>
            <Text style={styles.text}>
              Reszta:
              {isNaN(deciminaryRest()) ? 0 : parseInt(deciminaryRest(), 2)}
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.title}>System 2</Text>
            <Text style={styles.text}>Liczba 1:{!divide ? 0 : divide}</Text>
            <Text style={styles.text}>Liczba 2:{!byDivide ? 0 : byDivide}</Text>
            <Text style={styles.text}>
              Wynik:
              {isNaN(divideNumbers(dividor, byDividor))
                ? 0
                : divideNumbers(dividor, byDividor)}
            </Text>
            <Text style={styles.text}>
              Reszta:{isNaN(restResult()) ? 0 : restResult()}
            </Text>
          </View>
        </View>
        <ButtonCom
          title="Wyczyść"
          color='#00ADB5'
          onPress={() => {
            setDivide();
            setByDivide();
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 700,
    width: 700,
    backgroundColor: '#222831',
    borderRadius: 10,
  },
  textInput: {
    minWidth: 200,
    minHeight: 40,
    fontSize: 30,
  },
  text: {
    minWidth: 100,
    fontSize: 25,
    color: 'black',
  },
  title: {
    fontSize: 25,
    color: 'black',
  },
  textCointainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
  },
  textBox: {
    flex: 1,
    minHeight: 200,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 10,
    textAlign: 'center',
  },
  buttonBox: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#3d3d3d',
    height: 100,
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    // backgroundColor: 'pink',
    height: 100,
  },
  addButton: {
    margin: 10,
    fontSize: 20,
  },
});

export default App;
