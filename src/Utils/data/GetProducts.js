import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';
import database from '../../Utils/data/firebase';

const getProductById = async (productIdParam, action, errorAction) => {
    const productsDoc = doc(database, 'products', productIdParam);
    const productsDocSnap = await getDoc(productsDoc);


    if (productsDocSnap.exists()) {
        //Creamos el objeto del producto
        let product = productsDocSnap.data();
        product.productId = productsDocSnap.id;
        action(product);
    }
    else {
        errorAction();
    }
}

const getProductsByCategory = async (requestedCategory, action) => {
    if (requestedCategory === 'all') {
        //Buscamos la totalidad de los productos
        const productsCollection = collection(database, 'products');
        const productsDocs = await getDocs(productsCollection);
        const productList = productsDocs.docs.map((doc) => {
            //Creamos el objeto del producto
            let product = doc.data();
            product.productId = doc.id;
            return product;
        })
        action(productList);
    }

    else {
        //Buscamos los productos que coincidan en la categoria
        const productsCollection = query(collection(database, 'products'), where('productCategory', '==', requestedCategory));
        const productsDocs = await getDocs(productsCollection);

        const productList = productsDocs.docs.map((doc) => {
            //Creamos el objeto del producto
            let product = doc.data();
            product.productId = doc.id;
            return product;
        })
        action(productList);
    }
}

const getCategories = async (action) => {
    const categoriesCollection = collection(database, 'categories');
    const categoriesDocs = await getDocs(categoriesCollection);

    const categoriesList = categoriesDocs.docs.map((doc) => {
        //Creamos el objeto del producto
        let category = doc.data();
        category.key = doc.id;
        return category;
    })

    action(categoriesList);
}

export { getProductsByCategory, getProductById, getCategories };
