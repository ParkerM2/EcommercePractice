const ImageParser = (data) => {
    let galleryArray = [];
    // separate data into active / non active products is Arr of objects (data[i].active)
    data.map((product) => {
        if (product.active === false) {
            galleryArray.push(product)
        }
        return galleryArray;
    });
    
    console.log(galleryArray)
    // confirmed ( productArray ) ( galleryArray ) 
    // product array contains objects that are for sell
    // gallery array contains objects that are for the image gallery
    // Category = galleryArray[i].categories[i].name  also has .id for a corresponding random id
    return galleryArray;
    
}

export default ImageParser;