import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './popularjobcard.style'
import { checkImageURL } from '../../../../utils'
const PopularJobCard = ({ item, selectedJob, handleCardPress}) => {
  console.log("Item: ", item)
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{ uri: checkImageURL(item.employer_logo) ? item.employer_logo : 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA5L2pvYjk2MC0xMzgtcC5wbmc.png'}}
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