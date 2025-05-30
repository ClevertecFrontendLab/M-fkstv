import { SearchIcon } from '@chakra-ui/icons';
import {
    Box,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    IconButton,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Switch,
} from '@chakra-ui/react';

import Filter from '../../assets/icons/filter.svg';

export const HeadingSection = ({ title }: { title: string }) => (
    <Box>
        <Heading
            textAlign='center'
            letterSpacing='0.9px'
            as='h1'
            size='2xl'
            lineHeight='100%'
            mb='32px'
        >
            {title}
        </Heading>
        <HStack spacing='16px' minW='520px' mb='16px'>
            <IconButton
                variant='outline'
                aria-label='фильтр'
                size='lg'
                icon={<Image src={Filter} />}
            />
            <InputGroup size={{ base: 'sm', md: 'lg' }}>
                <Input
                    fontWeight={400}
                    placeholder='Название или ингридиент ...'
                    fontSize='18px'
                    _placeholder={{ color: 'lime.800' }}
                    variant='outline'
                    size='lg'
                />
                <InputRightElement
                    height={{ base: '32px', md: '48px' }}
                    width={{ base: '32px', md: '48px' }}
                >
                    <SearchIcon boxSize={5} />
                </InputRightElement>
            </InputGroup>
        </HStack>
        <HStack spacing='16px' mb='38px' pl='10px' display={{ base: 'none', md: 'flex' }}>
            <FormControl
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                minWidth='268px'
            >
                <FormLabel
                    htmlFor='allergens'
                    mb='0'
                    fontWeight={500}
                    fontSize='16px'
                    color='black'
                    lineHeight='150%'
                >
                    Исключить мои аллергены
                </FormLabel>
                <Switch id='allergens' />
            </FormControl>
            <Select placeholder='Выберите из списка...'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>
        </HStack>
    </Box>
);
