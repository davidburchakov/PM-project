import { Text, View, SafeAreaView, ScrollView,
ActivityIndicator, RefreshControl } from 'react-native';
import { Stack, useRouter, useGlobalSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';
import { Company, JobAbout, JobFooter, 
    JobTabs, ScreenHeaderBtn, Specifics } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
import useFetch from '../../hook/useFetch';

const JobDetails = () => {
    const params = useGlobalSearchParams();
    const router = useRouter();

    const { data, isLoading, error, refetch } = useFetch('job-details',{
        job_id: params.id
    })

    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {}

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}> 
            <Stack.Screen
            options={{
                headerStyle: { backgroundColor: COLORS.gray},
                headerShadowVisible: true,
                headerBackVisible: true,
                headerRight: () => (
                    <ScreenHeaderBtn
                        iconUrl={icons.share}
                        dimension="60%"
                        // handlePress={() => router.back()}
                    />
                    ),
                headerTitle: ''

            }}/>

        <>
            <ScrollView showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={refreshing}
                onRefresh={onRefresh} />}>

            </ScrollView>
        </>

            
        </SafeAreaView>
    )
}

export default JobDetails