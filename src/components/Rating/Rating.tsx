import { StarFilled, StarOutlined } from '@ant-design/icons';
import { Rate, RateProps } from 'antd';
import styles from './Rating.module.css';

type RatingPropsType = RateProps & {
    rating?: number;
};
export const Rating = ({ rating }: RatingPropsType) => {
    return (
        <Rate
            value={rating}
            className={styles.rate}
            character={({ index = 0, value = 0 }) => {
                if (index != undefined)
                    return index < value ? (
                        <StarFilled
                            style={{
                                fontSize: 16,
                                color: '#FAAD14',
                            }}
                        />
                    ) : (
                        <StarOutlined
                            style={{
                                fontSize: 16,
                                color: '#FAAD14',
                            }}
                        />
                    );
            }}
        />
    );
};
