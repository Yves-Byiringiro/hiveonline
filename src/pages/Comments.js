import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../components/Header'
import CommentCard from '../components/CommentCard'
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { getComments, commentsSelector } from '../slices/CommentsSlice';
import { Box, LinearProgress } from '@material-ui/core';
import Pagination from '../components/Pagination';


const Comments = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const { isFetching, comments } = useSelector(commentsSelector)
    const [currentPage, setCurrentPage] = useState(1);
    const [commentsPerPage, setcommentsPerPage] = useState(6);



    useEffect(() => {
        dispatch(getComments());
    }, [dispatch]);

    const indexOfLastComment = currentPage * commentsPerPage;
    const indexOfFirstComment = indexOfLastComment - commentsPerPage;
    const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);
  
    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    return (
        <div>
            <Header />
            <Container className='mt-4'>
                <div>
                    <h2>Comments</h2>
                    <p>This page shows the comments for a certain post</p>
                </div>

                {isFetching ? <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box> : 
                    <Row className='mt-2 mb-2'>

                    {
                        currentComments.map((comment, i) => {
                            if (comment.postId == id) {
                                return (
                                    <Col key={i} className='md-4 mt-5'>
                                        <CommentCard name={comment.name} body={comment.body} email={comment.email} />
                                    </Col>)
                            }
                        })
                    }
                    </Row>}
                    <Pagination 
                            postsPerPage={commentsPerPage} 
                                totalPosts={currentComments.length} 
                                    paginate={paginate}/>
                
            </Container>
        </div>
    )
}

export default Comments