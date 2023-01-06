import React from "react";

// export class NewsItem extends Component {
  const NewsItem = (props)=>{
  // render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div
          className="card"
          style={{ width: "20rem", boxShadow: "0px 0px 6px black" }}
        >
          <img
            src={imageUrl}
            className="card-img-top"
            alt="..."
            style={{ height: "168px" }}
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
              <span className="position-absolute top-0  start-100  translate-middle badge rounded-pill bg-danger  d-md-flex ">
                {source}
                <span className="visually-hidden">unread messages</span>
              </span>
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "unknown"} on{" "}
                {new Date(date).toUTCString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-info fw-semibold rounded-3 border-dark btn-sm"
              rel="noreferrer"
              style={{ boxShadow: "2px 2px 2px black" }}
            >
              Read More&rarr;
            </a>
          </div>
        </div>
      </div>
    );
  // }
}

export default NewsItem;
