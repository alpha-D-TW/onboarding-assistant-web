import {Divider, Form, Modal, Select, Typography} from "antd";
import queryString from "query-string";
import {useNavigate} from "react-router-dom";
interface Props {
    open: boolean
    onCancel?: () => void
}
export const QuizModel = (props: Props) => {
    const {open, onCancel } = props
    const [form] = Form.useForm()
    const navigate = useNavigate()

    const handleOk = () => {
        form.validateFields().then(async (value) => {
            const url = '/quiz/generate'
            navigate(`${url}?${queryString.stringify(value)}`)
        }).finally(() => {
        })
    };


    return  <Modal
        title="问卷生成"
        open={open}
        onOk={handleOk}
        onCancel={onCancel}
        maskClosable={false}
        keyboard={false}
    >
        <Typography.Text type="secondary">我们一起探索知识的深度吧</Typography.Text>
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
                difficulty: 'Middle',
                number: 10,
            }}
            form={form}
        >
            <Form.Item
                label="课程"
                name="course"
                rules={[
                    {required: true}
                ]}
            >
                <Select
                    options={[
                        {value: 'java_development', label: 'JAVA 代码规范'},
                        {value: 'endpoint_security', label: '终端安全规范'}
                    ]}
                />
            </Form.Item>
                        <Form.Item
                            label="难度"
                            name="difficulty"
                            rules={[
                                {required: true}
                            ]}
                        >
                            <Select
                                options={[
                                    {value: 'simple', label: '简单'},
                                    {value: 'middle', label: '中等'},
                                    {value: 'difficult', label: '困难'},
                                ]}
                            />
                        </Form.Item>
            <Form.Item
                label="问题类型"
                name="type"
                rules={[
                    {required: true}
                ]}
            >
                <Select
                    options={[
                        {value: 'SINGLE', label: '单选'},
                        {value: 'MULTIPLE', label: '多选'},
                        {value: 'MIXED', label: '混合'},
                    ]}
                />
            </Form.Item>
            <Form.Item
                label="问题数量"
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
