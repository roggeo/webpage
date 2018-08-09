import React, { Component } from 'react';
import {Helmet} from "react-helmet";

class HeadSeo extends Component {

  constructor(props) {
    super(props);
    this.state = {
        pageTitle: process.env.REACT_APP_NAME +' - '+ process.env.REACT_APP_TITLE_DEFAULT,
        pageDescription: process.env.REACT_APP_DESCRIPTION,
        pageKeywords: process.env.REACT_APP_KEYWORDS,
        pageURI: process.env.REACT_APP_URL
    }
    this.setPageTitle(this.props.title);
    this.setPageDescription(this.props.description);
    this.setPageKeywords(this.props.keywords);
    this.setPageURI(this.props.uri);
  }

  setPageTitle(title) {
    if (title) {
        this.state.pageTitle = title +' - '+ process.env.REACT_APP_NAME;
    }
  }

  setPageDescription(text) {
    if (text) {
        this.state.pageDescription = text;
    }
  }

  setPageKeywords(text) {
    if (text) {
        this.state.pageKeywords = text;
    }
  }

  setPageURI(uri) {
    if (uri) {
        this.state.pageURI += '/' + uri;
    }
  }

  render() {

    return (
        <Helmet>
          <title>{this.state.pageTitle}</title>
          <link rel="canonical" href={this.state.pageURI} />
          <meta name="description" content={this.state.pageDescription} />
          <meta name="keywords" content={this.state.pageKeywords} />
        </Helmet>
    );
  }
}

export default HeadSeo;
