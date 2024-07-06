import React, { useState } from 'react';
import { Alert, Linking, StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Layout from '../Layout';
import Style from '../Style';
import { AppButtonPrimary } from '../../components/AppButton';
import ResultListMitra from '../../partials/ResultListMitra';

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const MakeOrder = () => {
  // const [value, setValue] = useState(null);
  const [province, setProvince] = useState(null);
  const [regency, setRegency] = useState(null);
  const [district, setDistrict] = useState(null);
  const [village, setVillage] = useState(null);
  // const [isFocus, setIsFocus] = useState(false);
  const [isFocusProvince, setIsFocusProvince] = useState(false);
  const [isFocusRegency, setIsFocusRegency] = useState(false);
  const [isFocusDistrict, setIsFocusDistrict] = useState(false);
  const [isFocusVillage, setIsFocusVillage] = useState(false);

  const renderLabelProvince = () => {
    if (province || isFocusProvince) {
      return (
        <Text style={[styles.label, isFocusProvince && { color: 'blue' }]}>
          Pilih Provinsi
        </Text>
      );
    }
    return null;
  };

  const renderLabelRegency = () => {
    if (regency || isFocusRegency) {
      return (
        <Text style={[styles.label, isFocusRegency && { color: 'blue' }]}>
          Pilih Kota / Kabupaten
        </Text>
      );
    }
    return null;
  };

  const renderLabelDistrict = () => {
    if (district || isFocusDistrict) {
      return (
        <Text style={[styles.label, isFocusDistrict && { color: 'blue' }]}>
          Pilih Kecamatan
        </Text>
      );
    }
    return null;
  };

  const renderLabelVillage = () => {
    if (village || isFocusVillage) {
      return (
        <Text style={[styles.label, isFocusVillage && { color: 'blue' }]}>
          Pilih Kelurahan
        </Text>
      );
    }
    return null;
  };

  return (
    <Layout>
      {/* <Text style={[Style.GemunuLibreRegular, { width: '90%', fontSize: 22 }]}>Pilih lokasi :</Text> */}
      <View style={{ width: '90%', marginTop: 10 }}>
        {/* {renderLabelProvince()} */}
        <Dropdown
          style={[styles.dropdown, isFocusProvince && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocusProvince ? 'Pilih Provinsi' : '...'}
          searchPlaceholder="Provinsi..."
          value={province}
          onFocus={() => setIsFocusProvince(true)}
          onBlur={() => setIsFocusProvince(false)}
          onChange={item => {
            setProvince(item.value);
            setIsFocusProvince(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocusProvince ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />


        {/* {renderLabelRegency()} */}
        <Dropdown
          style={[styles.dropdown, isFocusRegency && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocusRegency ? 'Pilih Kota/Kabupaten' : '...'}
          searchPlaceholder="Kota/Kab..."
          value={regency}
          onFocus={() => setIsFocusRegency(true)}
          onBlur={() => setIsFocusRegency(false)}
          onChange={item => {
            setRegency(item.value);
            setIsFocusRegency(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocusRegency ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />


        {/* {renderLabelDistrict()} */}
        <Dropdown
          style={[styles.dropdown, isFocusDistrict && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocusDistrict ? 'Pilih Kecamatan' : '...'}
          searchPlaceholder="Kecamatan..."
          value={district}
          onFocus={() => setIsFocusDistrict(true)}
          onBlur={() => setIsFocusDistrict(false)}
          onChange={item => {
            setDistrict(item.value);
            setIsFocusDistrict(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocusDistrict ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />

        {/* {renderLabelVillage()} */}
        <Dropdown
          style={[styles.dropdown, isFocusVillage && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocusVillage ? 'Pilih Kelurahan/Desa' : '...'}
          searchPlaceholder="Kelurahan/Desa..."
          value={village}
          onFocus={() => setIsFocusVillage(true)}
          onBlur={() => setIsFocusVillage(false)}
          onChange={item => {
            setVillage(item.value);
            setIsFocusVillage(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocusVillage ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
      </View>
      <View style={{ width: '90%', marginTop: 20 }}>
        <AppButtonPrimary buttonText='Cari...' onPress={() => Alert.alert('Cari dong..!!')} />
      </View>
      <View style={{ width: '90%', marginTop: 20, }}>
        <Text style={[Style.GemunuLibreRegular, Style.textColPrimary, { fontSize: 22 }]}>List Mitra</Text>
        <ResultListMitra name='Mahmud Salam' rating={4.5} contact='+6289022353637' address='Kolong meja' />
        <ResultListMitra name='Simone Alam' rating={5.0} contact='+6289055231234' address='Kolong jembatan' />
        <ResultListMitra name='Son Goku' rating={4.7} contact='089022353637' address='Kolong bangku' />
        <ResultListMitra name='Maling Sendal Masjid' rating={4.9} contact='089022353637' address='Kolong tempat tidur' />
        <ResultListMitra name='Lumut Asri' rating={4.4} contact='089022353637' address='Kolong ijo' />
      </View>

    </Layout>
  );
};

export default MakeOrder;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderBottomWidth: 0.5,
    // borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 18,
    fontFamily: 'GemunuLibre-Regular',
  },
  selectedTextStyle: {
    fontSize: 18,
    fontFamily: 'GemunuLibre-Regular',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 18,
    fontFamily: 'GemunuLibre-Regular',
  },
});