export interface QuestionOption {
  id: string
  answer: string
}

export interface User {
  name: string
  avatar: string
}

export interface Question {
  type: string
  id: number
  playlist: string
  description: string
  image: string
  question: string
  options: QuestionOption[]
  user: User
}

export interface QuestionWithAnswer extends Question {
    answer: QuestionOption
}


export default Question;