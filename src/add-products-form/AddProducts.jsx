

const AddProducts = () => {
    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const allFormDatas = new FormData(form);
        const datas = Object.fromEntries(allFormDatas.entries());
        console.log(datas);

        // send data to db
        fetch('http://localhost:3000/products', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datas)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);

            })

    }
    return (
        <div className='bg-[#4e4d4d] pt-[10%] pb-5 '>
            <h2 className='text-center text-4xl underline text-[#fff] mb-5'>Add Product</h2>
            <div className='flex gap-5 justify-center px-[20%] items-center'>
                <form onSubmit={handleAddProduct} className='w-[100%]'>
                    <div className='mb-2'>
                        <label className='text-[#fff] font-bold'>Product Title</label>
                        <br />
                        <input className=' w-[100%] rounded-sm pl-2 py-1 border-1 border-[#ffffff86] text-[#fff] outline-0' type="text" placeholder='input product title' name='title' />
                    </div>
                    <div className='mb-2'>
                        <label className='text-[#fff] font-bold'>Name</label>
                        <br />
                        <input className=' w-[100%] rounded-sm pl-2 py-1 border-1 border-[#ffffff86] text-[#fff] outline-0' type="text" placeholder='product Name' name='name' />
                    </div>
                    <div className='mb-2'>
                        <label className='text-[#fff] font-bold'>category</label>
                        <br />
                        <input className=' w-[100%] rounded-sm pl-2 py-1 border-1 border-[#ffffff86] text-[#fff] outline-0' type="text" placeholder='Product category' name='category' />
                    </div>
                    <div className='mb-2'>
                        <label className='text-[#fff] font-bold'>Material Type</label>
                        <br />
                        <input className=' w-[100%] rounded-sm pl-2 py-1 border-1 border-[#ffffff86] text-[#fff] outline-0' type="text" placeholder='type meterial' name='material' />
                    </div>
                    <div className='mb-2'>
                        <label className='text-[#fff] font-bold'>capacity</label>
                        <br />
                        <input className=' w-[100%] rounded-sm pl-2 py-1 border-1 border-[#ffffff86] text-[#fff] outline-0' type="text" placeholder='Product capacity' name='capacity' />
                    </div>
                    <div className='mb-2'>
                        <label className='text-[#fff] font-bold'>Product Image Link</label>
                        <br />
                        <input className=' w-[100%] rounded-sm pl-2 py-1 border-1 border-[#ffffff86] text-[#fff] outline-0' type="url" placeholder='input url' name='img-url' />
                    </div>
                    <div className='mb-2'>
                        <label className='text-[#fff] font-bold'>Product Description</label>
                        <br />
                        <textarea className=' w-[100%] rounded-sm pl-2 py-1 border-3 text-[#fff] outline-0' type="text" placeholder='type your product description' name='description' />
                    </div>
                    <input type="submit" className='bg-[#fff] py-2 w-full rounded-xs font-bold cursor-pointer text-[#5f5f5f]' value='Add Product' />
                </form>
                <div>
                    <h2 className='text-3xl text-[#fff] font-bold'>Add a new product</h2>
                    <p className='text-[#b1a8a8]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur consequuntur facere, eum deserunt perspiciatis eaque voluptates possimus error similique nam provident sunt adipisci, itaque quae quod. Saepe facere repudiandae doloremque.</p>
                </div>
            </div>
        </div>
    )
}

export default AddProducts
