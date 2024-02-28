import {atom} from "recoil";

interface QuizQuestion {
    type: 'SINGLE' | 'MULTIPLE'
    question: string
    options: string[]
}

export interface Quiz {
    id: string
    title: string
    limit: number
    questions: QuizQuestion[]
}

export const quizState = atom<{
    [key: string]: Quiz
}>({
    key: 'quiz',
    default: {
    },
});
