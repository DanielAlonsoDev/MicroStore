import { collection, getDocs } from 'firebase/firestore';
import database from '../../Utils/data/firebase';


const getProductsAll = (action) => {
    fetch('https://run.mocky.io/v3/d9251a48-070a-4572-a9d7-3f9e6a1229bd')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            action(data.productData);
        });
}

// const getProductsByCategory = (requestedCategory, action) => {
//     if (requestedCategory === 'all') {
//         fetch('https://run.mocky.io/v3/d9251a48-070a-4572-a9d7-3f9e6a1229bd')
//             .then((response) => {
//                 return response.json();
//             })
//             .then((data) => {
//                 action(data.productData);
//             });
//     }
//     else {
//         fetch('https://run.mocky.io/v3/d9251a48-070a-4572-a9d7-3f9e6a1229bd')
//             .then((response) => {
//                 return response.json();
//             })
//             .then((data) => {
//                 const result = data.productData.filter(item => item.productCategory === requestedCategory);
//                 action(result);
//             });
//     }
// }

// const getProductById = (productIdParam, action) => {
//     //Solicitamos la informacion del producto
//     fetch('https://run.mocky.io/v3/d9251a48-070a-4572-a9d7-3f9e6a1229bd')
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             //Seleccionamos el Producto por el ID
//             const selected = data.productData.findIndex(item => item.productId === productIdParam);
//             //Seteamos los cambios en el estado
//             action(data.productData[selected]);
//         })
//         .catch(reason => {
//             console.log('Ocurrio un error: ' + reason);
//         });
// }

const getProductById = async (productIdParam, action) => {
    const productsCollection = collection(database, 'products');
    const productsDocs = await getDocs(productsCollection);

    const productList = productsDocs.docs.map((doc) => {
        let product = doc.data();
        product.productId = doc.id;
        return product;
    })

    console.log('Product list:', productList);

    const result = productList.filter(item => item.productId === productIdParam);
    action(result);

    console.log(result);
}


const getProductsByCategory = async (requestedCategory, action) => {
    const productsCollection = collection(database, 'products');
    const productsDocs = await getDocs(productsCollection);

    const productList = productsDocs.docs.map((doc) => {
        let product = doc.data();
        product.productId = doc.id;
        return product;
    })

    if(requestedCategory === 'all'){
        action(productList);
    }
    else {
        const result = productList.filter(item => item.productCategory === requestedCategory);
        action(result);
    }
}



export { getProductsAll, getProductsByCategory, getProductById };