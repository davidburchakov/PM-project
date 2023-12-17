import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { icons} from '../constants/';
import '../utils/i18n';
import { useTranslation } from 'react-i18next';

const Sidebar = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  const { t, i18n } = useTranslation();
  
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <View style={styles.sidebar}>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Image
            source={icons.close}
            style={{ width:40, height: 40}}
            resizeMode='contain'
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleLanguageChange('en')} style={styles.languageItem}>
        <Text style={styles.menuItem}>English</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleLanguageChange('pl')} style={styles.languageItem}>
        <Text style={styles.menuItem}>Polski</Text>
      </TouchableOpacity>
      <Text>{t('welcome')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '60%',
    backgroundColor: 'white',
    padding: 20,
    zIndex: 1000, 
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  menuItem: {
    fontSize: 18,
    marginBottom: 10,
  }
});

export default Sidebar;
