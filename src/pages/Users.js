import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header'
import UserCard from '../components/UserCard'
import { getUSers, usersSelector } from '../slices/UsersSlice';
import { useNavigate } from 'react-router-dom';
import { Box,  LinearProgress } from '@material-ui/core';

// Page to show users 

const Users = () => {

    const dispatch = useDispatch()
    const { isFetching, users } = useSelector(usersSelector)

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getUSers());
    }, [dispatch]);

    return (
        <div>
            <Header />
            <Container className='mt-4'>
                <div>
                    <h2>Users</h2>
                    <p>This page shows the users</p>
                </div>
                {isFetching ? <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box> : <Row className='mt-2'>
                    {users.map((user, i) => {
                        return (
                            <Col className='md-4 mt-5' key={i}>
                                <UserCard
                                    name={user.name}
                                    email={user.email}
                                    city={user.address.city}
                                    street={user.address.street}
                                    phone={user.phone}
                                    onClickPosts={() => navigate(`/user/${user.id}/posts`)}
                                    onClickAlbums={() => navigate(`/user/${user.id}/albums`)} 
                                    onClickUserInfo={()=> navigate(`/users/${user.id}`)} />
                            </Col>
                        )
                    })}
                </Row>}
            </Container>
        </div>
    )
}

export default Users