import {useMemo, useState} from "react";
import {Space , Radio, Button, Tooltip, Checkbox, message } from "antd";
import { Quiz } from "../../store/quiz.ts";
import {Form, Typography} from "antd";
import className from "./quiz.module.less";
import {QUESTION_TYPE} from "../../constants";
import {indexToWord} from "../../utils";
import { CountdownTimer } from "../../components/CountdownTimer.tsx";


interface Props {
    quiz: Quiz
}
export const QuizPage = (props: Props) => {
    const { quiz} = props
    const [index, setIndex] = useState(0)
    const [form] = Form.useForm();

    const question = useMemo(() => {
        return quiz.questions[index]
    }, [quiz, index]);

    const prev = () => {
        setIndex(index - 1)
    }

    const next = () => {
        form.validateFields().then(() => {
            setIndex(index + 1)
        })
    }

    const { answers } = form.getFieldsValue(true);
    const canSubmit = !!answers?.length && answers.every((item: number | number[]) => item !== null)

    console.log(canSubmit, answers);

    const handleFail = () => {
        message.error('Timeout')
    }

    return <>
        <Typography.Title level={2} >{quiz.title}</Typography.Title>
        <div className={className.container}>
            <div className={className.action}>
                <Space size={16}>
                    <Tooltip title="Prev Question">
                        <Button disabled={index == 0} onClick={prev}>PREV</Button>
                    </Tooltip>
                    <Tooltip title="Next Question">
                        <Button disabled={index === quiz.questions.length-1} onClick={next}>NEXT</Button>
                    </Tooltip>
                </Space>
                <Space size={16}>
                    <CountdownTimer initialTime={600} onFinish={handleFail}/>
                    <span>Question #{index+1} of {quiz.questions.length}</span>
                </Space>
            </div>
            <Form form={form}>
                <div className={className.questionTile}>
                    <Typography.Title level={4}>{index+1}. {question.question}</Typography.Title>
                </div>
                <Form.List name="answers" initialValue={new Array(quiz.questions.length).fill(null)} >
                    {(fields) => {
                        const field = fields[index]
                        return <Form.Item preserve {...field}
                                          rules={[
                                              {
                                                  required: true,
                                                  message: 'please make your choice'
                                              },
                                          ]}
                        >
                            {
                                question.type === QUESTION_TYPE.SINGLE && <Radio.Group size="large">
                                <Space direction="vertical">
                                    {question.options.map((option, index) => {
                                        return <Radio value={index} key={index}>{indexToWord(index)}. {option}</Radio>
                                    })}
                                </Space>
                              </Radio.Group>
                            }
                            {
                                question.type === QUESTION_TYPE.MULTIPLE && <Checkbox.Group key="MULTIPLE">
                                <Space direction="vertical">
                                    {question.options.map((option, index) => {
                                        return <Checkbox value={index} key={index}>{indexToWord(index)}. {option}</Checkbox>
                                    })}
                                </Space>
                              </Checkbox.Group>
                            }
                        </Form.Item>
                    }}
                </Form.List>
                <div>
                    <Button type="primary" disabled={!canSubmit} size="large">submit</Button>
                </div>
            </Form>
        </div>
    </>
}
