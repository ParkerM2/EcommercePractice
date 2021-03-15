const ProductParser = (data) => {
    // empty product array
    let productArray = [];
    // Pull out the products that are active and put into a new array (data[i].active)
    data.map((product) => {
       if (product.active === true) {
            productArray.push(product)
        }
        return productArray;
    });
    // if I want to separate by categories in the future could possible add this in as a value or prop
    // Category = galleryArray[i].categories[i].name  also has .id for a corresponding random id

    return productArray;
}

export default ProductParser;