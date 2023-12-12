import { QuestionOption } from "./Question";

interface Answer {
    correct_options: QuestionOption[],
    id: number
}

export default Answer;