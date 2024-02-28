import {request} from './request.ts'

interface QuizParam {
    course: string
    number: string
    type: 'SINGLE' | 'MULTIPLE' | 'MIXED'
}

export const createQuiz = (data: QuizParam) => {
    console.log(data);
    return request.post('/quiz/create', data)
}

export const getQuiz = (uuid: string) => {
    return request.get(`/quiz/${uuid}`)
}

export const evaluateQuiz = (uuid: string, answer: (number | number[])[]) => {
    return request.post('/quiz/evaluate', {
        uuid,
        answer
    })
}
