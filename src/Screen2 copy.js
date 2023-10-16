import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.containerInfo}>
                <View style={styles.boxImgPhone}>
                    <Image
                        source={require('../assets/vs_black.png')}
                        style={styles.imgPhone}
                    /></View>

                <View style={styles.boxInfo}>
                    <Text style={styles.txtInfo}>Điện Thoại Vsmart Joy 3</Text>
                    <Text style={styles.txtInfo}>Hàng chính hãng </Text>
                </View>
            </View>

            <View style={styles.containerBtnMau}>
                <Text style={styles.txtChonMau}>Chọn một màu bên dưới:</Text>
                <View style={styles.boxBtnMau}>
                    <TouchableOpacity
                        style={styles.btnMau}
                    >
                        <View style={styles.mauSliver}></View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btnMau}
                    >
                        <View style={styles.mauRed}></View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btnRed}
                    >
                        <View style={styles.mauBlack}></View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btnMau}
                    >
                        <View style={styles.mauBlue}></View>
                    </TouchableOpacity>
                </View>

                <View style={styles.boxBtnXong}>
                    <TouchableOpacity style={styles.btnXong}>
                        <Text style={styles.txtXong}>Xong</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center"
    },

    containerInfo: {
        flex:2,
        width:"95%",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        gap:10
        
    },
    boxImgPhone:{
        flex:3,
        justifyContent:"center",
        alignItems:"center"
    },
    imgPhone: {
        width:112,
        height: 132,
    },

    boxInfo:{
        flex:7,
        height:"60%",
        justifyContent:"flex-start"
    },
    txtInfo:{
        fontSize:16,
        fontWeight:600
    },

    containerBtnMau:{
        flex:7,
        width:"100%",
        justifyContent:"space-between",
        alignItems:"flex-start",
        backgroundColor:"#C4C4C4"
    },
    txtChonMau:{
        flex:1,
        fontSize:18,
        fontWeight:600,
        margin:15,
    },

    boxBtnMau:{
        flex:7,
        width:"100%",
        // flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        gap:10
    },
    btnMau:{
        flex:1
    },
    mauSliver:{
        width:85,
        height:80,
        backgroundColor:"#C5F1FB",
    },
    mauRed:{
        width:85,
        height:80,
        backgroundColor:"#F30D0D",
    },
    mauBlack:{
        width:85,
        height:80,
        backgroundColor:"#000000",
    },
    mauBlue:{
        width:85,
        height:80,
        backgroundColor:"#234896",
    },
    boxBtnXong:{
        flex:1.5,
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    btnXong:{
        width:"90%",
        height:45,
        backgroundColor:"#1952E2",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        borderWidth:1,
        borderBlockColor:"#CA1536"
    },

});