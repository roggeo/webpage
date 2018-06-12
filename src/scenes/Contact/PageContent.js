import React, { Component } from 'react';
import './PageContent.css';
import Icon from 'react-fontawesome';

class PageContent extends Component {

    render(){

        let title = 'Contact me';

        return(
            <section className="page-content-wrap">
                <article className="content">                    
                    <h1>{title}</h1>
                    <p><Icon name='envelope'/> geovanirog@gmail.com</p>     
                </article>
            </section>
        );
    }

}

export default PageContent;