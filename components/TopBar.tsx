import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";


const TopBar = () => {
    const [minutesSpent, setMinutesSpent] = useState(0);

    useEffect(() => {
        // Start a timer that runs every minute
        const interval = setInterval(() => {
            setMinutesSpent(minutes => minutes + 1);
        }, 60000);

        // Clean up the interval on unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topRow}>
                <View style={styles.timerWrapper}>
                    <MaterialIcons name="timer" size={24} color="#FFFFFF99" />
                    <Text style={styles.timer}>{minutesSpent}m</Text>
                </View>
                <View style={styles.forYouWrapper}>
                    <Text style={styles.forYouText}>For You</Text>
                    <View style={styles.whiteUnderline} />
                </View>
                <View style={styles.searchIcon}>
                    <Ionicons name="search" size={24} color="white" />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        width: '100%',
        zIndex: 999,
        position: 'absolute',
    },
    topRow: {
        display: 'flex',
        flexDirection: 'row',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    timerWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    timer: {
        color: '#FFFFFF99',
        fontSize: 14,
        marginLeft: 5
    },
    forYouWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    forYouText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 22,
    },
    whiteUnderline: {
        height: 4,
        width: 30,
        backgroundColor: 'white',
        marginHorizontal: 'auto',
        marginTop: 5
    },
    searchIcon: {
        flex: 1,
        alignItems: 'flex-end'
    }
});

export default TopBar;