type Props = {
    title: string,
    url: string
}

const GifGridItem = ({ title, url }: Props) => {
    return (
        <div className="card animate__animated animate__fadeIn animate__faster">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div> 
    )
}

export default GifGridItem