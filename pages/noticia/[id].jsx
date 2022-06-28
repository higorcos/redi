import Head from 'next/head'
import NavMenu from "../../components/Navbar";
import Unique from "../../components/UniqueNews";
import api from '../api/api'


export async function getStaticProps(context){
  const {params} = context
  

  const result = await api
  .post(`/news/unique/${params.id}`)
  .then((res) => {
    const result = res.data;
    if (result.err) {
    } else {
      
      return result.res;
    }
  })
  .catch((err) => console.log("Ocorreu um erro, tente novamente ! DB"));
 
  return {
    props:{result}
  }

} 
export async function getStaticPaths(){
   const result = await api.get('/news').then(res=>{

    const result = res.data
    if(result.err){
     
    }else{
      return result.res
    }

    }).catch((err) => alert('Ocorreu um erro, tente novamente ! DB'))
     
    const paths = result.map((news)=> {
      return {
        params: {
          id: `${news.ID}`
        }
      }
    })
    return {paths,fallback:true}//atenção
}


export default function MyApp({result}) {

  



  return(
    <>
    <Head>
            <title>{result[0].TITULO}</title>             
            <meta property="fb:app_id" content="00"/>
            <meta property="og:title" content={result[0].TITULO}/>
            <meta property="og:description" content="Fique por dentro das informações"/>
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://www.raposa.ma.gov.br"/>
            <meta property="og:site_name" content="raposa.ma.gov.br"/>
            <meta property="og:image" content={`https://api-s3-tss.s3.amazonaws.com/${result[0].IMG}`}/>
    </Head>
    <NavMenu/> 
       
     <Unique result={result}/> 
    </>
  )
} 
    