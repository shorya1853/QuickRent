import React from 'react'
import Sidebar from '../../components/chating/Sidebar'
import Chat from '../../components/chating/Chat'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const Chating = (props) => {
  return (
    <Container className= "shadow p-3 my-2 bg-white rounded" >
      {/* <Row >
      <Col className= "shadow p-3 mb-5 bg-white rounded" xs={6} md={4} >
          <Container >
            <Sidebar/>
          </Container>
        </Col>
        <Col className= "shadow p-3 mb-5 bg-white rounded col align-self-end" xs={12} md={8}>
        <Container >
            <Chat/>
          </Container>
        </Col>
      </Row> */}
      
      <Chat/>
    </Container>


  )
}

export default Chating