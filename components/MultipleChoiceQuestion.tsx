import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { QuestionOption, QuestionWithAnswer } from '../models/Question';

interface MultipleChoiceQuestionProps {
    question: QuestionWithAnswer
}

const MultipleChoiceQuestion = ({ question: questionWithAnswer }: MultipleChoiceQuestionProps) => {
    const { answer, options, question, user, description } = questionWithAnswer;
    console.log('answer', answer);

    const [userAnswer, setUserAnswer] = React.useState<QuestionOption | null>(null);

    const renderThumbIcon = (option: QuestionOption) => {
        if (!userAnswer) return null;

        if (answer.id === option.id && userAnswer.id === answer.id) {
            return <Ionicons name="thumbs-up-sharp" size={24} color="#27ae60" />
        }

        if (userAnswer && userAnswer.id === option.id) {
            return <Ionicons name="thumbs-down-sharp" size={24} color="red" />;
        }
    }

    const answerQuestion = (option: QuestionOption) => {
        if (userAnswer) return;

        setUserAnswer(option);
    }

    return (
        <View style={styles.container}>
            <View style={styles.textBackground}>
                <Text style={styles.question}>{question}</Text>
            </View>
            <View>
                <View style={styles.optionsWrapper}>
                    {options.map(option => {
                        const getBgColor = () => {
                            if (userAnswer && answer.id === option.id) return { backgroundColor: '#27ae6080' };

                            if (userAnswer && userAnswer.id === option.id) {
                                return { backgroundColor: '#e74c3c80' };
                            }

                            return { backgroundColor: '#FFFFFF80' }
                        }

                        return (
                            <Pressable onPress={() => answerQuestion(option)} style={[styles.option, getBgColor()]} key={option.id}>
                                <Text style={styles.optionText}>{option.answer}</Text>
                                {renderThumbIcon(option)}
                            </Pressable>
                        )
                    })}
                </View>

                <View style={styles.metaWrapper}>
                    <Text style={styles.user}>{user.name}</Text>
                    <Text style={styles.title}>{description}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        justifyContent: 'space-between',
    },
    textBackground: {
        backgroundColor: '#1F1F1F80',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
    },
    question: {
        color: 'white',
        fontSize: 22,
        fontWeight: '500',
        lineHeight: 32,
        padding: 6,
        width: '90%'
    },
    optionsWrapper: {

    },
    option: {
        padding: 12,
        marginBottom: 8,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    optionText: {
        color: 'white',
        fontSize: 17,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1.5 },
        shadowRadius: 2,
        shadowOpacity: 0.5,
        fontWeight: '500',
        flex: 1
    },
    metaWrapper: {
        marginTop: 24
    },
    user: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600'
    },
    title: {
        color: 'white',
        fontSize: 13,
        fontWeight: '400',
        marginTop: 6
    }
})

export default MultipleChoiceQuestion;