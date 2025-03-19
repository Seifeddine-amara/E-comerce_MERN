import productModel from "../models/productModel";

export const getAllProducts = async () => {
    return await productModel.find();
};

export const seedInitialProducts = async () => {
    try{
        const products = [
            {
                title: "Dell Laptop",
                image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g16-7630/media-gallery/black/notebook-g16-7630-nt-black-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3500&hei=2625&qlt=100,1&resMode=sharp2&size=3500,2625&chrss=full&imwidth=5000",
                price: 1500,
                stock: 10
            },
            /* {
                title: "Product 2",
                image: "image2.jpg",
                price: 130,
                stock: 50
            },
            {
                title: "Product 3",
                image: "image3.jpg",
                price: 120,
                stock: 89
            },
            {
                title: "Product 4",
                image: "image4.jpg",
                price: 160,
                stock: 70
            },
            {
                title: "Product 5",
                image: "image5.jpg",
                price: 120,
                stock: 30
            },
            {
                title: "Product 6",
                image: "image6.jpg",
                price: 106,
                stock: 87
            },
            {
                title: "Product 7",
                image: "image7.jpg",
                price: 300,
                stock: 20
            },
            {
                title: "Product 8",
                image: "image8.jpg",
                price: 400,
                stock: 60
            },
            {
                title: "Product 9",
                image: "image9.jpg",
                price: 10,
                stock: 90
            },
            {
                title: "Product 10",
                image: "image10.jpg",
                price: 900,
                stock: 60
            } */
        ];
        const existingProducts = await getAllProducts();
        if (existingProducts.length === 0) {
            products.forEach(async (product) => {
                await productModel.create(product);
            });
            // OR ==> await productModel.insertMany(products);
        };
    }catch(err){
        console.log("cannot see database ",err);
    }


}


