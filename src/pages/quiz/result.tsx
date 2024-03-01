import {Checkbox, Divider, Radio, Space, Typography} from "antd";
import {QUESTION_TYPE} from "../../constants";
import {indexToWord} from "../../utils";
import className from "./result.module.less";
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';

interface Props {
    result: QuizResult
    quiz: Quiz
}

const { Title, Text } = Typography;


const getAnswer = (value: number | number[]) => {
    return Array.isArray(value) ? value[0] : value
}


export const QuizResult = (props: Props) => {
    const { quiz, result } = props
    const {score, answers, user } = result

    console.log(user);

    const isUserSelect = (questionIndex: number, optionIndex: number) => {
        const userSelect = user[questionIndex]
        return Array.isArray(userSelect) ? userSelect.includes(optionIndex) : userSelect == optionIndex
    }

    return <>
        <Title level={2}>{quiz.title}</Title>
        <Title level={1}>{score}</Title>
        <Text type="secondary">你的考试成绩</Text>
        <div>
            <LikeOutlined style={{ fontSize: '24px', marginRight: '8px', cursor: 'pointer' }} />
            <DislikeOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
        </div>

        <br />
        {score >= 90 && (
            <Text type="success">恭喜！ 你取得了优异的成绩！</Text>
        )}
        {score < 90 && score >= 70 && (
            <Text type="warning">做得好！ 你做得好！</Text>
        )}
        {score < 70 && (
            <Text type="danger">不用担心！ 总是有改进的空间。 继续努力吧！</Text>
        )}
        {
            answers.length && <>
            <Divider />
            <Title level={3}>错误问题集</Title>
            <div className={className.container}>
                {
                    result.answers.map((question: QuizQuestion, index) => {
                        return (
                            <div className={className.item}>
                                <Divider />
                                <Title level={3}>{question.question}</Title>
                                {
                                    question.type === QUESTION_TYPE.SINGLE && <Radio.Group key={index} value={getAnswer(question.answer)}>
                                    <Space direction="vertical">
                                        {question.options.map((option: string, optionIndex: number) => {
                                            return <Radio value={optionIndex} key={optionIndex} className={isUserSelect(index, optionIndex) ? className.wrong : ''}>
                                                {indexToWord(optionIndex)}. {option}
                                            </Radio>
                                        })}
                                    </Space>
                                  </Radio.Group>
                                }
                                {
                                    question.type === QUESTION_TYPE.MULTIPLE && <Checkbox.Group key={index} value={question.answer as number[]}>
                                    <Space direction="vertical">
                                        {question.options.map((option: string, optionIndex: number) => {
                                            return <Checkbox value={optionIndex} key={optionIndex} className={isUserSelect(index, optionIndex) ? className.wrong : ''}>{indexToWord(index)}. {option}</Checkbox>
                                        })}
                                    </Space>
                                  </Checkbox.Group>
                                }
                            </div>

                        )
                    })
                }
            </div>

          </>
        }
    </>
}
