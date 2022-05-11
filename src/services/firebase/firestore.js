import { firestoreDb } from "./index"
import { getDocs, query, collection, where, getDoc, doc } from "firebase/firestore"
import { createAdapterProductFromFirestore } from "../../adapters/productAdapter"

export const getProducts = (categoryId) => {
    return new Promise ((resolve,reject) => {
        const collectionRef = categoryId 
        ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
        : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                return createAdapterProductFromFirestore(doc)
            })
            resolve(products)
        })
        .catch(error => {
            reject(error)
        })
    })
}

export const getItem = (productId) => {
    return new Promise ((resolve,reject) => {

        getDoc(doc(firestoreDb, 'products', productId)).then(response => {
            const product = { id: response.id, ...response.data()}
            resolve(product)
        })
        .catch(error => {
            reject(error)
        })
    })
}
