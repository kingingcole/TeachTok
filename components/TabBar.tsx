import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TAB_BAR_HEIGHT } from '../constants';

const TabBar = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.tabItem}>
                <MaterialIcons name="home" size={24} color="white" />
                <Text style={styles.tabItemText}>Home</Text>
            </View>
            <View style={styles.tabItem}>
                <Ionicons name="compass" size={24} color="#FFFFFF80" />
                <Text style={[styles.tabItemText, styles.tabItemTextDisabled]}>Discover</Text>
            </View>
            <View style={styles.tabItem}>
                <MaterialIcons name="timer" size={24} color="#FFFFFF80" />
                <Text style={[styles.tabItemText, styles.tabItemTextDisabled]}>Activity</Text>
            </View>
            <View style={styles.tabItem}>
                <Ionicons name="bookmark" size={24} color="#FFFFFF80" />
                <Text style={[styles.tabItemText, styles.tabItemTextDisabled]}>Bookmarks</Text>
            </View>
            <View style={styles.tabItem}>
                <FontAwesome name="user-circle-o" size={24} color="#FFFFFF80" />
                <Text style={[styles.tabItemText, styles.tabItemTextDisabled]}>Profile</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: TAB_BAR_HEIGHT,
    },
    tabItem: {
        alignItems: 'center',
    },
    tabItemText: {
        color: 'white',
        fontSize: 10,
        fontWeight: '500',
        marginTop: 3,
    },
    tabItemTextDisabled: {
        color: '#FFFFFF80',
    }
})

export default TabBar;
