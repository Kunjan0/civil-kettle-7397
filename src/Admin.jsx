import React from 'react'


const Admin = () => {
    let styles = {
        border: "1px solid grey",
        width: "30%",
        margin: "auto",
        marginTop: "3%",
        marginBottom: "3%",
        borderRadius: "10px",
    }
    let btn = {
        backgroundColor: "grey",
        borderRadius: "7px",
        width: "27%"
    }
    let inpt={
        border: "1px solid grey",
        borderRadius: "5px",
    }

    let product_page = () => {
        return fetch("http://localhost:8080/Men", {
            method: "POST",
            headers: { "content-type": "application/json", },
            body: JSON.stringify({
                Image: "",
                Brand_Name: "",
                Price:"",
                color:""
            })
        })
    }

    return (
        <div style={styles}>
            <h1>Image:  <input style={inpt} type="url" placeholder='Image URL' /></h1>
            <h1>Brand Name: <input style={inpt} type="text" placeholder='Brand Name' /></h1>
            <h1>Price: <input style={inpt} type="number" placeholder='Price' /></h1>
            <h1>Color:  <input style={inpt} type="text" placeholder='Color' /></h1>
            <button style={btn}>Add Product</button>
            <div>

            </div>
        </div>

    )
}

export default Admin;