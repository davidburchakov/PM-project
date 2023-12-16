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

const bookTypes = ["Classic", "Science Fiction", "Popular Science"];

const Welcome = () => {
  const router = useRouter();
  const [activeBookType, setActiveBookType] = useState("Classic")
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Hello User!</Text>
        <Text style={styles.userName}>Find your perfect book!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder='What are you looking for?'
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