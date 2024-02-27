import {atom} from "recoil";

interface QuizQuestion {
    type: 'SIGNLE' | 'MULTIPLE'
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
        '1113jshyn12k3-123123ss1-222': {
            id: '1113jshyn12k3-123123ss1-222',
            title: 'Java Development',
            limit: 1000 * 60 * 10,
            questions: [
                {
                    type: 'SIGNLE',
                    question: 'Which programming language is used for Java development?',
                    options: [
                        'Java',
                        'C++',
                        'Python',
                    ]
                },
                {
                    type: 'MULTIPLE',
                    question: 'Which features are related to Java development?',
                    options: [
                        'Object Oriented Programming',
                        'Object Oriented Programming',
                        'Garbage Collection',
                        'Static Typing',
                    ]
                }
            ]
        }
    },
});
