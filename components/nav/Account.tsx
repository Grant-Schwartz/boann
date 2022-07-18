import { ChevronDownIcon, SettingsIcon, InfoOutlineIcon, WarningIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Flex, Text, Link, Divider } from "@chakra-ui/react";
import { User } from "next-auth";
import { FC, useState } from "react";

interface AccountProps {
    user: User;
}

const AccountDropdown: FC<AccountProps> = ({ user }) => {
    return (
        <Box position="absolute" width="200px"right="10px" top="50px" backgroundColor="#fff" border="2px solid" borderColor="gray.200" padding="10px" borderRadius="5px">
            <Text fontWeight="600" letterSpacing="-0.03em">{user.name}</Text>
            <Divider marginTop="10px" marginBottom="10px"/>
            <Flex flexDirection="column">
                <Link href="/settings" color="gray.500" marginBottom="5px">
                    <SettingsIcon marginTop="-4px"/> Settings
                </Link>
                <Link href="/help" color="gray.500" marginBottom="5px">
                    <InfoOutlineIcon marginTop="-4px"/> Help
                </Link>
                <Link href="/report" color="gray.500" marginBottom="5px">
                    <WarningIcon marginTop="-4px"/> Report An Issue
                </Link>
            </Flex>
        </Box>
    );
}

export const Account: FC<AccountProps> = ({ user }) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
        <Box marginLeft="10px" as={Button} padding="5px" minWidth="50px" marginRight="10px" onClick={() => setOpen(!open)}>
            <Flex alignItems="center">
                <Image src={user.image!} width="26px" height="26px" borderRadius="13px"/>
                <ChevronDownIcon color="gray.500"/>
            </Flex>
        </Box>
        {open ? <AccountDropdown user={user} /> : null}
        </>
    );
}

