import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { DataContext } from "./DataContext";



// export default function Screen2({navigation}) {
function Screen2({ navigation, route }) {
  const dataPhone = useContext(DataContext)
  const [pathImgPhone, setPathImgPhone] = useState(require('../assets/vs_silver.png'))
  const [mau,setMau] = useState(route.params || 0)
  const onChangeMau = (vMau) => {
    switch (vMau) {
      case 0:
        setMau(0)
        setPathImgPhone(require('../assets/vs_silver.png'))
        break
      case 1:
        setPathImgPhone(require('../assets/vs_red.png'))
        setMau(1)
        break
      case 2:
        setPathImgPhone(require('../assets/vs_black.png'))
        setMau(2)
        break
      default:
        setPathImgPhone(require('../assets/vs_blue.png'))
        setMau(3)
        break
    }
  }
  useEffect(() => {
    onChangeMau(mau)
  }, [route.params])

  function tenMau(vMau){
    switch (vMau) {
      case 0:
        return 'bạc'
      case 1:
        return 'đỏ'
      case 2:
        return 'đen'
      default:
        return 'xanh dương'
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <View style={styles.boxImgPhone}>
          <Image
            // source={require('../assets/vs_black.png')}
            source={pathImgPhone}
            style={styles.imgPhone}
          /></View>

        <View style={styles.boxInfo}>
          <Text style={styles.txtInfo}>Điện Thoại Vsmart Joy 3</Text>
          <Text style={styles.txtInfo}>Hàng chính hãng </Text>
          <View style = {{gap:5, marginTop: 5}}>
            <Text style={styles.txtInfo}>
              Màu: <Text style={{ fontWeight: 'bold',fontSize:18}}>{tenMau(mau)}</Text>
              </Text>
            <Text style={styles.txtInfo}>
              Cung cấp bởi <Text style={{ fontWeight: 'bold',fontSize:18}}>{dataPhone.suplly}</Text>
              </Text>
            <Text style={{ fontWeight: 'bold',fontSize:18}}>{dataPhone.priceAct.toLocaleString('de-DE')}</Text>
          </View>
        </View>
      </View>

      <View style={styles.containerBtnMau}>
        <Text style={styles.txtChonMau}>Chọn một màu bên dưới:</Text>
        <View style={styles.boxBtnMau}>
          <TouchableOpacity
            style={styles.btnMau}
            onPress={() => onChangeMau(0)}
          // value={'silver'}
          >
            <View style={styles.mauSilver}></View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnMau}
            onPress={() => onChangeMau(1)}
          // value={'red'}
          >
            <View style={styles.mauRed}></View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnMau}
            onPress={() => onChangeMau(2)}
          // value={'black'}
          >
            <View style={styles.mauBlack}></View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnMau}
            onPress={() => onChangeMau(3)}
          // value={'blue'}
          >
            <View style={styles.mauBlue}></View>
          </TouchableOpacity>
        </View>

        <View style={styles.boxBtnXong}>
          <TouchableOpacity style={styles.btnXong} onPress={() => navigation.navigate('Screen1', {mau,pathImgPhone})}>
            <Text style={styles.txtXong}>Xong</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
}
export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },

  containerInfo: {
    flex: 2,
    width: "95%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10

  },
  boxImgPhone: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  imgPhone: {
    width: 112,
    height: 132,
  },

  boxInfo: {
    flex: 7,
    height: "80%",
    justifyContent: "flex-start"
  },
  txtInfo: {
    fontSize: 16,
    fontWeight: 600
  },

  containerBtnMau: {
    flex: 7,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "#C4C4C4"
  },
  txtChonMau: {
    flex: 1,
    fontSize: 18,
    fontWeight: 600,
    margin: 15,
  },

  boxBtnMau: {
    flex: 7,
    width: "100%",
    // flexDirection:"row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 10
  },
  btnMau: {
    flex: 1
  },
  mauSilver: {
    width: 85,
    height: 80,
    backgroundColor: "#C5F1FB",
  },
  mauRed: {
    width: 85,
    height: 80,
    backgroundColor: "#F30D0D",
  },
  mauBlack: {
    width: 85,
    height: 80,
    backgroundColor: "#000000",
  },
  mauBlue: {
    width: 85,
    height: 80,
    backgroundColor: "#234896",
  },
  boxBtnXong: {
    flex: 1.5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  btnXong: {
    width: "90%",
    height: 45,
    backgroundColor: "#1952E2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderBlockColor: "#CA1536"
  },

});