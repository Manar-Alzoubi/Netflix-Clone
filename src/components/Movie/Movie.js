
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Row,Card, Col } from 'react-bootstrap';
import './Home.css';
import Movie from '../Movie/Movie';
import ModalMovie from '../ModalMovie/ModalMovie';

function Movie() {
    const [data, setData] = useState([]);
    const [cardInfo, setCardInfo] = useState({});
    const [show,setShow] = useState(false);

    const handleClose = ()=>setShow(false);


   

    return (
        <>
         <Movie setData={setData}/>
            <Container className='div-container'>
                <Row md={3}>
                    {
                        data.length && data.map((ele) => (
                            <Col key={ele.id} md={4}>
                                <Card className='div-card'>
                                    <Card.Img className='div-card-img' variant="top" src={ele.poster_path} />
                                    <Card.Body>
                                        <Card.Title className='div-card-title'>{ele.Title}</Card.Title>
                                        <Card.Link className='div-card-link'>
                                            {ele.sourceUrl}
                                        </Card.Link>
                                        <div>
                                            <Button className='div-card-button' variant="primary" 
                                            onClick={()=>{
                                                setCardInfo(ele)
                                                setShow(true);
                                            }}>Add To Favorite</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
            {
                <ModalMovie cardInfo={cardInfo} show={show} handleClose={handleClose} />
            }
            {
                !data.length && <div><h2>No Such Results, Please try again later</h2></div>
            }
        </>
    )
}
export default Movie;