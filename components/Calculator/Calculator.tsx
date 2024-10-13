import React, { useState } from 'react'
import {View,Text, Pressable} from 'react-native'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const Calculator = () => {
  const[value,setValue] = useState('0') ;
  const [bracketopen,setBracketOpen] =useState(false) ;


  return (
    <View style={styles.main_screen}>
    <ScrollView style={styles.main_screen__display}  >
        <Text style={styles.main_screen__display_text}>
            {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Text>
    </ScrollView>
    <View style={styles.main_screen__keypad}>
        <View style={styles.main_screen__keypad_row}>
            <Pressable >
                <View style={styles.btn1_outer}>
                    <Text style={styles.bg1_button} >AC</Text>
                </View>
            </Pressable>

            <Pressable >
                <View style={styles.btn2_outer}>
                    <Text style={styles.bg2_button} >( )</Text>
                </View>
            </Pressable>

            <Pressable >
                <View style={styles.btn2_outer}>
                    <Text style={styles.bg2_button} >%</Text>
                </View>
            </Pressable>


            <Pressable >
                <View style={styles.btn2_outer}>
                    <Text style={styles.bg2_button} >/</Text>
                </View>
            </Pressable>

        </View>
        {/*  */}
        <View style={styles.main_screen__keypad_row}>
            <Pressable>
                <View style={styles.btn_outer}>
                    <Text style={styles.bg_button} >7</Text>
                </View>
            </Pressable>
            <Pressable >
                <View style={styles.btn_outer}>
                    <Text style={styles.bg_button} >8</Text>
                </View>
            </Pressable>

            <Pressable >
                <View style={styles.btn_outer}>
                    <Text style={styles.bg_button} >9</Text>
                </View>
            </Pressable>

            <Pressable >
                <View style={styles.btn2_outer}>
                    <Text style={styles.bg2_button} >*</Text>
                </View>
            </Pressable>
        </View>
        {/*  */}
        <View style={styles.main_screen__keypad_row}>
            <Pressable >
                <View style={styles.btn_outer}>
                    <Text style={styles.bg_button} >4</Text>
                </View>
            </Pressable>

            <Pressable>
                <View style={styles.btn_outer}>
                    <Text style={styles.bg_button} >5</Text>
                </View>
            </Pressable>

            <Pressable >
                <View style={styles.btn_outer}>
                    <Text style={styles.bg_button} >6</Text>
                </View>
            </Pressable>

            <Pressable >
                <View style={styles.btn2_outer}>
                    <Text style={styles.bg2_button} >-</Text>
                </View>
            </Pressable>
        </View>
        {/*  */}
        <View style={styles.main_screen__keypad_row}>
            <Pressable >
                <View style={styles.btn_outer}>
                    <Text style={styles.bg_button} >1</Text>
                </View>
            </Pressable>

            <Pressable >
                <View style={styles.btn_outer}>
                    <Text style={styles.bg_button} >2</Text>
                </View>
            </Pressable>

            <Pressable >
                <View style={styles.btn_outer}>
                    <Text style={styles.bg_button} >3</Text>
                </View>
            </Pressable>

            <Pressable >
                <View style={styles.btn2_outer}>
                    <Text style={styles.bg2_button} >+</Text>
                </View>
            </Pressable>
        </View>
        {/*  */}
        <View style={styles.main_screen__keypad_row}>
            <Pressable >
                <View style={styles.btn_outer}>
                    <Text style={styles.bg_button} >0</Text>
                </View>
            </Pressable>

            <Pressable>
                <View style={styles.btn2_outer}>
                    <Text style={styles.bg2_button} >.</Text>
                </View>
            </Pressable>

            <Pressable >
                <View style={styles.btn1_outer}>
                    <Text style={styles.bg1_button} >&lt;</Text>
                </View>
            </Pressable>

            <Pressable >
                <View style={styles.btn2_outer}>
                    <Text style={styles.bg2_button} >=</Text>
                </View>
            </Pressable>
        </View>
    </View>
</View>
  )
}

export default Calculator

const styles = StyleSheet.create({
  main_screen: {
    marginTop:1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    alignItems: 'center',
},

// Display results
main_screen__display: {
    elevation: 10,
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 10,
    display: 'flex',

   
    marginBottom: 10,
    padding: 10,
},
main_screen__display_text: {
    fontSize: 50,
    textAlign: 'right',
},
// ////////////////////////////////////////////////////////////////


main_screen__keypad: {
    width: '100%',
    height: '70%',
    // backgroundColor: '#FF5757',
    display: 'flex',
    // justifyContent: 'center',
},
main_screen__keypad_row: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
},
btn_outer: {
    width: 90,
    height: 90,
    backgroundColor: 'white',
    borderRadius: 90,
    elevation: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
},
bg_button: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 30,
},


btn1_outer: {
    width: 90,
    height: 90,
    backgroundColor: '#FF5757',
    borderRadius: 90,
    elevation: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
},
bg1_button: {
    backgroundColor: '#FF5757',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
},


btn2_outer: {
    width: 90,
    height: 90,

    backgroundColor: 'grey',
    borderRadius: 90,
    elevation: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
},
bg2_button: {
    backgroundColor: 'grey',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
}
})