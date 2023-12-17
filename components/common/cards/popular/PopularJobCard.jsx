import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './popularjobcard.style'
import { checkImageURL } from '../../../../utils'
const PopularJobCard = ({ item, selectedJob, handleCardPress}) => {
  // console.log("Item: ", item)
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{ uri: checkImageURL(item.employer_logo) ? item.employer_logo : 'https://static.vecteezy.com/system/resources/previews/020/336/735/non_2x/tesla-logo-tesla-icon-transparent-png-free-vector.jpg'}}
          // source={{uri: item.employer_logo}}
          resizeMode="contain"
          style={styles.logoImage}
        />

      </TouchableOpacity>
      <Text
        style={styles.companyName} numberOfLines={1}>
            {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard