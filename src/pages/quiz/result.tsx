import {Checkbox, Divider, Radio, Space, Typography} from "antd";
import {QUESTION_TYPE} from "../../constants";
import {indexToWord} from "../../utils";
import className from "./result.module.less";
import React, { useState } from 'react';
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



    return <>
        <Title level={2}>{quiz.title}</Title>
        <Title level={1}>{score}</Title>
        <Text type="secondary">Great job on your exam!</Text>
        <div>
            <LikeOutlined style={{ fontSize: '24px', marginRight: '8px', cursor: 'pointer' }} />
            <DislikeOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
        </div>

        <br />
        {score >= 90 && (
            <Text type="success">Congratulations! You achieved an outstanding score!</Text>
        )}
        {score < 90 && score >= 70 && (
            <Text type="warning">Well done! You did a good job!</Text>
        )}
        {score < 70 && (
            <Text type="danger">Don't worry! There's always room for improvement. Keep it up!</Text>
        )}
        {
            answers.length && <>
            <Divider />
            <Title level={3}>Incorrect Questions</Title>
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
                                        {question.options.map((option: string, index: number) => {
                                            return <Radio value={index} key={index} className={getAnswer(user[index]) ? className.wrong : ''}>
                                                {indexToWord(index)}. {option}
                                            </Radio>
                                        })}
                                    </Space>
                                  </Radio.Group>
                                }
                                {
                                    question.type === QUESTION_TYPE.MULTIPLE && <Checkbox.Group key={index} value={question.answer as number[]}>
                                    <Space direction="vertical">
                                        {question.options.map((option: string, index: number) => {
                                            return <Checkbox value={index} key={index} className={
                                                (user[index] as number[]).includes(index) ? className.wrong : ''
                                            }>{indexToWord(index)}. {option}</Checkbox>
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
