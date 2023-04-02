import './Navbar.css'

function NavBar() {
    return (
        <div className="nav-bar">
            <div className="left">
                <div className="logo">
                    <a href="/">
                        <img src="images.png" alt="Site logo" height="70" width="90"/>
                    </a>
                </div>

                <div>
                    <h1 className="titulo">Manga Store</h1>
                </div>

                <div className="container-cart-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="icon-cart"
                    >
                        <path
                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                    </svg>
                    <div className="count-products">
                    <span id="contador-productos">0</span>
                    </div>
                </div>
            </div>

            <div className='container-cart-products hidden-cart'>
                <div className='row-product'>
                    <div className='cart-product'>
                        <div className='info-cart-product'>
                            <span className='cantidad-producto-carrito'>1</span>
                            <p className='titulo-producto-carrito'>Polera Isoka</p>
                            <span className='precio-producto-carrito'>$70</span>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="icon-close"
                        >
                            <path
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </div>
                </div>

                <div className='cart-total'>
                    <h3>Total:</h3>
                    <span className='total-pagar'>$80</span>
                </div>
            </div>
        </div>
    );

    /*por modificar errores 
    const btnCart = document.querySelector('.container-cart-icon')
    const containerCartProducts = document.querySelector('.container-cart-products')

    btnCart.addEventListener('click', () => {
        containerCartProducts.classList.toggle('hidden-cart')
    })
    
    const cartInfo = document.querySelector('.cart-product')
    const rowProduct = document.querySelector('.row-product')
    
    //lista
    const productsList = document.querySelector('.productos')

    //variables
    let allProducts =[];

    const valorTotal = document.querySelector('.total-pagar')
    const countProducts = document.querySelector('#contador-productos')

    productsList.addEventListener('click', e => {

        if(e.target.classList.contains('btn-add-cart')){
            const product = e.target.parentElement;
    
            //Muestra resumen del producto
            const infoProduct ={
                quantity: 1,
                title: product.querySelector('h1').textContent,
                price: product.querySelector('p').textContent
            };
    
            const exits = allProducts.some(product => product.title === infoProduct.title)
    
            if (exits){
                const products = allProducts.map(product =>{
                    if(product.title === infoProduct.title){
                        product.quantity++;
                        return product
                    } else{
                        return product
                    }
                });
                allProducts = [...products];
            } else {
                allProducts = [...allProducts, infoProduct]
            }
            showHTML();
        }
    });

    rowProduct.addEventListener('click', (e) =>{
        if(e.target.classList.contains('icon-close')){
            const product = e.target.parentElement;
            const title = product.querySelector('p').textContent;
    
            allProducts = allProducts.filter(
                product => product.title !== title
            );
            console.log(allProducts)
            showHTML();
        }
    })

    const showHTML =() => {
        //funcion para limpiar
        rowProduct.innerHTML ='';
        //total de productos
        let total = 0
        let totalOfProducts = 0;
    
        //Productos
        allProducts.forEach(product =>{
            const containerProduct = document.createElement('div')
            containerProduct.classList.add('cart-product')
    
            containerProduct.innerHTML =`
                <div className='cart-product'>
                    <div className='info-cart-product'>
                        <span className='cantidad-producto-carrito'>${product.quantity}</span>
                        <p className='titulo-producto-carrito'>${product.title}</p>
                        <span className='precio-producto-carrito'>${product.price}</span>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="icon-close"
                    >
                        <path
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
            `;
            rowProduct.append(containerProduct); 
    
            total = total + parseInt(product.quantity * product.price.slice(1));
            totalOfProducts = totalOfProducts + product.quantity;
        });
    
        valorTotal.innerText = `$${total}`
        countProducts.innerText = totalOfProducts
    };*/
}

export default NavBar;