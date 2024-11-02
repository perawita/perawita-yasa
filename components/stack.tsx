import React from 'react';
import styles from '@/styles/stack.module.css'; // Mengimpor file CSS modular

type StackProps = {
    index: number;
    stacks: number;
    children: React.ReactNode;
};

const Stack: React.FC<StackProps> = ({ index, stacks, children }) => {
    return (
        <span
            className={`${styles.stackItem} text-4xl font-bold text-white`}
            style={{
                '--index': index.toString(),
                '--stacks': stacks.toString(),
            } as React.CSSProperties}
        >
            {children}
        </span>
    );
};

const Title: React.FC<{children: React.ReactNode}> = ({children}) => {
    const stackCount = 3;
    return (
        <div className={`${styles.container}`}>
            <div className={styles.stack} style={{ '--stacks': stackCount } as React.CSSProperties}>
                {Array.from({ length: stackCount }, (_, i) => (
                    <Stack key={i} index={i} stacks={stackCount}>
                        {children}
                    </Stack>
                ))}
            </div>
        </div>
    );
};

export default Title;
