const Shimmer = () => {
    return (
        <div className='flex flex-wrap' data-testid="shimmer">
            {
                Array(10).fill("").map((e, index) => <div className="w-52 h-56 bg-gray-300 m-2" key={index}></div>)
            }

        </div>
    )
}

export default Shimmer;