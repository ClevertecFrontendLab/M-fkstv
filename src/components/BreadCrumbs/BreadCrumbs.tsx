import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

export const BreadCrumbs = () => {
    const location = useLocation();
    const paths = location.pathname.split('/');
    console.log('🚀 ~ BreadCrumbs ~ paths:', paths);

    return (
        <>
            <Breadcrumb separator={<ChevronRightIcon color='gray.500' />}>
                {/* (if(path.lenght === 1) return(
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to='/'>
                        Главная
                    </BreadcrumbLink>
                </BreadcrumbItem>
                ) ) */}

                {paths.map((item, index) => {
                    if (paths.length === 1)
                        return (
                            <BreadcrumbItem>
                                <BreadcrumbLink as={Link} to='/'>
                                    Главная
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        );
                    return (
                        <BreadcrumbItem>
                            <BreadcrumbLink key={index} as={Link} to={item}>
                                {item}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    );
                })}
                {/* <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to='/'>
                        Главная
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to='vegan'>
                        Веганская кухня
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink as={Link} to='#'>
                        Вторые блюда
                    </BreadcrumbLink>
                </BreadcrumbItem> */}
            </Breadcrumb>
        </>
    );
};
