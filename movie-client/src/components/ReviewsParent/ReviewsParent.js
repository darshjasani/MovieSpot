import React, { useEffect, useRef } from 'react'
import api from '../../api/axoisConfig';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Review from '../reviews/Review';

function ReviewsParent({getMovieData, movie, reviews, setReviews}) {
    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    const addReview = async(e)=>{
        e.preventDefault();
        try{
            const rev = revText.current;
            const response = await api.post("/api/v1/reviews",{reviewBody:rev.value, imdbId:movieId});
            const updateReviews = {body:rev.value};
            rev.value = "";
            setReviews(prevReviews => [updateReviews, ...prevReviews]);
        }catch(err){
            console.log(err);
        }   
    }

    const getReviews = async()=>{
        try{
            const response = await api.get(`api/v1/movies/${movieId}`);
            const allReviews = response.data.reviewIds;
            setReviews(
                allReviews.map((review)=>({
                    body:review.body
                }))
            )
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getMovieData(movieId);
        getReviews();
    },[])
  return (
    <Container>
        <Row>
            <Col><h3>Reviews</h3></Col>
        </Row>
        <Row className='mt-2'>
            <Col>
                <img src={movie?.poster} alt=''/>
            </Col>
            <Col>
                {
                    <>
                        <Row>
                            <Col>
                                <Review handleSubmit={addReview} revText={revText} labelText = "Write a Review?"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr/>
                            </Col>
                        </Row>
                    </>
                }
                {
                    reviews?.map((r)=>{
                        return(
                            <>
                                <Row>
                                    <Col>{r.body}</Col>
                                </Row>
                                <Row>
                                    <Col><hr/></Col>
                                </Row>
                            </>
                        )
                    })
                }
            </Col>
        </Row>
        <Row>
            <Col><hr/></Col>
        </Row>
    </Container>
  )
}

export default ReviewsParent