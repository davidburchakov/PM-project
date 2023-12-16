import { useState } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import { COLORS, SIZES} from '../../../constants';
import styles from './popularbooks.style'
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useFetch from '../../../hook/useFetch'

const Popularbooks = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch('search', {
    query: 'React developer',
    num_pages: 1
  })

  const [selectedJob, setSelectedJob] = useState();
  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id)
  }  
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
        )
         : (<>

          {/* <Text>Not error</Text>  */}
            <FlatList
              data={data}
              renderItem={({item}) => (
                <PopularJobCard
                  item={item}
                  selectedJob={selectedJob}
                  handleCardPress={handleCardPress}
                />
              )}
              keyExtractor={item => item?.job_id}
              contentContainerStyle={{ columnGpa: SIZES.medium}}
              horizontal  
            />
            </>
        )}
      </View>
    </View>
  )
}

export default Popularbooks