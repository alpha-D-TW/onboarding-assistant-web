import {useState} from "react";
import {Breadcrumb, Button, theme, Typography} from 'antd'
import Robot from '../../assets/robot.svg'
import className from './index.module.less'
import {QuizModel} from './modal.tsx'

function Home() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Quiz</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
            </Breadcrumb>
            <div
                style={{
                    padding: 24,
                    minHeight: 360,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                <div className={className.container}>
                    <Typography.Title level={3}>Ready to explore AI? Let's start generate Quiz.</Typography.Title>
                    <Typography.Text type="secondary">We helped great team write their success stories. Join now. Choose
                        professional online assessment tool.</Typography.Text>
                    <div className={className.content}>
                        <Button className={className.button} size="large" onClick={showModal}>
                            <img src={Robot}/>
                            START GENERATE
                        </Button>
                    </div>
                    <QuizModel open={open} onCancel={handleCancel}/>
                </div>
            </div>
        </>
    )
}

export default Home
