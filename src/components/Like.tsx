import {useState} from 'react';
import {Button, Space} from 'antd';
import {DislikeOutlined, LikeOutlined} from '@ant-design/icons';

interface Props {
    className?: string | undefined;
}

const LikeButton = (props: Props) => {
    const [isLiked, setIsLiked] = useState<undefined | boolean>(undefined);

    const handleLike = (value: boolean) => {
        setIsLiked(
            value === isLiked ? undefined : value
        )
    };


    return (
        <Space className={props.className} size={8}>
            <Button onClick={() => handleLike(false)} type={isLiked === false ? 'primary' : undefined} size="small">
                <DislikeOutlined />
            </Button>
            <Button onClick={() => handleLike(true)} type={isLiked === true ? 'primary' : undefined} size="small">
                <LikeOutlined />
            </Button>
        </Space>
    );
};

export default LikeButton;
