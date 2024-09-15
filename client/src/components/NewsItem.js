import React, { Component } from 'react';
import './NewsItem.css'

export class NewsItem extends Component {

    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
        <>
        <div className="news-card">
        <img src={!imageUrl?"https://bit.ly/3gGwA8b":imageUrl} className="news-img" alt="Server error"/>
        <div className="news-body">
        <h5 className="news-title">{title}</h5>
        <p className="news-desc">{description}...</p>
        <a rel="noreferrer" href={newsUrl} className="read-more-button" target="_blank">Read More</a>
        </div>
        </div>
        </>
        )
    }
} 
export default NewsItem