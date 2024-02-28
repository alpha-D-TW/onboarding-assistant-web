import {atom} from "recoil";
export const quizState = atom<{
    [key: string]: Quiz
}>({
    key: 'quiz',
    default: {
    },
});
