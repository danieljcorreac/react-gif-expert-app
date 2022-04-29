import { useEffect, useState } from "react"
import getGifs from "../helpers/getGifs";
import Image from "../interfaces/Image";

export interface GifsState {
    data: Image[],
    loading: boolean;
}

export default (category: string) => {

    const [state, setState] = useState<GifsState>({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then(images => setState({
                data: images,
                loading: false
            }));
    }, [category]);

    return state;
}