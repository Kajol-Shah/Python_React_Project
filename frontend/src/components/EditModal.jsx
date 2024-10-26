import React from 'react'
import { IconButton,useDisclosure,Textarea,Button,Flex,FormControl,FormLabel,Input,Modal,ModalBody,ModalCloseButton,ModalOverlay,ModalHeader,ModalFooter,ModalContent} from '@chakra-ui/react'
import { BiEditAlt } from 'react-icons/bi'


const EditModal = ({user}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <IconButton onClick={onOpen}  
        variant='ghost' 
        colorScheme="blue" 
        size={'sm'} 
        aria-label='See menu'
        icon={<BiEditAlt size={20}/>}>
    </IconButton>
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
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} >Update</Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
    </>
  )
}

export default EditModal
