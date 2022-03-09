import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { getUSers, usersSelector } from '../slices/UsersSlice';
import { Box, LinearProgress } from '@material-ui/core';
import { Container, Row } from 'react-bootstrap'
import UserInfoComp from '../components/UserInfoComp';

// Page to show details information of a certain user

function UserInfo() {
    const { id } = useParams()
    console.log('id', id);

    const dispatch = useDispatch()
    const { isFetching, users } = useSelector(usersSelector)


    useEffect(() => {
        dispatch(getUSers());
    }, [dispatch]);

  return (
    <div>
        <Header />
        <Container className='mt-4'>
            {isFetching ? <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box> :
                  <Row className='mt-2'>
                           {users.map((user, i) => {
                            if (user.id == id) {
                                return (
                                  <UserInfoComp 
                                    name={user.name}
                                    username={user.username}
                                    email={user.email}
                                    phone={user.phone}
                                    website={user.website}
                                    street={user.address.street}
                                    suite={user.address.suite}
                                    city={user.address.city}
                                    company={user.company.name}
                                    />
                                   
                                )
                            }
                        })}
                  </Row>
            }
        </Container>    
    </div>
  )
}

export default UserInfo;



