import { useState } from 'react';

import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import Layout from './_layout'
import { COLORS, icons, images, SIZES } from '../constants/';
import { Nearbyjobs, Popularbooks, ScreenHeaderBtn, Welcome } from '../components'

import Sidebar from './sidebar';
const Home = () => {
    const router = useRouter();
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    return (
        <SafeAreaView style={{ flex:1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroudColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"
                        handlePress={() => setSidebarVisible(true)}
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
                    ),
                    headerTitle: ""
                }}
             />

            <Sidebar 
                isVisible={isSidebarVisible} 
                onClose={() => setSidebarVisible(false)} // Close sidebar
            />

             <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}>
                        <Welcome
                        />
                        <Popularbooks/>
                        {/* <Nearbyjobs/> */}
                </View>
             </ScrollView>
        </SafeAreaView>
    )
}

export default Home;