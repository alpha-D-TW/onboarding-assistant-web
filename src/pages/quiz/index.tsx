import {useRecoilValue} from "recoil";
import {quizState} from "../../store/quiz.ts";
import {useParams} from "react-router-dom";
import {useMemo} from "react";
import className from "./index.module.less";
import { QuizPage } from "./quiz.tsx";

const Quiz = () => {
    const quizes = useRecoilValue(quizState);
    const params = useParams()
    const id = params.id

    const quiz = useMemo(() => {
        return quizes[id as string]
    }, [id, quizes]);

    console.log(quiz);

    return <div className={className.container}>
        { quiz && <QuizPage quiz={quiz}></QuizPage>}
    </div>

}

export default Quiz
