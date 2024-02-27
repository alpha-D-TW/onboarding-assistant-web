interface QuizParam {
    course: string
    number: string
    type: 'SINGLE' | 'MULTIPLE' | 'MIXED'
}

export const createQuiz = (data: QuizParam) => {
    console.log(data);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: {
                    uuid: 111,
                    quizs: []
                }
            })
        }, 5000)
    })
}
