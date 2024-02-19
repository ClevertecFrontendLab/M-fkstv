import { Ierror } from '../../types/error';
import styles from './Error.module.css';

export const ErrorElem = (error: Ierror) => {
    return (
        <div>
            <p>{error.data.message}</p>
            <p>{error.data.error}</p>
            <p>{error.status}</p>
            <p>{error.data.statusCode}</p>
        </div>
    );
};
