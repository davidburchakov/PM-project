import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { icons} from '../constants/';
const Sidebar = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <View style={styles.sidebar}>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Image
            source={icons.close}
            style={{ width:40, height: 40}}
            resizeMode='contain'
        />
      </TouchableOpacity>

      <Text style={styles.menuItem}>Polski</Text>
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
