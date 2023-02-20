import React, { Component } from 'react'
// import './Newsitem.css';
export class Newsitem extends Component {
    
    render() {
        let { title, description, iUrl, newsUrl, author, date } = this.props;
        return (
            <div className='my-2'>
                <div className="card " >
                    <img src={!iUrl? "https://guwahatiplus.com/public/web/images/default-news.png" : iUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className='text-muted '>By {author?author:"Unknown"} on {date}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark btn2">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem