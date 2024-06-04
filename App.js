import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [validCod, setValidCode] = useState('')

  function checkNumbers(value) {
    if (value == '') {
      return '請輸入電話號碼'
    } else if (value.length != 10 && value != '') {
      return '少於10位數'
    } else {
      if (value != '0912345678') {
        return '輸入錯誤，請重新輸入'
      } else {
        styles.textCorrectEdit
        return '輸入成功'
      }
    }
    //此方法作為判斷電話號碼輸入的判斷，分別是：
    //1.是否無輸入(輸入欄位為"空白")
    //2.是否為"10位數"
    //3.是否輸入正確
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitleEdit}>電話號碼檢查</Text>
      <TextInput
        style={{
          height: 50, width: 300, borderRadius: 0, borderColor: 'darkgray', borderWidth: 5,
          backgroundColor: 'gray', color: 'white', fontSize: 25, textAlign: 'center'
        }}
        onChangeText={(text) => setValidCode(text)}
        value={validCod}
        maxLength={10}
        placeholder='請輸入電話號碼(10位數字)'
        keyboardType={'numeric'}
        secureTextEntry={false}
        editable={true}
        autoFocus={false}
      />
      <Text>您輸入的電話號碼是：{validCod}</Text>
      <Text style={styles.textCheckEdit}>{checkNumbers(validCod)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitleEdit: {
    fontSize: 36,
  },
  textCheckEdit: {
    fontSize: 20,
  },
});
