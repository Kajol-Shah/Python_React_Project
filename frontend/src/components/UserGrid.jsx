import React from 'react'
import { Grid } from '@chakra-ui/react'
import {USERS} from '../dummy/dummy'
import UserCard from '../components/UserCard'
function UserGrid() {
  return (
    <>
      <Grid templateColumns={{base:"1fr",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} gap={"4"}>
        {USERS.map((user)=>(
            <UserCard key={user.id} user={user}></UserCard>
        ))}

      </Grid>
    </>
  )
}

export default UserGrid
