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
    },
    {
        id: 6,
        name: 'Teclado Mecanico Logitech G Pro Ed KDA Lol Lightsync Rgb',
        price: 17099,
        img: './images/TecladoMecanicoLogitechKDA.png',
        stock: 5,
        description: `Descripción
            ESPECIFICACIONES FÍSICAS
            • Altura: 34 mm
            • Anchura: 361 mm
            • Profundidad: 153 mm
            
            INTERRUPTORES GX BLUE CLICK PERCEPTIBLE
            • Distancia de actuación: 2-0 mm
            • Fuerza de actuación: 50 g
            
            INTERRUPTORES GX BLUE CLICK PERCEPTIBLE
            • Distancia de actuación: 2,0 mm
            • Fuerza de actuación: 50 g
            • Recorrido total: 3,7 mm
            
            OTRAS FUNCIONES
            • Diseño sin teclado numérico inspirado en los profesionales
            • Interruptores mecánicos con click perceptible GX Blue
            • Iluminación RGB LIGHTSYNC2Las funciones avanzadas requieren el software para juegos Logitech G HUB
            • Perfil de iluminación integrado3Las funciones avanzadas requieren el software para juegos Logitech G HUB
            • Cable extraíble de 1,8 m (6 ft)
            • 12 teclas F programables
            • Velocidad de respuesta de 1 ms`
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

export const getItem = () => {
    return new Promise (resolve => {
        setTimeout (() => {
            resolve(products.find(prod => prod.id === 6))
        }, 2000)
    }) 
}
