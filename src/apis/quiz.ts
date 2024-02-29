import {request} from './request.ts'

export interface QuizParam {
    course: string
    difficulty:string
    type: 'SINGLE' | 'MULTIPLE' | 'MIXED'
    number: string
}

export const createQuiz = (data: QuizParam) => {
    console.log(data);
    return request.post<Quiz>('/quiz/create', data).then((res) => res.data)
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
