import { Badge, Calendar } from 'antd';
import styles from './Calendar.module.css';

export const CalendarComp = () => {

    const getListData = (value) => {
        let listData;
        switch (value.date()) {
          case 8:
            listData = [
              {
                type: 'warning',
                content: 'This is warning event.',
              },
              {
                type: 'success',
                content: 'This is usual event.',
              },
            ];
            break;
          case 10:
            listData = [
              {
                type: 'warning',
                content: 'This is warning event.',
              },
              {
                type: 'success',
                content: 'This is usual event.',
              },
              {
                type: 'error',
                content: 'This is error event.',
              },
            ];
            break;
          case 15:
            listData = [
              {
                type: 'warning',
                content: 'This is warning event',
              },
              {
                type: 'success',
                content: 'This is very long usual event。。....',
              },
              {
                type: 'error',
                content: 'This is error event 1.',
              },
              {
                type: 'error',
                content: 'This is error event 2.',
              },
              {
                type: 'error',
                content: 'This is error event 3.',
              },
              {
                type: 'error',
                content: 'This is error event 4.',
              },
            ];
            break;
          default:
        }
        return listData || [];
      };

    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
          <ul className="events">
            {listData.map((item) => (
              <li key={item.content}>
                <Badge status={item.type} text={item.content} />
              </li>
            ))}
          </ul>
        );
      };
    return (
        <div className={styles.root}>
            <Calendar dateCellRender={dateCellRender} />
        </div>
    );
};
