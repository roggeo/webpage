import React, { Component } from 'react';
import './PageContent.css';
// import Icon from 'react-fontawesome';

class PageContent extends Component {

    render(){

        let title = 'About me';

        return(
            <section className="page-content-wrap">
                <article className="content">                    
                    <h1>{title}</h1>
                    <p>Hi. My name is Geovani.
                        I love computer and programming languages, ever I'm push myself to make my best.
                        Do you know what I can use to solve your problems? please see on home page.</p>                   
                </article>
            </section>
        );
    }

}

export default PageContent;