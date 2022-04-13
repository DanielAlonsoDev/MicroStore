function getProductsAll(action) {
    fetch('https://run.mocky.io/v3/5e1f9727-b977-4bb8-b8fe-b8327fc445d6')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            action(data.productData);
        });
}

function getProductsByCategory(requestedCategory, action) {
    if (requestedCategory === 'all') {
        fetch('https://run.mocky.io/v3/5e1f9727-b977-4bb8-b8fe-b8327fc445d6')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                action(data.productData);
            });
    }
    else {
        fetch('https://run.mocky.io/v3/5e1f9727-b977-4bb8-b8fe-b8327fc445d6')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const result = data.productData.filter(item => item.productCategory === requestedCategory);
                action(result);
            });
    }
}

function getProductById(productIdParam, action) {
    //Solicitamos la informacion del producto
    fetch('https://run.mocky.io/v3/5e1f9727-b977-4bb8-b8fe-b8327fc445d6')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            //Seleccionamos el Producto por el ID
            const selected = data.productData.findIndex(item => item.productId === productIdParam);
            //Seteamos los cambios en el estado
            action(data.productData[selected]);
        })
        .catch(reason => {
            console.log('Ocurrio un error: ' + reason);
        });
}

export { getProductsAll, getProductsByCategory, getProductById };