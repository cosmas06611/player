                import React from 'react'
                import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
                import { Button } from 'react-bootstrap'
                import { Card, Container, Row, Col }from 'react-bootstrap';
                

                const Players = (Props) => {
                    const {name1, name2, name3, name4} = Props
                return (
                    <div>
                        <Container>
                            <Row>
                                <Col md={6}>
                    {/* <h1 style={{display:"flex", justifyContent:"center"}}>LIST OF PLAYERS</h1> */}
                
                    <Card>
            <Card.Body>
                    <h1 style={{color:"red", fontSize:"big"}}> {name1} </h1>
                <Card.Img src= "https://manunitedcore.com/wp-content/uploads/2020/02/Bruno_Fernandes_Man-U_4.jpg" width="100px" height="500px" alt="bruno" />
                <div>
                    <Card.Text>
                            
                            <p>Age : <span style={{color:"red"}}>28</span></p>
                            <p>Country : <span style={{color:"red"}}>Portugal</span></p>
                            <p>Club : <span style={{color:"red"}}>Manchester United</span></p>
                            <p>Jersey Number : <span style={{color:"red"}}>8</span></p>
                            </Card.Text>
                                </div>
                                </Card.Body>

        </Card>
        </Col>
                <br/>
                <Col md={6}>
                <Card>
            <Card.Body>
                    <h1 style={{color:"red", fontSize:"big"}}> {name2} </h1>
                <Card.Img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0pnJSYkd18E-DB_YmbUv9wt4trWp8B924bg&usqp=CAU"  width ="100px" height="500px"  alt="marcus"/>
                <div>
                    <Card.Text>
                            
                            <p>Age : <span style={{color:"red"}}>25</span></p>
                            <p>Country : <span style={{color:"red"}}>England</span></p>
                            <p>Club : <span style={{color:"red"}}>Manchester United</span></p>
                            <p>Jersey Number : <span style={{color:"red"}}>10</span></p>
                            </Card.Text>
                                </div>
                                </Card.Body>
        </Card>
        </Col>
                    <br />
                    <Col md={6}>
                    <Card>
            <Card.Body>
                    <h1 style={{color:"red", fontSize:"big"}}> {name3} </h1>
                <Card.Img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPMcueNAB8_ZCD5NhnAKiuY1GBoy1vGCGsdQ&usqp=CAU" width="100px" height="500px" alt="greenwood"/>
                <div>
                    <Card.Text>
                            
                            <p>Age : <span style={{color:"red"}}>22</span></p>
                            <p>Country : <span style={{color:"red"}}>England</span></p>
                            <p>Club : <span style={{color:"red"}}>Manchester United</span></p>
                            <p>Jersey Number : <span style={{color:"red"}}>11</span></p>
                            </Card.Text>
                                </div>
                                </Card.Body>
        </Card>
        </Col>
                   <br /> 
                    <Col md={6}>
                   <Card>
            <Card.Body>
                    <h1 style={{color:"red", fontSize:"big"}}> {name4} </h1>
                <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO1Y-2Nr6rMuVb_OHv7fdqVYyaSTK8LxKB-DssHr5ZEyRy8NOeJwwZHzfnl5lj2vpUsWs&usqp=CAU" width="100px" height="500px" alt="aaron" />
                <div>
                    <Card.Text>
                            
                            <p>Age : <span style={{color:"red"}}>25</span></p>
                            <p>Country : <span style={{color:"red"}}>England</span></p>
                            <p>Club : <span style={{color:"red"}}>Manchester United</span></p>
                            <p>Jersey Number : <span style={{color:"red"}}>29</span></p>
                            </Card.Text>
                                </div>
                                </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>   
                </div>
            )
            }

            export default Players

