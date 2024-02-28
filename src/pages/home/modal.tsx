import {Divider, Form, Modal, Select, Typography} from "antd";
import { useState } from "react";
import { useRequest } from "ahooks";
import { createQuiz } from "../../apis/quiz.ts";
import {quizState} from "../../store/quiz.ts";
import {useRecoilState} from "recoil";
import {useNavigate} from "react-router-dom";
interface Props {
    open: boolean
    onCancel?: () => void
}
export const QuizModel = (props: Props) => {
    const {open, onCancel } = props
    const [quiz, setQuiz] = useRecoilState(quizState);
    const { loading , runAsync } = useRequest(createQuiz, {
        manual: true,
    });
    const [form] = Form.useForm()
    const navigate = useNavigate()

    const handleOk = () => {
        form.validateFields().then(async (value) => {
            const { data } = await runAsync(value)
            if(data.uuid) {
                setQuiz({
                        ...quiz,
                        [data.uuid]: data,
                    }
                )
                navigate(`/quiz/${data.uuid}`)
            }
        }).finally(() => {
        })
    };


    return  <Modal
        title="Start Today Quiz"
        open={open}
        onOk={handleOk}
        confirmLoading={loading}
        onCancel={onCancel}
        okText={loading ? 'Generating...' : ''}
    >
        <Typography.Text type="secondary">
            Get ready for an exciting journey as we explore the depths of knowledge together. Are you prepared to challenge yourself ?
        </Typography.Text>
        <Divider />
        <Form
            name="basic"
            layout="vertical"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{
                course: 'java_development',
                type: 'MIXED',
                number: 10,
            }}
            form={form}
        >
            <Form.Item
                label="Course"
                name="course"
                rules={[
                    {required: true}
                ]}
            >
                <Select
                    options={[
                        {value: 'java_development', label: 'Java Development'}
                    ]}
                />
            </Form.Item>
            <Form.Item
                label="Question Type"
                name="type"
                rules={[
                    {required: true}
                ]}
            >
                <Select
                    options={[
                        {value: 'SINGLE', label: 'Single Choice'},
                        {value: 'MULTIPLE', label: 'Multiple Choice'},
                        {value: 'MIXED', label: 'Mixed'},
                    ]}
                />
            </Form.Item>
            <Form.Item
                label="Number of Questions"
                name="number"
                rules={[
                    {required: true}
                ]}
            >
                <Select
                    options={[
                        {value: 10, label: '10'},
                        {value: 20, label: '20'},
                    ]}
                />
            </Form.Item>
        </Form>
    </Modal>
}
