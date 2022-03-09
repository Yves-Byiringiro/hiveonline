import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../components/Header'
import PostCard from '../components/PostCard'
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, postsSelector } from '../slices/PostsSlice';
import { Box, LinearProgress } from '@material-ui/core';
import Pagination from '../components/Pagination';


const Posts = () => {

    const { id } = useParams()

    console.log(id);
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const { isFetching, posts } = useSelector(postsSelector)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setpostsPerPage] = useState(6);


    useEffect(() => {
        dispatch(getPosts());

    }, [dispatch]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
    const paginate = pageNumber => setCurrentPage(pageNumber);
    
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

                        {currentPosts.map((post, i) => {
                            if (post.userId == id) {
                                return (
                                    <Col key={i} className='md-4 mt-5'>
                                        <PostCard title={post.title} body={post.body} onClick={() => navigate(`/posts/${post.id}/comments`)} />
                                    </Col>)
                            }
                        })}
                       
                    </Row>}
                    <Pagination 
                            postsPerPage={postsPerPage} 
                                totalPosts={currentPosts.length} 
                                    paginate={paginate}/>
            </Container>
        </div>
    )
}

export default Posts