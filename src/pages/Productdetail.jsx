import { useEffect, useState } from "react";
import { useParams } from "react-router";




function Productdetail() {

    const { id } = useParams()
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)


    useEffect(() => {
        setNotFound(false)
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then((res) => {
                // console.log(res)
                setProduct(res)
                setLoading(false)
                setNotFound(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(true)
                setNotFound(true)
            })
            ;

    }, [])

    return (
        <>

            <div>

                {
                    loading ? <h1 className="text-3xl font-bold font-mono mt-50 ">Loading.....</h1>
                        : notFound ? <h1 className="text-3xl font-bold font-mono mt-50 ">Product NotFound</h1>
                            :

                            <section className="text-gray-600 body-font overflow-hidden ">
                                <div className="container px-5 py-24 mx-auto ">
                                    <div className="lg:w-4/5 mx-auto flex flex-wrap border rounded shadow p-5">
                                        <img
                                            alt="ecommerce"
                                            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                                            src={product.thumbnail}
                                        />
                                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                                BRAND NAME
                                            </h2>
                                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                                {product.title}
                                            </h1>
                                            <div className="flex mb-4">
                                                
                                            </div>
                                            <p className="leading-relaxed">
                                                {product.description}
                                            </p>

                                            <div className="flex mt-20">
                                                <span className="title-font font-medium text-2xl text-gray-900">
                                                    {product.price}
                                                </span>
                                                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                                    Button
                                                </button>
                                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                                    <svg
                                                        fill="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        className="w-5 h-5"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                }


            </div>

        </>
    )
}

export default Productdetail;