import React from 'react'
import {CardBody,IconButton,Heading,Text,Avatar,Box,Card,CardHeader,Flex } from '@chakra-ui/react'
import { BiTrash } from 'react-icons/bi'
import EditModal from './EditModal'

const UserCard = ({user}) => {
  return (
    <>
      <Card>
        <CardHeader>
            <Flex>
                <Flex flex={"1"} gap={"4"} alignItems={"center"}>
                    <Avatar src="#"></Avatar>
                    <Box>
                        <Heading size='sm'>{user.name}</Heading>
                        <Text>{user.role}</Text>
                    </Box>
                </Flex>
                <Flex>
                    <EditModal user={user}></EditModal>
                    <IconButton variant='ghost' 
                    colorScheme="red" 
                    size={'sm'} 
                    aria-label='See menu'
                    icon={<BiTrash size={20}/>}></IconButton>
                </Flex>
            </Flex>
        </CardHeader>
        <CardBody>
            <Text>{user.description}</Text>
        </CardBody>
      </Card>
    </>
  )
}

export default UserCard
