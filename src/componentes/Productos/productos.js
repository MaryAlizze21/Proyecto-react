import React from 'react'
import './productos.css'

export const ProductosLista = () => {
    return (
        <>
        <h1 className='title'>PRODUCTOS</h1>
        <div className='productos'>
            <div className='producto'>
                <a href='#'>
                    <div className="producto_img">
                        <img src="img1.png" alt="" />
                    </div>
                </a>
                <div className='producto-footer'>
                    <h1>JOJO BIZARRE ADVENTURE</h1>
                    <p>Polera</p>
                    <p className='price'>$120</p>
                </div>
                <div className='buttom'>
                    <div><a href='#' className='btn'>Detalles</a></div>
                    <button className='btn-add-cart'>Añadir al Carrito</button>
                </div>
            </div>
            <div className='producto'>
                <a href='#'>
                    <div className="producto_img">
                        <img src="img2.png" alt="" />
                    </div>
                </a>
                <div className='producto-footer'>
                    <h1>ISOKA</h1>
                    <p>Polera</p>
                    <p className='price'>$90</p>
                </div>
                <div className='buttom'>
                    <div><a href='#' className='btn'>Detalles</a></div>
                    <button className='btn-add-cart'>Añadir al Carrito</button>
                </div>
            </div>
            <div className='producto'>
                <a href='#'>
                    <div className="producto_img">
                        <img src="img3.png" alt="" />
                    </div>
                </a>
                <div className='producto-footer'>
                    <h1>MONKEY D. LUFFY</h1>
                    <p>Polera</p>
                    <p className='price'>$135</p>
                </div>
                <div className='buttom'>
                    <div><a href='#' className='btn'>Detalles</a></div>
                    <button className='btn-add-cart'>Añadir al Carrito</button>
                </div>
            </div>
        </div>
        </>

    )
}

export default ProductosLista;
