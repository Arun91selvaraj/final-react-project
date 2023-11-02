import './ProductDetail.css'
import { Product } from '../../../models/product'

type ProductDetailPropType = {
    product: Product
}
const ProductDetail = (props: Readonly<ProductDetailPropType>) => {
    const { product } = props
    return (
        <tr>
            <td>
                <img src={product.imageUrl} alt="NA" title={product.productName} />
            </td>
            <td>{product.productName}</td>
            <td>{product.price}</td>
            <td>{product.starRating}</td>
            <td>
                <button type="button" className='btn btn-danger'>
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default ProductDetail