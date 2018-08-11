import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './MainBanner.css';

class MainBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      ajaxContent: [],
      isLoaded: false,
      error: null
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentDidMount() {
    this.ajaxDatas();
  }

  ajaxDatas() {

    //Configure url to request banner contents
    let API_URL = process.env.REACT_APP_API_URL+'/banner.json';

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

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.ajaxContent.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.ajaxContent.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex, ajaxContent } = this.state;

    const slides = ajaxContent.map((item) => {
      return (
        <CarouselItem
          className="main-banner-item"
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <img src={item.media.images[0].large}/>
          <CarouselCaption className="text-danger" captionText={item.content} captionHeader={item.title} />
        </CarouselItem>
      );
    });

    return (
      <div>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={ajaxContent} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}

export default MainBanner;
