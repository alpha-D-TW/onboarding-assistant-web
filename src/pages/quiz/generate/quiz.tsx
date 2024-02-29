import {Button, Checkbox, message, Radio, Space, Typography} from "antd";
import {QUESTION_TYPE} from "../../../constants";
import {indexToWord} from "../../../utils";
import className from "./quiz.module.less";
import LikeButton from "../../../components/Like.tsx";
import {CopyOutlined} from "@ant-design/icons";
import copy from 'copy-to-clipboard';

interface Props {
    quiz: Quiz
    uuid: string
    onResult: (result: QuizResult) => void
}

export const QuizPage = (props: Props) => {
    const { quiz} = props


    const handleCopy = () => {
        const base = location.origin;
        const url  = `${base}/user/quiz/${quiz.id}`
        copy(url);
        message.success('Quiz url has been successfully copied!')
    }

    return <>
        <Space size={24}>
            <Typography.Title level={2} className={className.title}>{quiz.title}</Typography.Title>
            <Button onClick={handleCopy}>
                <CopyOutlined /> Share
            </Button>
        </Space>
        <div className={className.container}>
            {
                (quiz.questions || []).map((question, index) => {
                    return <div className={className.item} key={index}>
                        <div className={className.questionTile}>
                            <Typography.Title level={4}>{index+1}. {question.question}</Typography.Title>
                        </div>
                        <div>
                            {
                                question.type === QUESTION_TYPE.SINGLE && <Radio.Group value={''}>
                                <Space direction="vertical">
                                    {question.options.map((option: string, index: number) => {
                                        return <Radio value={index} key={index}>{indexToWord(index)}. {option}</Radio>
                                    })}
                                </Space>
                              </Radio.Group>
                            }
                            {
                                question.type === QUESTION_TYPE.MULTIPLE && <Checkbox.Group key="MULTIPLE" value={[]}>
                                <Space direction="vertical">
                                    {question.options.map((option: string, index: number) => {
                                        return <Checkbox value={index} key={index}>{indexToWord(index)}. {option}</Checkbox>
                                    })}
                                </Space>
                              </Checkbox.Group>
                            }
                        </div>
                        <LikeButton className={className.like} />
                    </div>
                })
            }
        </div>
    </>
}
