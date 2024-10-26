import { DrawerContent, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet, Text,View } from 'react-native'

const CustomDrawerContent :React.FC<DrawerContentComponentProps> = (props) => {
 

  return (
    <DrawerContentScrollView { ...props} >
         <View style={styles.container}>
            
         </View>
        <DrawerItemList {...props} />
     
       
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:'yellow',
      height:"20%",
      width:"100%"
    },
    title:{
       color:'red'
    }
})
export default CustomDrawerContent 

