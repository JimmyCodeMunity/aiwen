import { createClient } from '@sanity/client';
import { client } from '../sanity';


let sanityQuery = (query, params) => client.fetch(query, params);

export const getNews = () => {
    const mynews =  sanityQuery(`
    *[_type == 'news']{
        ...,
        
           
    }
    `)
    // console.log("mynews",mynews)
    return mynews;
}
export const getNewsById = (id) => {
    console.log("selected",id)
    return sanityQuery(`
    *[_type == 'post' && _id == "${id}"]{
        ...,
        
        
           
    }
    `)
}