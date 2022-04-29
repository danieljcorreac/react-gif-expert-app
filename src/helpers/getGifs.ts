import { Datum } from "../interfaces/GifsSearchResponse";
import Image from "../interfaces/Image";

export default async (category: string): Promise<Image[]> => {
    console.log('getGifs');
    
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=xEOWFmcfppZDMAonni3H0hzTRrHGDgMh`;
    const resp = await fetch(url);
    const { data } = await resp.json() as { data: Datum[] };

    return data.map(({ id, title, images}) => {
        return {
            id: id,
            title: title,
            url: images?.downsized_medium.url
        };
    });
};