import { info } from "autoprefixer";
import { Link } from "react-router-dom";

function Card( {items} ) {
const {thumbnail,category,title ,price,id } = items;

// console.log(item)
    return (
        <>

         
                <Link to={`/productdetail/${id}`} className="lg:w-1/4 md:w-1/2 p-5 w-full mt-3 gap shadow rounded border ">
                    <a className="block relative h-48 rounded overflow-hidden">
                        <img
                            alt="ecommerce"
                            className="object-fill object-center  fit w-full h-full block"
                            src={thumbnail}
                        />
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {category}
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                            {title}
                        </h2>
                        <p className="mt-1">${price}</p>
                    </div>
                </Link>
                


       


        </>
    )
}

export default Card;