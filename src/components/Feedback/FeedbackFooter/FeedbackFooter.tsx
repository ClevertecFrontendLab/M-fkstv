import { Button, Grid, Space } from 'antd';
import styles from './FeedbackFooter.module.css';

type FeedbackFooterProps = {
    onClick: () => void;
    onShowAll: () => void;
    showAll: boolean;
};

export const FeedbackFooter: React.FC<FeedbackFooterProps> = ({ onClick, showAll, onShowAll }) => {
    const { useBreakpoint } = Grid;
    const breakpoint = useBreakpoint();

    return (
        <Space
            direction={breakpoint.xs ? 'vertical' : 'horizontal'}
            style={{
                marginTop: 'auto',
                marginBottom: 48,
                paddingLeft: 24,
                paddingRight: breakpoint.xs ? 24 : 0,
            }}
            size={8}
        >
            <Button
                onClick={onClick}
                style={{
                    fontSize: 14,
                }}
                block={breakpoint.xs}
                className={styles.btn}
                size='large'
                type='primary'
                data-test-id='write-review'
            >
                Написать отзыв
            </Button>
            <Button
                onClick={onShowAll}
                style={{
                    fontSize: 16,
                }}
                block={breakpoint.xs}
                className={styles.btn}
                size='large'
                type='link'
                data-test-id='all-reviews-button'
            >
                {!showAll ? 'Развернуть все отзывы' : 'Скрыть отзывы'}
            </Button>
        </Space>
    );
};
