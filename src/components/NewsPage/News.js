import React, { useEffect, useState } from 'react'
import { NewsStyles } from './NewsStyles'
import moment from 'moment'
import ApiError from '../HandleErrors/ApiError'
import Spinner from '../HandleLoading/Spinner'
import HTMLReactParser from 'html-react-parser'
import { useSelector } from 'react-redux'
import newspic from '../../images/news.png'
import { colors } from '../utils/ThemeColors'
import { useNavigate } from 'react-router-dom'

const search = 'cryptocurrencies'

const News = ({voicePageNavigation,setVoicePageNavigation}) => {
  const[news,setNews] = useState('')
  const[error,setError] = useState('')
  const navigate = useNavigate()
  const theme = useSelector((state)=>state.theme.value)
  const newsinfo = useSelector((state)=>state.news.value)
  const source = (data) =>{
    if (!data) {
      return "Null"
    }else{
      return HTMLReactParser(data)
    }
  }
  const author = (data) =>{
    if (!data) {
      return "Unknown Author"
    }else{
      const newdata = HTMLReactParser(data.split('\n')[0])
      if (newdata.includes('https:')) {
        return (new URL(newdata)).hostname.replace('www.','')
      }else{
        return newdata
      }
    }
  }
  const titlecleaner = (data)=>{
    return(data.replace(/[^a-zA-Z0-9]/g," "))
  }
  const today = new Date()
  const date = today.getDate()
  const month = today.getMonth()
  const year = today.getFullYear()
  
  useEffect(()=>{
    if(!newsinfo){
      fetch(`https://newsapi.org/v2/everything?q=${search}&from=${year}-${month}-${date}&sortBy=publishedAt&apiKey=077a482d122145f1b9752f786bc91c87`)
      .then(response => {
        if(!response.ok){
          throw Error('Could not fetch data please check your network connection')
        }else{
          return response.json()
          
        }
        })
      .then(data =>{
        
        setNews(data.articles)
        setError('')
      })
      .catch(e =>{
        setError(e.message)
      })
    }else{
      setNews(newsinfo)
    }
    
  },[])
  useEffect(()=>{
    if (voicePageNavigation) {
      navigate(voicePageNavigation)
    }
    return ()=>{setVoicePageNavigation('')}
  },[voicePageNavigation])

  return (
    <NewsStyles colors = {colors(theme)}>
      <div className="header">
        <h2>Latest Crypto currency news</h2>
        <span className='moreInfo'>Click News Article for more information</span>
      </div>
      {news && !error && <div className="grid">
        {news.map((story,index)=>(
          <div className="article" key={index}>
            <a href={story.url} target="_blank" rel='noreferrer'>
              <div className="title">
                <h4>{titlecleaner(story.title) }</h4>
                <img src={story.urlToImage ||newspic} alt="newsImage" />
              </div>
              <p>
                {source(story.description) > 100 ? `${source(story.description).substring(0,100)}...`
                : source(story.description)}
              </p>
              <div className="provider">
                <div className="sources">
                  <span>{author(story.author)}</span>
                  <span>{source(story.source.name)}</span>
                </div>
                <span>{moment(story.publishedAt).startOf('ss').fromNow()}</span>
              </div>
            </a>
          </div>
        ))}
      </div>}
      {error && <ApiError error={error}/>}
      {!error && !news && <Spinner/>}
    </NewsStyles>
  )
}

export default News