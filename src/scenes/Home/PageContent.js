import React, { Component } from 'react';
import './PageContent.css';

class PageContent extends Component {
    render(){
        return(
            <section className="page-content-wrap">
                <article className="content">
                    <div className="article-box-list">
                        <h1>PHP</h1>
                        <p>This is technology to use in server side. It's going make your website smarty and save your datas.</p>
                    </div>
                    <div className="article-box-list">
                        <h1>Zend Framework</h1>
                        <p>It is a powerful tool for use in PHP technology.</p>
                    </div>
                    <div className="article-box-list">
                        <h1>NodeJS</h1>
                        <p>Amazing plataform to running a commun tecnology in all smartyphones around the world, JavaScript.</p>
                    </div>
                    <div className="article-box-list">
                        <h1>Express</h1>
                        <p>It is a beultiful tool to make websites on NodeJS.</p>
                    </div>
                    <div className="article-box-list">
                        <h1>ReactJS</h1>
                        <p>Incredible tool to make beatiful pages</p>
                    </div>
                </article>
            </section>
        );
    }
}

export default PageContent;