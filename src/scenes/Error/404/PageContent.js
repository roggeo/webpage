import React, { Component } from 'react';
import './PageContent.css';
import Icon from 'react-fontawesome';


class PageContent extends Component {

    render(){

        let title = '404';

        return(
            <section className="page-content-wrap">
                <article className="content">
                    <div className="text-center">             
                        <h1>{title}</h1>
                        <h2>Sorry!</h2>
                        <p>Page not found.</p>
                    </div>
                </article>
            </section>
        );
    }

}

export default PageContent;