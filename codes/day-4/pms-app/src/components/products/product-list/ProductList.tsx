import React, { Fragment, useState } from 'react'
import { Product } from '../../../models/product'
import { products } from '../../../data/products'
import ProductDetail from '../product-detail/ProductDetail'

const ProductList = () => {
    const [productRecords, setProductRecords] = useState<Product[]>(products)

    const design = (
        //<Fragment>
        <>
            <h2 className='text-muted'>List Of Products</h2>
            <br />
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th scope='column'>Image</th>
                        <th scope='column'>Name</th>
                        <th scope='column'>Price</th>
                        <th scope='column'>Rating</th>
                        <th scope='column'>Delete</th>
                    </tr>
                </thead>
                <tbody className='table-primary'>
                    {
                        productRecords
                            .map(
                                (p) => <ProductDetail product={p} key={p.productId} />
                            )
                    }
                </tbody>
            </table>
        </>
        //</Fragment>
    )

    return design
}

export default ProductList