import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Bars3CenterLeftIcon, MagnifyingGlassCircleIcon } from 'react-native-heroicons/outline';
import { styles } from '../theme';
import TrendingMovies from '../component/trendingmovies';

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-neutral-800">
        {/* SearchBar and logo */}
     <SafeAreaView className="mb-3">
            <StatusBar style="light" />
            <View className="flex-row justify-between items-center mx-3">
                
                <Bars3CenterLeftIcon size={24} strokeWidth={2} color="white" />
                <Text className="text-white text-lg font-bold"> <Text style={styles.text}>M</Text>ovies</Text>
                <TouchableOpacity>
                    <MagnifyingGlassCircleIcon size={24} strokeWidth={2} color="white" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}
        >
        {/* Trending movies carousel */}
        <TrendingMovies /> 
        </ScrollView>

        
    </View>
  )
}

export default HomeScreen