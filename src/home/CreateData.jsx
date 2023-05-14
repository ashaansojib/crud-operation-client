import React from 'react';

const CreateData = () => {

    const handleAddPost = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const image = form.image.value;
        const date = form.date.value;
        const result = { name, quantity, image, date }

        fetch('http://localhost:9988/cruds', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(result)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                alert('the product added on mongodb')
            }
        })
        form.reset()
    }
    return (
        <div className="card-body w-[550px] mx-auto">
            <form onSubmit={handleAddPost}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input type="text" name='quantity' placeholder="quantity" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image Link</span>
                    </label>
                    <input type="text" name='image' placeholder="Images link here" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Booking Date</span>
                    </label>
                    <input type="date" name='date' placeholder="quantity" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Data</button>
                </div>
            </form>
        </div>
    );
};

export default CreateData;