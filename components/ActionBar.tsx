import { AntDesign, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { User } from '../models/Question';

interface ActionBarProps {
    user: User
}

const ActionBar = ({ user }: ActionBarProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.actionItem}>
                <Image style={styles.avatar} source={{ uri: user.avatar }} />
                <View style={styles.addIconWrapper}><AntDesign name="pluscircle" size={24} color="green" /></View>
            </View>
            <View style={styles.actionItem}>
                <FontAwesome name="heart" size={24} color="white" />
                <Text style={styles.count}>87</Text>
            </View>
            <View style={styles.actionItem}>
                <FontAwesome name="commenting" size={24} color="white" />
                <Text style={styles.count}>87</Text>
            </View>
            <View style={styles.actionItem}>
                <FontAwesome name="bookmark" size={24} color="white" />
                <Text style={styles.count}>87</Text>
            </View>
            <View style={styles.actionItem}>
                <FontAwesome name="share" size={24} color="white" />
                <Text style={styles.count}>87</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    actionItem: {
        marginTop: 15,
        alignItems: 'center'
    },
    avatar: {
        height: 45,
        width: 45,
        borderRadius: 50,
        marginBottom: -10
    },
    addIconWrapper: {
        backgroundColor: 'white',
        borderRadius: 50
    },
    count: {
        color: 'white',
        fontSize: 12,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 4
    }
})

export default ActionBar;