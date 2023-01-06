import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
// import propTypes from "prop-types";

export class News extends Component {
  // static defaultProps = {
  //   country: "in",
  //   pageSize: 6,
  //   category: "general",
  //   // key: "general",
  // };
  // static propTypes = {
  //   country: propTypes.string,
  //   pageSize: propTypes.number,
  //   category: propTypes.string,
  //   // key: propTypes.string,
  // };

  capfstltr = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    // console.log("this is a constuctor call from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    //  console.log(this.props.category,"rohit")
    //  this.title =this.document.getElementById('title');
    // this.title.innerText = `${this.props.category} News Overloaded`
    // document.body.h1 =
    document.title = `${this.capfstltr(this.props.category)} News-Hear`;
    document.body.h1 = `News-OverLoaded Top-Headlines ${this.props.category}`;
  }

  async updatepage(pageNo) {
    // console.log('update rfunction');

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    // this.setState({ loading: true });
    console.log(parsedData);
    // console.log(parsedData.articles);
    //   this.setState({ articles: parsedData.articles });
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      page: this.state.page,
      loading: false,
    });
    console.log(this.state.page);
    console.log(this.state.totalResults);
  }

  async componentDidMount() {
    // let articles;
    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=06bd44ba42594f10b41ca40c8aaba1d6&pageSize=${this.props.pageSize}`;
    // //   this.setState({loading: true})
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // console.log(parsedData.articles);
    // this.setState({ articles: parsedData.articles,
    //      totalResults: parsedData.totalResults,
    //     //  author: parsedData.author,
    // });
    // console.log('update func called by compdm');
    this.setState({
      page: this.state.page + 1,
    });
    this.updatepage();

    // })
  }

  handleprevclick = async () => {
    // console.log("previpus");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=06bd44ba42594f10b41ca40c8aaba1d6&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true})
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // console.log(parsedData.articles);
    // // this.setState({ articles: parsedData.articles });
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false
    // });
    this.setState({
      page: this.state.page - 1,
    });
    this.updatepage();
  };

  handlenextclick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=06bd44ba42594f10b41ca40c8aaba1d6&page=${
    //   this.state.page + 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({ loading: true });
    // console.log(parsedData);
    // console.log(parsedData.articles);
    // //   this.setState({ articles: parsedData.articles });
    // this.setState({
    //   page: this.state.page + 1,
    //   articles: parsedData.articles,
    //   loading: false,
    // });
    console.log("next clicked");

    this.setState({
      page: this.state.page + 1,
    });
    this.updatepage();
  };

  render() {
    return (
      <>

        <div className="container mt-5 py-4" style={{paddingTop: "30px"}}>
        <div className="container d-flex justify-content-between" >
          <button
            disabled={this.state.page <= 1 ? 1 : 0}
            type="button"
            className="btn btn-success btn-sm"
            onClick={this.handleprevclick}
          >
            &larr;Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
                ? 1
                : 0
            }
            type="button"
            className="btn btn-success btn-sm"
            onClick={this.handlenextclick}
          >
            {console.log(this.state.totalResults/ this.props.pageSize)}
            Next&rarr;
          </button>
        </div>
          <h1 className="text-center my-4">
            News-Now Top-Headlines from{" "}
            <span className="text-primary" >{this.capfstltr(this.props.category)}</span> Category
          </h1>
          <div className="text-center">{this.state.loading && <Spinner />}</div>
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div
                    className="col-md-4 d-flex justify-content-center"
                    key={element.url}
                  >
                    <NewsItem
                      title={element.title ? element.title : " "}
                      description={
                        element.description ? element.description : " "
                      }
                      imageUrl={
                        !element.urlToImage
                          ? "https://idsb.tmgrup.com.tr/ly/uploads/images/2020/03/04/23480.jpg"
                          : element.urlToImage
                      }
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>

          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1 ? 1 : 0}
              type="button"
              className="btn btn-dark"
              onClick={this.handleprevclick}
            >
              &larr;Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil( this.state.totalResults / this.props.pageSize)
                  ? 1
                  : 0
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handlenextclick}
            >
              Next&rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
