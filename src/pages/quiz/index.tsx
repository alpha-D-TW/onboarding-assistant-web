import {useParams} from "react-router-dom";
import {useMemo} from "react";
import { Spin } from "antd";
import className from "./index.module.less";
import { QuizPage } from "./quiz.tsx";
import {useRequest} from "ahooks";
import {getQuiz} from "../../apis/quiz.ts";

const Quiz = () => {
    const params = useParams()
    const id = params.id as string

    const {data, loading} = useRequest(() => {
        return getQuiz(id)
    })

    const quiz = useMemo(() => {
        return data?.data
    }, [
        data, id
    ]);

    return <div className={className.container}>
        <Spin spinning={loading}>
            { !!quiz && <QuizPage quiz={quiz} uuid={id}></QuizPage>}
        </Spin>
    </div>

}

export default Quiz
