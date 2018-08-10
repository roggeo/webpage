import React, { Component } from 'react';
import './PageContent.css';
// import Icon from 'react-fontawesome';
import { Container, Row, Col } from 'reactstrap';

class PageContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            ajaxContent: []
        };
    }

    componentDidMount() {
        this.ajaxDatas();
    }

    ajaxDatas() {

        //Configure url to request home contents
        let API_URL = process.env.REACT_APP_API_URL+'/about.json';

        fetch(API_URL)
            .then(response => response.json())
            .then((result) => {
                this.setState({
                  isLoaded: true,
                  ajaxContent: result.data
                });
              },
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
        );
    }


    render(){

        const { error, isLoaded, ajaxContent } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <section className="page-content-wrap">
                    <Container>
                        {ajaxContent.map((item, i) => (
                        <Row>
                            <Col xs="12">
                                <h1>{item.title}</h1>
                                <p>{item.content}</p>
                            </Col>                
                        </Row>
                        ))}
                    </Container>
                </section>
            );
        }
    }

}

export default PageContent;