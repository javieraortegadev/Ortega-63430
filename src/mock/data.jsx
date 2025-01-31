const products = [
    {
        id:'01',
        name: 'Camisa Negra Mujer',
        price: 34990,
        category: 'mujer',
        description: 'Camisa de algodon de color negro para mujer',
        img: 'https://i.postimg.cc/NfPCnNFr/image.png',
        stock: 10
    },
    {
        id:'02',
        name: 'Anillo Golondrina More Amor',
        price: 59990,
        category: 'hombre',
        description: 'El anillo "Golondrina" combina elegancia con estilo tradicional americano, conservando la línea y un elemento clásico. Elaborado con materiales de alta calidad (100% plata 950), presenta un acabado a mano que refleja el compromiso de nuestra marca con el arte local',
        img: 'https://i.postimg.cc/fbYHJDKx/image.png',
        stock: 3
    },
    {
        id:'03',
        name: 'Polera Manga Corta 250gr Hombre Tattoed Angel Gris',
        price: 29990,
        category: 'hombre',
        description: 'La Polera de Tattoed Angel, una verdadera obra de arte en tela. Está confeccionada con un 100% de algodón pesado (Heavy Cotton) de alto gramaje (250 gramos), lo que la hace considerablemente más robusta y de una calidad excepcional en comparación con las camisetas estándar.',
        img: 'https://i.postimg.cc/1Xd0vjBm/image.png',
        stock: 14
    },
    {
        id:'04',
        name: 'Tote Bag Dragon Mujer Gris',
        price: 14990,
        category: 'sale',
        description: 'El Tote Bag Dragón, es una prenda 100% de algodón que se convertirá en tu compañero inseparable para llevar lo que necesites en tu día a día.',
        img: 'https://i.postimg.cc/xjpPjX2w/image.png',
        stock: 16
    }
]

//crear la promesa y exportar

export const getProducts = () => {
    let error= false
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!error) {
                resolve(products)
            } else {
                reject('Error al obtener los productos')
            }
        }, 2000)
    })
}

export const getOneProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            //dinamica y recomendable
            let prod = products.find((product) => product.id === id)
            resolve(prod)
            // version harcodeada: resolve(products[0])
        }, 2000)
    })
}