import { useEffect, useState } from "react";
import axios from 'axios';


const useGetProducts = (API) =>  {
//se trajo de producList.jsx
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await axios.get(API);
        setProducts(response.data);
        console.log(response);
    };
    return products;
    //se trajo de productList
};

export default useGetProducts;