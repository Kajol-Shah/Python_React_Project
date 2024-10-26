import React from 'react'
import { useDisclosure,RadioGroup,Radio,Textarea,Button,Flex,FormControl,FormLabel,Input,Modal,ModalBody,ModalCloseButton,ModalOverlay,ModalHeader,ModalFooter,ModalContent} from '@chakra-ui/react'
import {BiAddToQueue} from "react-icons/bi"

function CreateUserModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>
        <BiAddToQueue></BiAddToQueue>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>My new BFF 😍 </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex alignItems={"center"} gap={4}>
                <FormControl>
                    <FormLabel>Full Name</FormLabel>
                    <Input placeholder="eg: John Doe"></Input>
                </FormControl>
                <FormControl>
                    <FormLabel>Role</FormLabel>
                    <Input placeholder="eg: Web Developer"></Input>
                </FormControl>
            </Flex>
            <FormControl mt={4}>
                    <FormLabel>Description</FormLabel>
                    <Textarea resize={"none"} overflowY={"hidden"} placeholder="eg: He is a web developer who loves to build web applications"></Textarea>
            </FormControl>
            <RadioGroup mt={4}>
                <Flex gap={5}>
                    <Radio value="male">Male</Radio>
                    <Radio value="female">Female</Radio>
                </Flex>
            </RadioGroup>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} >Add</Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreateUserModal
