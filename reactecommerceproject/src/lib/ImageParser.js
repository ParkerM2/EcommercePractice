
const ImageParser = (data) => {
    // parsing out corresponding types of product images
    let newData = {
         outDoorSignsArray : [],
         windowSignsArray : [],
         cardDecalsArray : [],
         vehicleWrapsArray : [],
         tShirtsArray : [],
    }
    
    data.map((product) => {
        if (product.categories[0].slug === 't-shirts') {
            newData.tShirtsArray.push(product)
        } if (product.categories[0].slug === 'vehicle') {
            newData.vehicleWrapsArray.push(product)
        } if (product.categories[0].slug === 'car-decals') {
            newData.cardDecalsArray.push(product)
        } if (product.categories[0].slug === 'window-lettering') {
            newData.windowSignsArray.push(product)
        } if (product.categories[0].slug === 'outdoor-signs') {
            newData.outDoorSignsArray.push(product)
        }
        return newData;
    })
    
    console.log(newData, "newdata")
    
    return newData
    
}

export default ImageParser;