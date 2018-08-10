import React, { Component } from 'react';
import './PageContent.css';
//import Icon from 'react-fontawesome';
import { Container, Row, Col } from 'reactstrap';

class PageContent extends Component {

    render(){

        return(
            <section className="page-content-wrap">
                <Container>
                    <Row className="text-center">
                        <Col xs="12">
                            <h1>404</h1>
                            <h2>Sorry!</h2>
                            <p>Page not found.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }

}

export default PageContent;