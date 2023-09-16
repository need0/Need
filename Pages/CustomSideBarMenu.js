import { StyleSheet, Text, View, Linking, Image, SafeAreaView } from 'react-native'
import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem } from '@react-navigation/drawer'

const CustomSideBarMenu = (props) => {

    const BASE_PATH = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';

  return (
    <SafeAreaView style={{flex:1}}>
        {/* Top Large Image */}
        <Image 
        source={require('../assets/react_logo.png')} 
        style={styles.sideMenuProfileIcon}/>

        <DrawerContentScrollView {...props}>

            <DrawerItemList {...props}/>
            <DrawerItem
                label="Visit us"
                onPress={()=>Linking.openURL('https://it.tni.ac.th')}
            />
            {/* <DrawerItem
                label="WebSite TNI⭐" 
                onPress={()=>Linking.openURL('https://www.tni.ac.th')}/> */}

            <View style= {styles.customItem}>
                <Image source={{uri:BASE_PATH + 'star_filled.png'}}
                style = {styles.iconStyle}/>
                <Text onPress={()=>{Linking.openURL('https://tni.ac.th')}}>
                    WebSite TNI
                </Text>
            </View>

        </DrawerContentScrollView>

        <Text style={{textAlign: 'center' , fontSize: '16px',color:'gray'}}>
            www.tni.ac.th
        </Text>

    </SafeAreaView>
  );
}

export default CustomSideBarMenu

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center',
    },
    iconStyle: {
        width: 15,
        height: 15,
        marginHorizontal: 5,
    },
    customItem: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
});
