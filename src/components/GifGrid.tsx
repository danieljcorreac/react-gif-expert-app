import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

type Props = {
    category: string
}

const GifGrid = ({ category }: Props) => {

    const { data:images, loading } = useFetchGifs(category);
       
    return (
        <>
            <h3 className="animate__animated animate__fadeIn animate__faster">{ category }</h3>

            { loading && <p className="animate__animated animate__flash animate__faster">Loading...</p> }

            <div className="card-grid">
                
                {
                    images.map(image => 
                        <GifGridItem 
                            key={ image.id }
                            { ...image } />
                    )
                }
            </div>
        </>
    )
}

export default GifGrid