import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

export const BreadCrumbs = () => {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(Boolean);
    console.log('🚀 ~ BreadCrumbs ~ paths:', paths);

    const PATHS: Record<string, string> = {
        vegan: 'Веганская кухня',
        jusiest: 'Самое сочное',
    };
    return (
        <>
            <Breadcrumb separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to='/'>
                        Главная
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {paths.map((item, index) => {
                    const isLast = index === paths.length - 1;
                    return (
                        <BreadcrumbItem key={index}>
                            <BreadcrumbLink
                                as={Link}
                                isCurrentPage={isLast}
                                to={item}
                                color='blackAlpha.700'
                            >
                                {PATHS[item]}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    );
                })}
            </Breadcrumb>
        </>
    );
};
