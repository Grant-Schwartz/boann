import { Input, InputGroup, InputRightElement, Kbd } from "@chakra-ui/react";
import { FC } from "react";


export const Search: FC = () => {
    return (
        <InputGroup size='sm'>
            <Input borderColor="gray.400" _focus={{ borderColor: 'gray.500'}} backgroundColor="gray.50" borderRadius="6px" placeholder="Search or jump to..." />
            <InputRightElement color="gray.800">
                <Kbd>/</Kbd>
            </InputRightElement>
        </InputGroup>
    );
}