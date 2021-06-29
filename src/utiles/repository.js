import {api} from './baseUrl';

  const getfeeds =async ()=>{
   return await api.get('/') 
}

export const repository= {
   getfeeds
}