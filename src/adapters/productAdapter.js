export const createAdapterProductFromFirestore = (doc) => {
    const data = doc.data()

    const formattedProduct = {
        id: doc.id,
        name: data.name,
        category: data.category,
        img: data.img,
        price: data.price,
        description: data.description
    }

    return formattedProduct
}