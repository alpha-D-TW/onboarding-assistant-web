import {useMemo, useState} from "react";
import {Space , Radio, Button, Tooltip, Checkbox } from "antd";
import { Quiz } from "../../store/quiz.ts";
import {Form, Typography} from "antd";
import className from "./quiz.module.less";
import {QUESTION_TYPE} from "../../constants";
import {indexToWord} from "../../utils";


interface Props {
    quiz: Quiz
}
export const QuizPage = (props: Props) => {
    const { quiz} = props

    const [index, setIndex] = useState(0)

    const question = useMemo(() => {
        return quiz.questions[index]
    }, [quiz, index]);

    const prev = () => {
        setIndex(index - 1)
    }

    const next = () => {
        setIndex(index + 1)
    }

    return <>
        <Typography.Title level={2} >{quiz.title}</Typography.Title>
        <div className={className.container}>
            <div className={className.action}>
                <Space>
                    <Tooltip title="Prev Question">
                        <Button disabled={index == 0} onClick={prev}>&lt;</Button>
                    </Tooltip>
                    <Tooltip title="Next Question">
                        <Button disabled={index === quiz.questions.length-1} onClick={next}>&gt;</Button>
                    </Tooltip>
                </Space>
                <div>Question #{index+1} of {quiz.questions.length}</div>
            </div>
            <Form>
               <Typography.Title level={4}>{index+1}. {question.question}</Typography.Title>
                {
                    question.type === QUESTION_TYPE.SIGNLE &&
                    <Radio.Group size="large">
                      <Space direction="vertical">
                          {question.options.map((option, index) => {
                              return <Radio value={index}>{indexToWord(index)}. {option}</Radio>
                          })}
                      </Space>
                    </Radio.Group>
                }
                {
                    question.type === QUESTION_TYPE.MULTIPLE &&
                      <Checkbox.Group >
                        <Space direction="vertical">
                            {question.options.map((option, index) => {
                                return <Checkbox value={index}>{indexToWord(index)}. {option}</Checkbox>
                            })}
                        </Space>
                      </Checkbox.Group>
                }
            </Form>
        </div>
    </>
}
