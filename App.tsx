import { useEffect, useState } from 'react'
import { Dimensions, FlatList, StyleSheet, View } from 'react-native'
import Question, { QuestionWithAnswer } from './models/Question'

import FlashCard from './components/FlashCard'
import TabBar from './components/TabBar'
import TopBar from './components/TopBar'
import { TAB_BAR_HEIGHT } from './constants'
import Answer from './models/Answer'

export default function App() {
  const [questions, setQuestions] = useState<QuestionWithAnswer[]>([])
  const flashCardHeight = Dimensions.get('window').height - TAB_BAR_HEIGHT;

  const fetchNewQuestion = async () => {
    try {
      const questionResponse = await fetch('https://cross-platform.rp.devfactory.com/for_you');
      const question: Question = await questionResponse.json();

      // check if the question has already been fetched
      if (questions.find(q => q.id === question.id)) {
        return fetchNewQuestion();
      }

      // get answer to question
      const answerResponse = await fetch(`https://cross-platform.rp.devfactory.com/reveal?id=${question.id}`);
      const answer: Answer = await answerResponse.json();

      const questionWithAnswer: QuestionWithAnswer = { ...question, answer: answer.correct_options[0] };

      setQuestions([...questions, questionWithAnswer]);
    } catch (error) {
      // handle error properly
      console.error(error);
    }
  }

  useEffect(() => {
    fetchNewQuestion()
  }, [])

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.container}>
        <FlatList
          data={questions}
          renderItem={({ item }) => <View style={{height: flashCardHeight}}><FlashCard question={item} /></View>}
          keyExtractor={(item: QuestionWithAnswer) => item.id.toString()} // duplicate key warnings may arise as the API can return duplicate questions
          snapToAlignment="start"
          decelerationRate={'fast'}
          snapToInterval={flashCardHeight}
          onEndReached={fetchNewQuestion}
          onEndReachedThreshold={0.5}
        />
        <TabBar />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
})
