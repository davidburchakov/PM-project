import { useState } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import { COLORS, SIZES} from '../../../constants';
import styles from './popularjobs.style'
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useFetch from '../../../hook/useFetch'
import '../../../utils/i18n';
import { useTranslation } from 'react-i18next';

const Popularjobs = () => {
  const { t } = useTranslation();
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
        <Text style={styles.headerTitle}>{t('Popular jobs')}</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>{t('Show all')}</Text>
        </TouchableOpacity>
      </View> 
      <View style={styles.cardsContainer}>
        {isLoading?(
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text style={{color:'red'}}>{t('Something went wrong')}</Text>
        )
         : (<>

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

export default Popularjobs;