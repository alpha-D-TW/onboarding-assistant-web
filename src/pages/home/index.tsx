import {useState} from "react";
import { Button, Typography} from 'antd'
import Robot from '../../assets/robot.svg'
import className from './index.module.less'
import { QuizModel } from './modal.tsx'
function Home() {
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
       <div className={className.container}>
           <Typography.Title level={3}>Ready to explore AI? Let's start generate Quiz.</Typography.Title>
           <Typography.Text type="secondary">We helped great team write their success stories. Join now. Choose professional online assessment tool.</Typography.Text>
           <div className={className.content}>
               <Button className={className.button} size="large" onClick={showModal}>
                   <img src={Robot}/>
                   START Generate
               </Button>
           </div>
           <QuizModel open={open} onCancel={handleCancel} />
       </div>
    )
}

export default Home
