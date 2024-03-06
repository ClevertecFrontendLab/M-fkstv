import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { Route } from 'antd/lib/breadcrumb/Breadcrumb';

export interface IBreadcrumbsProps {
    routes: Route[];
}

export const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({ routes }) => {
    const itemRender = (route: Route, _: unknown, routes: Route[], paths: string[]) => {
        const last = routes.indexOf(route) === routes.length - 1;

        return last ? (
            <span>{route.breadcrumbName}</span>
        ) : (
            <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        );
    };
    return (
        <Breadcrumb
            style={{
                width: '100%',
            }}
            routes={routes}
            itemRender={itemRender}
        />
    );
};
