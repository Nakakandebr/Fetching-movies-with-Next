import exp from "constants";
import {NEXT_PUBLIC_IMAGE_BASE_URL } from "@/app/config";

export const fetchMovies =async() =>{
    try{
    const response = await fetch (`/api/get-movies`,{
        method:'GET',
    })
    const result = await response.json();
    return result;
    }
    catch(error){
        return error;
    }
    }
export const fetchCategories = async() =>{
    try{
        const response = await fetch (`/api/get-genres`,{
            method:'GET',
        })
        const result = await response.json();
        return result;
    }
    catch(error){
        return error;
    }
}

  

export async function getMovieDetails(movieId:number) {
    const url=`/api/getMovieDetails/${movieId}`
    try{
        const response=await fetch(url)
        if(!response.ok){
            return `movie with id ${movieId} not found`
        }
        const result=await response.json()
        return result;
    }
    catch(error){
        return error
    }
}


export const getNextPublicImageBaseUrl = 
(path: string) => {
    return `${NEXT_PUBLIC_IMAGE_BASE_URL}${path}`;
  };

