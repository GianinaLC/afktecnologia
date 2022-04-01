const products = [
    {
        id: 1,
        name: 'Mouse Logitech 203 Prodigy',
        price: 3237,
        img: './images/MouseLogitech203Prodigy.png',
        stock: 10,
        description: 'descripcion'

    },
    {
        id: 2,
        name: 'Mouse Logitech G502 KDA',
        price: 6899,
        img: './images/MouseLogitechG502KDA.png',
        stock: 6,
        description: 'descripcion'

    },
    {
        id: 3,
        name: 'Mouse Yindiao A2 Black',
        price: 1595,
        img: './images/MouseYindiaoA2Black.png',
        stock: 8,
        description: 'descripcion'

    },{
        id: 4,
        name: 'Cooler 12cm Rgb 120mm Fan',
        price: 1300,
        img: './images/FanCoolerSeisa120mm.png',
        stock: 4,
        description: 'descripcion'

    },
    {
        id: 5,
        name: 'Cable de Red 5 metros e5',
        price: 650,
        img: './images/CableRed5mt-e5.png',
        stock: 10,
        description: 'bobina'

    }
]
//export nombrado
export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout (() => {
            resolve(products)
        }, 2000)
    }) 
}
