import Lottie from 'react-lottie';
import { defaultOptions } from './loader_options';

import styles from './Loader.module.css';

export const Loader = () => {
    return (
        <div className={styles.root}>
            <Lottie options={defaultOptions} height={150} width={150} />
        </div>
    );
};
