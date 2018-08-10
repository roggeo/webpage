import React, { Component } from 'react';
import './PageContent.css';
import Icon from 'react-fontawesome';
import { Container, Row, Col } from 'reactstrap';

class PageContent extends Component {

    render(){
        return(
            <section className="page-content-wrap">
                <Container>
                    <Row>
                        <Col>                  
                            <h1>Contact me</h1>
                            <p><Icon name='envelope'/> geovanirog@gmail.com</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }

}

export default PageContent;