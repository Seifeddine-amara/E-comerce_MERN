import productModel from "../models/productModel";

export const getAllProducts = async () => {
    return await productModel.find();
};

export const seedInitialProducts = async () => {
    try {
        const products = [
            {
                title: "Dell Laptop",
                image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g16-7630/media-gallery/black/notebook-g16-7630-nt-black-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3500&hei=2625&qlt=100,1&resMode=sharp2&size=3500,2625&chrss=full&imwidth=5000",
                price: 1500,
                stock: 10
            },
            {
                title: "HP 2",
                image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/FL2C-A-BB-00?qlt=90&wid=1253&hei=705&extendN=0.12,0.12,0.12,0.12&bgc=FFFFFFFF&fmt=jpg",
                price: 1300,
                stock: 50
            },
            {
                title: "APPLE 3",
                image: "https://m.media-amazon.com/images/I/51T9X6OH3vL._AC_UF1000,1000_QL80_.jpg",
                price: 1200,
                stock: 89
            },
            {
                title: "NOTEBOOK 4",
                image: "https://gfx3.senetic.com/akeneo-catalog/f/6/e/6/f6e64a862fe63da6a23c2f90d2e0ed5f3f3a1775_1626671_5V8_00009_image1.jpg",
                price: 1600,
                stock: 70
            },
            {
                title: "MSI 5",
                image: "https://saudewala.in/cdn/shop/collections/Laptop.jpg?v=1732216115&width=1296",
                price: 1200,
                stock: 30
            },
            {
                title: "SAMSUNG 6",
                image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Laptop-Go-3-001-3000x1682:VP2-859x540",
                price: 1060,
                stock: 87
            },
            {
                title: "ASUS 7",
                image: "https://s.yimg.com/uu/api/res/1.2/VAIXo0bjHGYVFAAaHAb8xw--~B/Zmk9c3RyaW07aD03MjA7dz0xMjgwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2024-10/64081ea0-9d46-11ef-bfff-7ba57dd7df36",
                price: 3000,
                stock: 20
            },
            {
                title: "Lenovo 8",
                image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g16-7630/pdp/laptop-g16-7630-intel-pdp-hero.psd?qlt=95&fit=constrain,1&hei=400&wid=570&fmt=png-alpha",
                price: 4000,
                stock: 60
            },
            {
                title: "HP 9",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWMp-he_HdG7IUZu3f2GvgTGR9p7_vmNu3ZQ&s",
                price: 1000,
                stock: 90
            },
            {
                title: "MAC 10",
                image: "https://media-assets.wired.it/photos/63cebcd121ef31da70b6d475/16:9/w_2560%2Cc_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg",
                price: 9000,
                stock: 60
            }
        ];
        const existingProducts = await getAllProducts();
        if (existingProducts.length === 0) {
            products.forEach(async (product) => {
                await productModel.create(product);
            });
            // OR ==> await productModel.insertMany(products);
        };
    } catch (err) {
        console.log("cannot see database ", err);
    }


}


