import React from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import { COLORS, SIZES} from '../../../constants';
import styles from './popularbooks.style'
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Popularbooks = () => {
  const router = useRouter();
  const isLoading = true;
  const error = false;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular books</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View> 
      <View style={styles.cardsContainer}>
        {isLoading?(
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text style={{color:'red'}}>Something went wrong</Text>
        ) : (
            <FlatList
            />
        )}
      </View>
    </View>
  )
}

export default Popularbooks