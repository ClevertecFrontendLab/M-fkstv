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

// import { Breadcrumb } from 'antd';
// import { Link, useLocation } from 'react-router-dom';

// export const Breadcrumbs = ({ routes }) => {
//     const location = useLocation();
//     const { pathname } = location;
//     const pathnames = pathname.split('/').filter((x) => x);

//     return (
//         <Breadcrumb>
//             {pathnames.map((name, index) => {
//                 const routeTo = `${pathnames.slice(0, index + 1).join('/')}`;
//                 const isLast = index === pathnames.length - 1;

//                 return (
//                     <Breadcrumb.Item key={name}>
//                         {isLast ? <span>{name}</span> : <Link to={routeTo}>{name}</Link>}
//                     </Breadcrumb.Item>
//                 );
//             })}
//         </Breadcrumb>
//     );
// };
