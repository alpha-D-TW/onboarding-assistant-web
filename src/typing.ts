
declare interface QuizQuestion {
    type: 'SINGLE' | 'MULTIPLE'
    question: string
    options: string[]
    answer?: number | number[]
}
declare interface Quiz {
    id: string
    title: string
    limit: number
    questions: QuizQuestion[]
}

declare  interface QuizResult {
    score: number
    answers: QuizQuestion[]
}
