import styles from '../styles.module.css'
import Header from '../componants/Header'
import Footer from '../componants/Footer'
import MyLayout from '../componants/MyLayout'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home(props) {
  return (
    <>
    <MyLayout >
      <Container>
        <Row>
        </Row>
        <Row>
          <Col><h1>XKCD</h1></Col>
        </Row>
        <Row>
        </Row>
        <Row>
          <Col><p>{props.comics[0].safe_title}</p></Col>
        </Row>
        <Row>
          <Col><img src={props.comics[0].img} /></Col>
        </Row>
        <Row>
        <Col><Footer propsIds={props.comics}/></Col>
        </Row>

      </Container>
    </MyLayout>
    </>
  )
}

export async function getServerSideProps(){
  let intitialNum = 2413;
  let jsonData = [];

  for(let i=0; i < 10 ; i++){
    let response = await fetch(`https://xkcd.com/${intitialNum-i}/info.0.json`);
    let jsonPartData = await response.json();
    jsonData.push(jsonPartData);
  };

  return {props: {comics: jsonData} } 
}