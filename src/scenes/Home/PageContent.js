import React, { Component } from 'react';
import './PageContent.css';


const CONTENT = [
    {
        "title": "PHP",
        "content": "This is technology to use in server side. It's going make your website smarty and save your datas."
    },
    {
        "title": "Zend Framework",
        "content": "It is a powerful tool for use in PHP technology.."
    },
    {
        "title": "NodeJS",
        "content": "Amazing plataform to running a commun tecnology in all browsers, smarty TVs and smarty phones around the world, JavaScript."
    },
    {
        "title": "Express",
        "content": "It is a beultiful tool to make websites on NodeJS."
    },
    {
        "title": "ReactJS",
        "content": "Incredible tool to make beatiful pages."
    }
];

class PageContent extends Component {

    constructor(props) {
        super(props);    
    }

    render(){
        return(
            <section className="page-content-wrap">
                <article className="content">
                
                    {CONTENT.map((item, i) => (
                        <div className="article-box-list" >
                            <h1>{item.title}</h1>
                            <p>{item.content}</p>
                        </div>
                        )
                    )}                    

                </article>
            </section>
        );
    }
}

export default PageContent;