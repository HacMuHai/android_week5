import React, { useState,useEffect,useContext } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { DataContext } from "./DataContext";


export default function App({ navigation, route }) {
  const [pathImgPhone, setPathImgPhone] = useState(route.params || require('../assets/vs_black.png'));
  const dataPhone = useContext(DataContext)



  useEffect(()=>{
    setPathImgPhone(route.params || require('../assets/vs_black.png'))
  },[route.params])
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          style={styles.imgPhone}
          // source={require('../assets/vs_black.png')}
          source={pathImgPhone}
        />
      </View>
      <View style={styles.containerInfo}>
        {/* <Text style={styles.txtName}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text> */}
        <Text style={styles.txtName}>{dataPhone.name}</Text>
        <View style={styles.boxDanhGia}>
          <View style={styles.boxStar}>
            <Image
              style={styles.imgStar}
              source={require('../assets/star.png')}
            />
            <Image
              style={styles.imgStar}
              source={require('../assets/star.png')}
            />
            <Image
              style={styles.imgStar}
              source={require('../assets/star.png')}
            />
            <Image
              style={styles.imgStar}
              source={require('../assets/star.png')}
            />
            <Image
              style={styles.imgStar}
              source={require('../assets/star.png')}
            />
          </View>
          <Text style={styles.txtSLDanhGia}>(Xem {dataPhone.soDanhGia} đánh giá)</Text>
        </View>
        <View style={styles.boxPrice}>
          <Text style={styles.txtGiaBan}>{dataPhone.priceAct.toLocaleString('de-DE')} đ</Text>
          <Text style={styles.txtGiaGoc}>{dataPhone.price.toLocaleString('de-DE')} đ</Text>
        </View>
        <View style={styles.boxHoanTien}>
          <Text style={styles.txtHoanTien}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <TouchableOpacity style={styles.btnChamHoi}>
            <Image
              style={styles.imgChamHoi}
              source={require('../assets/chamHoi.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.containerBtn}>
        <TouchableOpacity style={styles.btnChuyenMau} onPress={() => navigation.push('Screen2', pathImgPhone)}>
          <Text style={styles.txtChuyenMau}>4 MÀU-CHỌN MÀU</Text>
          <Image
            style={styles.imgPass}
            source={require('../assets/pass.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnChonMua}>
          <Text style={styles.txtChonMua}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}
// export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  //Img phone
  containerImg: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgPhone: {
    width: "100%",
    height: "100%",
    resizeMode: 'contain'
  },


  //Info
  containerInfo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // width:"90%"
    gap: 15
  },
  txtName: {
    flex: 1,
    width: "90%",
    fontSize: 16,
    fontWeight: 400
  },
  boxDanhGia: {
    flex: 1,
    width: "90%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20
  },
  boxStar: {
    flex: 4,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  imgStar: {
    width: 28,
    height: 28,
    resizeMode: 'contain'
  },

  txtSLDanhGia: {
    flex: 6,
    fontSize: 16,
    fontWeight: 400
  },

  boxPrice: {
    flex: 1,
    width: "90%",
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 30
  },

  txtGiaBan: {
    // width:"30%",
    fontSize: 24,
    fontWeight: 700
  },
  txtGiaGoc: {
    // width:"30%",
    fontSize: 16,
    fontWeight: 500,
    textDecorationLine: 'line-through'
  },

  boxHoanTien: {
    flex: 1,
    width: "90%",
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 15
  },
  txtHoanTien: {
    fontSize: 14,
    fontWeight: 700,
    color: "red"
  },
  imgChamHoi: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },

  //button
  containerBtn: {
    position: "relative",
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
    // width:"90%",
  },
  btnChuyenMau: {
    // flex:4,
    height: 40,
    width: "90%",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
  },
  txtChuyenMau: {
    fontSize: 16,
    fontWeight: 500,
  },
  imgPass: {
    position: "absolute",
    right: 10,
    width: 15,
    height: 20,
    resizeMode: 'contain'
  },
  btnChonMua: {
    // flex:4,
    height: 40,
    width: "90%",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: "red"
  },
  txtChonMua: {
    fontSize: 18,
    fontWeight: 600,
    color: "white"
  }
});