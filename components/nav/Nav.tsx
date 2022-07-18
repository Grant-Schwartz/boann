import { Box, Flex, Input, InputGroup, InputRightElement, Kbd } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import logo from 'assets/logo.png';
import Link from 'next/link';
import { Account } from "./Account";
import { User } from "next-auth";

interface NavProps {
    user: User;
}

export const Nav: FC<NavProps> = ({ user }) => {
    return (
        <Flex height="50px" backgroundColor="gray.100" width="100%" alignItems="center" justifyContent="space-between">
            <Box marginLeft="10px" marginTop="4px">
                <Link href="/projects">
                    <Image src={logo} height="26px" width="26px" />
                </Link>
            </Box>
            <Flex alignItems="center">
                <InputGroup size='sm'>
                    <Input borderColor="gray.400" _focus={{ borderColor: 'gray.500'}} backgroundColor="white" borderRadius="6px" placeholder="Search or jump to..." />
                    <InputRightElement color="gray.800">
                    <Kbd>/</Kbd>
                    </InputRightElement>
                </InputGroup>
                <Account user={user}/>
            </Flex>
        </Flex>
    );
}