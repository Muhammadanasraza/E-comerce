import { useEffect, useState } from "react";
import Card from "../components/Card";
import { data } from "autoprefixer";
import CategoryBox from "../components/CategoryBox";

function Products() {

    const [products, setProducts] = useState([])
    const [categoreis, setCategoreis] = useState([])
    const [chosenCategory , setChosenCategory] = useState("All")

    const [loading, setLoading] = useState(true)


    // for product rendring
    // console.log(products)
    useEffect(() => {

        const url =  chosenCategory === 'All' ? 'https://dummyjson.com/products' 
        : `https://dummyjson.com/products/category/${chosenCategory}`


        fetch(url)
            .then(res => res.json())
            .then((data) => {
                setProducts(data.products);
                setLoading(false)
            })
            .catch((err) => {
                console.log(err);
                setLoading(false)
            })
    }
        , [chosenCategory])
    // for product rendring

    // for catogery

    useEffect(() => {



        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then((data) => {
                setCategoreis(data);
                setLoading(false)
                // console.log('category=>', data)
            })
            .catch((err) => {
                console.log(err);
                setLoading(false)
            })
    }
        , [])
    // for catogery



    return (
        <>

            <div className="container mx-auto">
                {loading ? (
                    <h1 className="text-3xl font-bold font-mono mt-50 ">Loading.....</h1>
                )
                    : (
                        <div >
                            <div className="flex flex-wrap -m-4  mt-10 ">
                                <CategoryBox 
                                onClick={()=> setChosenCategory("All")}
                                isChosen={chosenCategory === 'All'}
                                title={"All"} 
                                category={{
                                    slug: 'All',
                                    name: 'All',
                                }}
                                />

                                
                                {categoreis.map((category ) => (
                                    <CategoryBox 
                                    onClick={()=> setChosenCategory(category.slug)}
                                    isChosen={category.slug ===  chosenCategory}
                                    title={category.name} key={category.slug} />
                                ))}
                            </div>



                            <div className="flex flex-wrap -m-4  mt-10 ">
                                {products.map((items) => (
                                    <Card items={items} key={items.id} />
                                ))}
                            </div>
                        </div>
                    )
                }

            </div >
        </>
    )
}




export default Products;