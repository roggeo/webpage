import React, { Component } from 'react';
import {Helmet} from "react-helmet";

class HeadSeo extends Component {

  pageHead = {};

  constructor(props) {
    super(props);

    this.pageHead = {
      pageTitle: process.env.REACT_APP_NAME +' - '+ process.env.REACT_APP_TITLE_DEFAULT,
      pageDescription: process.env.REACT_APP_DESCRIPTION,
      pageKeywords: process.env.REACT_APP_KEYWORDS,
      pageURI: process.env.REACT_APP_URL
    };

    this.setPageTitle(this.props.title);
    this.setPageDescription(this.props.description);
    this.setPageKeywords(this.props.keywords);
    this.setPageURI(this.props.uri);
  }

  setPageTitle(title) {
    if (title) {
        this.pageHead.pageTitle = title +' - '+ process.env.REACT_APP_NAME;
    }
  }

  setPageDescription(text) {
    if (text) {
        this.pageHead.pageDescription = text;
    }
  }

  setPageKeywords(text) {
    if (text) {
        this.pageHead.pageKeywords = text;
    }
  }

  setPageURI(uri) {
    if (uri) {
        this.pageHead.pageURI += '/' + uri;
    }
  }

  render() {

    return (
        <Helmet>
          <title>{this.pageHead.pageTitle}</title>
          <link rel="canonical" href={this.pageHead.pageURI} />
          <meta name="description" content={this.pageHead.pageDescription} />
          <meta name="keywords" content={this.pageHead.pageKeywords} />
        </Helmet>
    );
  }
}

export default HeadSeo;
