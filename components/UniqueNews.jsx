

import React, { useState } from "react";
 //import api from "../pages/api/api"; 
const local = "https://api-s3-tss.s3.amazonaws.com/";
  
export default function NewsUnique(props){  
    const [newsLast,setNewsLast] = useState([])
    const [dataFormat,setDataFormat] = useState('')
    
   
   


   const dataFor = (dateReq)=>{
  
    const date = new Date(dateReq);
    const formatDate = date.getDate() + "/" + monthDigit(date) + "/" + date.getFullYear();
    
    if (dataFormat === "") {
      setDataFormat(formatDate);
    }

    function monthDigit(dateReq) {
      const dateString = dateReq.getMonth() + 1;
      if (dateString >= 10) {
        return dateString;
      } else {
        return "0" + dateString;
      }
    }
      
     return dataFormat
  
  }

 
    return (
      <>
        {props.result.map((news, i) => (
          <div className="card-unique-all" key={i}>
         
            <div className="section-unique-title">
              <h2>
                <img
                  className="icon-title"
                  alt="notícias"
                  src="/icons/seta-direita.svg"
                />

                {news.TITULO}
              </h2>
            </div>
            <div>
              <div className="card-unique-news-data">
                <div className="card-info">
                <p>{dataFor(news.DATA_POST)}</p>
                <div className="card-views-unique">
                  <p>{news.VISULIZACAO}</p>
                  <img
                    alt="views"
                    src="/icons/views.svg"
                    className="icon-views icon-views-unique"
                  />
                </div>
                </div>
                <div className="card-share-unique">
                 
                  <a
                    href={`https://api.whatsapp.com/send?text=http://ec2-54-207-215-247.sa-east-1.compute.amazonaws.com:8000/noticias/${news.ID}`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      alt="views"
                      src="/icons/whatsapp.svg"
                      className="icon-share-unique"
                    />
                  </a>
                </div>
                
              </div>
              <hr className="hr-news-unique"></hr>
            </div>
            <div className="section-unique-news">
              <div className="cards-unique-news" key={i}>
                <div>
                  <img
                    alt="imagem da notícia"
                    src={local + news.IMG}
                    className="card-unique-img"
                  />
                </div>
                <div className="card-unique-txt">
                  <div className="title-unique-body"></div>
                  <div
                    className="news-unique-body"
                    dangerouslySetInnerHTML={{ __html: news.CORPO_TEXTO }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }

