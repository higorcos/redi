import axios from 'axios'
const idPortal = '001'
export default axios.create({
  baseURL: `http://ec2-54-207-215-247.sa-east-1.compute.amazonaws.com:8004/${idPortal}` 
  //baseURL: `http://localhost:8004/${idPortal}` 
  })

  
 