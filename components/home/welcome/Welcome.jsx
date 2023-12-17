import React, { useState } from 'react'
import {  View,
          Text,
          TextInput,
          TouchableOpacity,
          Image,
          FlatList
          } from 'react-native'
import { useRouter } from 'expo-router';
import styles from './welcome.style'
import { icons, SIZES } from "../../../constants";
import '../../../utils/i18n';
import { useTranslation } from 'react-i18next';

const bookTypes = ["Full-time", "Part-time", "Remote"];

const Welcome = () => {
  const router = useRouter();
  const [activeBookType, setActiveBookType] = useState("Full-time")
  const { t, i18n } = useTranslation();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>{t('Hello User!')}</Text>
        <Text style={styles.userName}>{t('Find your perfect job!')}</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder={t('What are you looking for?')}
          />
        </View>
        <TouchableOpacity>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
            />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
          data={bookTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
                style={styles.tab(activeBookType, item)}
                onPress={() => {
                  setActiveBookType(item);
                  router.push(`/search/${item}`)
                }}>
                
                <Text style={styles.tabText(activeBookType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          horizontal
          />
      </View>

    </View>
  )
}

export default Welcome