import React, { Component } from 'react';
import './PageContent.css';
import { Button } from 'reactstrap';


class PageContent extends Component {
    render(){
        return(
            <section className="page-content-wrap">
                <article className="content">
                    <Button color="danger">Danger!</Button>
                    <div className="article-box-list">
                        <h1>PHP</h1>
                        <p>Content mainly</p>
                    </div>

                    <div className="article-box-list">
                        <h1>Zend Framework</h1>
                        <p>Content mainly</p>
                    </div>

                    <div className="article-box-list">
                        <h1>NodeJS</h1>
                        <p>Content mainly</p>
                    </div>

                    <div className="article-box-list">
                        <h1>Express</h1>
                        <p>Content mainly</p>
                    </div>

                    <div className="article-box-list">
                        <h1>ReactJS</h1>
                        <p>Content mainly</p>
                    </div>
                </article>
            </section>
        );
    }
}

export default PageContent;