import {useEffect, useState} from "react";

interface Props {
    initialTime: number,
    onFinish?: () => void
}

export const CountdownTimer = ({ initialTime, onFinish }: Props) => {
    const [time, setTime] = useState(initialTime);
    const [isRed, setIsRed] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => {
                if (prevTime <= 60) {
                    setIsRed(true);
                }
                if (prevTime <= 0) {
                    clearInterval(timer);
                    onFinish?.();
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [onFinish]);

    return (
        <div style={{ color: isRed ? 'red' : 'black' }}>
            {time >= 60 ? `${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, '0')}` : `${time}s`}
        </div>
    );
};
