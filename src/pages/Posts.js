import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../components/Header'
import PostCard from '../components/PostCard'
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, postsSelector } from '../slices/PostsSlice';
import { Box, LinearProgress } from '@material-ui/core';

const Posts = () => {

    const { id } = useParams()
    console.log('id', id)

    const dispatch = useDispatch()
    const { isFetching, posts } = useSelector(postsSelector)

    console.log('posts', posts)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div>
            <Header />
            <Container className='mt-4'>
                <div>
                    <h2>Posts</h2>
                    <p> This page shows the posts for a certain user </p>
                </div>
                {isFetching ? <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box> :
                    <Row className='mt-2'>

                        {posts.map((post, i) => {
                            if (post.userId == id) {
                                return (
                                    <Col key={i} className='md-4 mt-5'>
                                        <PostCard title={post.title} body={post.body} onClick={() => navigate(`/posts/${post.id}/comments`)} />
                                    </Col>)
                            }
                        })}
                    </Row>}
            </Container>
        </div>
    )
}

export default Posts