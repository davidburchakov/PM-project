import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style';
import { icons } from '../../../constants';
import { checkImageURL } from '../../../utils';

const Company = ({companyLogo, jobTitle, companyName, location}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURL(companyLogo)
            ? companyLogo
            : "https://static.vecteezy.com/system/resources/previews/020/336/735/non_2x/tesla-logo-tesla-icon-transparent-png-free-vector.jpg"
          }}
          style={styles.logoImage}
        />
      </View>
      <View>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
          <Text style={styles.companyName}>{companyName} / </Text>
          <View style={styles.locationBox}>
            <Image
            source={icons.location}
            resizeMode='contain'
            style={styles.locationImage}
            />
            <Text style={styles.locationName}>{location}</Text>
          </View>
      </View>
    </View>
  )
}

export default Company