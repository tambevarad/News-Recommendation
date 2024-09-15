import React, { Component } from 'react'
import NewsItem from './NewsItem.js'
import PropTypes from 'prop-types'
import './News.css'

export class News extends Component {

    static defaultProptypes = {
        country: "in",
        pageSize: 8,
        catagory: "news",
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        catagory: PropTypes.string,
    }

    handleNextClick = async ()=>{
        if (!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        // let url=`https://gnews.io/api/v4/search?q=example&apikey=df753801ea75f417dd5ff0cc0d5f16a5&language=en&country=in&category=${this.props.catagory}&max=${this.props.pageSize}&page=${this.state.page + 1}`;
        let url=`https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business&page=${this.props.page + 1}&page_size=${this.props.pageSize}`;
        /* this.setState({loading:true}) */
        let data = await fetch(url, 
        {
            method: 'GET',
            headers: {
                'x-api-key': 'oN0WQxlpb0Eziw-WyB7p_uGe1-EOF9K70O37a7Dm4M8'
            },  
        });
        /* this.setState({loading:true}) */

        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles.slice(this.state.counter+8, this.state.counter+16),
         /*  loading:false */
        })
        console.log(this.state.articles)
        }
}

    handlePrevClick = async ()=>{
        let url=`https://gnews.io/api/v4/search?q=example&apikey=df753801ea75f417dd5ff0cc0d5f16a5&language=en&country=in&category=${this.props.catagory}&max=${this.props.pageSize}&page=${this.state.page - 1}`;
        /* this.setState({loading:true}) */
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            page:this.state.page - 1,
            articles: parsedData.articles,
           /*  loading:false */
        })
    }

    constructor(){
        super();
        this.state={
            articles: [],
         /*   loading: true, */
            page : 1
        }
    }

    async componentDidMount(){
        // let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.catagory}&apiKey=41c70d32a4914af3b34fc1404ca6654b&page=1&pageSize=${this.props.pageSize}`
        let url=`https://api.newscatcherapi.com/v2/latest_headlines?countries=US&lang=en&topic=${this.props.catagory}&page=1&page_size=${this.props.pageSize}`
        /* this.setState({loading:true}) */
        console.log(this.props.catagory)
        let data = await fetch(url, 
        {
            method: 'GET',
            headers: {
                'x-api-key': 'XBIigDEAxAVhS2BJGEnAtE2f9wFG0LTSDfoznRJxw1Q'
            },  
        });
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({articles: parsedData.articles, totalResults:parsedData.totalArticles, /* loading:false */})
        console.log(this.state.articles)
    }

    render() {
        return (
            <>
            <h1 className="container my-3 text-center">Todays Top Headlines</h1>
            {/* {this.state.loading && <Spinner/>} */}
            <div className="news-container">
               <div className="article-row">
               {this.state.articles.map((element)=>{
                    return(<div className="news-item-box" key = {element.url}>
                    <NewsItem title={element.title?element.title.slice(0,46):""} description={element.summary?element.summary.slice(0,88):""} imageUrl={element.media} newsUrl={element.link}/>
                </div>)
                })};
               </div>
            </div>
                <div className="container d-flex justify-content-between my-4">
                    <button disabled ={this.state.page<=1} className="btn btn-sm btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled ={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-sm btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </>
        )
    }
}

export default News
