import {useMemo, useState} from "react";
import {Button, Checkbox, Form, message, Radio, Space, Tooltip, Typography} from "antd";
import {Quiz} from "../../store/quiz.ts";
import className from "./quiz.module.less";
import {QUESTION_TYPE, QUESTION_TYPE_LABELS} from "../../constants";
import {indexToWord} from "../../utils";
import {CountdownTimer} from "../../components/CountdownTimer.tsx";
import {useRequest} from "ahooks";
import { evaluateQuiz } from "../../apis/quiz.ts";
import {useNavigate} from "react-router-dom";


interface Props {
    quiz: Quiz
    uuid: string
    onResult: (result: QuizResult) => void
}

interface FormValue {
    answers: (number | number[])[]
}
export const QuizPage = (props: Props) => {
    const { quiz} = props
    const [index, setIndex] = useState(0)
    const [canSubmit, setCanSubmit] = useState(false)
    const [form] = Form.useForm<FormValue>();
    const navigate = useNavigate()

    const { loading , runAsync } = useRequest(evaluateQuiz, {
        manual: true,
    });

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


    const handleFail = () => {
        message.error('Timeout')
        navigate(`/`)
    }

    const onValuesChange = () =>{
        const { answers } = form.getFieldsValue(true);
        setCanSubmit(
            !!answers?.length && answers.every((item: number | number[]) => item !== null)
        )
    }

    const handleSubmit = async () => {
        const { answers } = form.getFieldsValue();
        const { data } = await runAsync(props.uuid, answers)
        props.onResult({
            ...data,
            user: answers
        })
    }

    return <>
        <Typography.Title level={2} >{quiz.title}</Typography.Title>
        <div className={className.container}>
            <div className={className.action}>
                <Space size={16}>
                    <Tooltip title="上一题">
                        <Button disabled={index == 0} onClick={prev}>上一题</Button>
                    </Tooltip>
                    <Tooltip title="下一题">
                        <Button disabled={index === quiz.questions.length-1} onClick={next}>下一题</Button>
                    </Tooltip>
                </Space>
                <Space size={16}>
                    <CountdownTimer initialTime={600} onFinish={handleFail}/>
                    <span>当前第 {index+1} 题，总共 {quiz.questions.length} 题</span>
                </Space>
            </div>
            <Form form={form} size="large" onValuesChange={onValuesChange}>
                <div className={className.questionTile}>
                    <Typography.Title level={4}>{index+1}. {question.question} [{QUESTION_TYPE_LABELS[question.type as QUESTION_TYPE]}]</Typography.Title>
                </div>
                <Form.List name="answers" initialValue={new Array(quiz.questions.length).fill(null)} >
                    {(fields) => {
                        const field = fields[index]
                        return <Form.Item preserve {...field}
                                          rules={[
                                              {
                                                  required: true,
                                                  message: '请做出你的选择'
                                              },
                                          ]}
                                          shouldUpdate
                        >
                            {
                                question.type === QUESTION_TYPE.SINGLE && <Radio.Group >
                                <Space direction="vertical">
                                    {question.options.map((option: string, index: number) => {
                                        return <Radio value={index} key={index}>{indexToWord(index)}. {option}</Radio>
                                    })}
                                </Space>
                              </Radio.Group>
                            }
                            {
                                question.type === QUESTION_TYPE.MULTIPLE && <Checkbox.Group key="MULTIPLE">
                                <Space direction="vertical">
                                    {question.options.map((option: string, index: number) => {
                                        return <Checkbox value={index} key={index}>{indexToWord(index)}. {option}</Checkbox>
                                    })}
                                </Space>
                              </Checkbox.Group>
                            }
                        </Form.Item>
                    }}
                </Form.List>
                <div className={className.submitAction}>
                    <Button type="primary"
                            loading={loading}
                            disabled={!canSubmit} size="large"
                            onClick={handleSubmit}
                    >提交</Button>
                </div>
            </Form>
        </div>
    </>
}
