import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { getUSers, usersSelector } from '../slices/UsersSlice';
import { Box, LinearProgress } from '@material-ui/core';
import { Col, Container, Row } from 'react-bootstrap'


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

            <div>
                <h2>User Information</h2>
                <p> This page shows the posts for a certain user </p>
            </div>
            {isFetching ? <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box> :
                  <Row className='mt-2'>
                           {users.map((user, i) => {
                            if (user.id == id) {
                                return (
                                    <h2>{user.name}</h2>
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



