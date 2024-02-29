import className from './index.module.less'
import {useSearchParams} from "react-router-dom";
import { QuizDemo } from "./quiz-demo.tsx";
import {QuizParam} from "../../../apis/quiz.ts";
const Page = () => {
    const [searchParams] = useSearchParams()

    const course = searchParams.get('course')
    const difficulty = searchParams.get('difficulty')
    const number = searchParams.get('number')
    const type = searchParams.get('type')

    const data = {
        course,
        difficulty,
        number,
        type
    } as QuizParam

    return <div className={className.container}>
        <div className={className.page}>
            <QuizDemo option={data} />
        </div>
        <div className={className.page}>
            <QuizDemo option={data} />
        </div>
    </div>
}

export default Page
