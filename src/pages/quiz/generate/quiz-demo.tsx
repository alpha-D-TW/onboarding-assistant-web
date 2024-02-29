import {useEffect} from "react";
import {Spin} from "antd";
import {useRequest} from "ahooks";
import {createQuiz, QuizParam} from "../../../apis/quiz.ts";
import { QuizPage } from "./quiz.tsx";

interface Props {
    option: QuizParam
}

export const QuizDemo = (props: Props) => {
    const { option} = props

    const { loading , runAsync, data } = useRequest(createQuiz, {
        manual: true,
    });


    useEffect(() => {
        if(option) {
            runAsync(option)
        }
    }, []);

    return <div>
        <Spin spinning={loading}  tip="Gerenating" style={{minHeight: '100px'}}>
            {!!data && <QuizPage quiz={data}></QuizPage>}
        </Spin>
    </div>
}
