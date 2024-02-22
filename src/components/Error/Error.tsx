import { useLocation } from 'react-router-dom';
import { Ierror } from '../../types/error';
import { history } from '@redux/configure-store';
import styles from './Error.module.css';

export const ErrorElem = (error: Ierror) => {
    const location = useLocation();
    console.log(location, history);

    return (
        <div>
            <p>{error.data.message}</p>
            <p>{error.data.error}</p>
            <p>{error.status}</p>
            <p>{error.data.statusCode}</p>
        </div>
    );
};
