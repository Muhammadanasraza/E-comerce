function CategoryBox({ title, isChosen, onClick }) {


    // console.log(isChoosen)
    return (

        <>
            <div

                onClick={onClick}
                className={
                    `
                ${isChosen ? "bg-yellow-400 text-black" : "bg-white text-black"}
                font-sans border rounded p-2
        cursor-pointer hover:bg-amber-200 border-yellow-400  m-2`
                }>
                <h1>{title}</h1>
            </div>

        </>
    )
}

export default CategoryBox;