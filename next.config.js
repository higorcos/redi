module.exports ={
   rewrites() {
    return [
      {
        source: '/noticia/',
        destination: '/',
      },  {
        source: '/',
        destination: 'http://localhost:8000/',
      },
    ]
  },
}  