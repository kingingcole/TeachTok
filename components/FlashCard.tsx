import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { QuestionWithAnswer } from '../models/Question';
import ActionBar from './ActionBar';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';

interface FlashCardProps {
    question: QuestionWithAnswer
}

const FlashCard = ({ question }: FlashCardProps) => {
    return (
        <ImageBackground style={styles.container} source={{ uri: question.image }}>
            {/* Multiple choice section */}
            <View style={styles.multipleChoiceWrapper}>
                <View style={{ width: '80%' }}>
                    <MultipleChoiceQuestion question={question} />
                </View>
                <ActionBar user={question.user} />
            </View>

            {/* playlist section */}
            <View style={styles.playlistInfoWrapper}>
                <View style={{flexDirection: 'row'}}>
                    <MaterialIcons name="video-collection" size={20} color="white" />
                    <Text style={styles.playlistTitle}>Playlist • {question.playlist}</Text>
                </View>
                <MaterialIcons name="chevron-right" size={24} color="white" />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 120, // for top bar
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
    },
    multipleChoiceWrapper: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 16,
        marginBottom: 16,
    },
    playlistInfoWrapper: {
        backgroundColor: '#161616',
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    playlistTitle: {
        color: 'white',
        marginLeft: 4,
        fontSize: 13,
        fontWeight: '600'
    }
});

export default FlashCard;
