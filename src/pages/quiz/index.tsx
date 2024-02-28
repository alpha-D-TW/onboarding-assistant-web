import {useParams} from "react-router-dom";
import {useMemo, useState} from "react";
import { Spin } from "antd";
import className from "./index.module.less";
import { QuizPage } from "./quiz.tsx";
import {useRequest} from "ahooks";
import {getQuiz} from "../../apis/quiz.ts";
import { QuizResult } from "./result.tsx";

const Quiz = () => {
    const params = useParams()
    const [result, setResult] = useState<QuizResult>()
    const id = params.id as string

    const {data, loading} = useRequest(() => {
        return getQuiz(id)
    })

    const quiz = useMemo(() => {
        return data?.data
    }, [
        data, id
    ]);

    const handleResult = (data: QuizResult) => {
        setResult(data)
    }

    return <div className={className.container}>
        <Spin spinning={loading}>
            { !result && !!quiz && <QuizPage quiz={quiz} uuid={id} onResult={handleResult}></QuizPage>}
            { result && !!quiz &&  <QuizResult quiz={quiz} result={result}></QuizResult>}
        </Spin>
    </div>

}

export default Quiz
