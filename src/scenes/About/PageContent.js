import React, { Component } from 'react';
import './PageContent.css';
import Icon from 'react-fontawesome';

class PageContent extends Component {

    render(){

        let title = 'About me';

        return(
            <section className="page-content-wrap">
                <article className="content">                    
                    <h1>{title}</h1>
                    <p>Content and save your datas.</p>                   
                </article>
            </section>
        );
    }

}

export default PageContent;