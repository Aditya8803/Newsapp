import React from 'react'

const NewsItem = (props)=> {

    let {title, description,imageUrl,newsUrl,author,date,source} = props;
   
    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"50%", zIndex:'1'}}>{source}</span>
          <img src={imageUrl?imageUrl:"https://tse2.mm.bing.net/th?id=OIP.ViHhuq4acKoGNBhoOMvikgHaJX&pid=Api&P=0&h=180"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>
      </div>
    )
  }
export default NewsItem
