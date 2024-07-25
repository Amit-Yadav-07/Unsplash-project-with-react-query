import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./Context";

const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`;

// console.log(import.meta.env.VITE_API_KEY);

const Gallery = () => {

    const { search } = useGlobalContext();

    const { data, isError, isLoading } = useQuery({
        queryKey: ['images', search],
        queryFn: async () => {
            const result = await axios.get(`${url}&query=${search}`);
            return result.data;
        }
    })

    if (isLoading) {
        return <h2 className="loading">Loading...</h2>
    }

    if (isError) {
        return <h2 className="error">There was an error</h2>
    }


    if (data.results.length < 1) {
        return <h2 className='no-result'>no result found</h2>
    }




    return <div className="gallery-container">
        {data.results.map((item) => {
            {/* console.log(item.alt_description) */ }
            return <div key={item.id} className="item"><img src={item?.urls?.regular} alt={item?.alt_description} /></div>
        })}
    </div>
}

export default Gallery;