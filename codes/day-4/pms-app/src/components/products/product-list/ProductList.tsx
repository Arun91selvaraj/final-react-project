import { Product } from '../../../models/product'
import ProductDetail from '../product-detail/ProductDetail'
import { useDispatch, useSelector } from "react-redux";
import { ProductsStateType, failureActionCreator, initiateRequestActionCreator, successActionCreator } from '../../../redux';
import { getProducts } from '../../../services/productservice';

const ProductList = () => {

    const dispatch = useDispatch()
    const { isRequestComplete, errorMessage, products } = useSelector(
        (storeState: ProductsStateType) => storeState
    )

    const getData = () => {

        const initRequestAction = initiateRequestActionCreator()
        dispatch(initRequestAction)

        getProducts()
            .then(
                (resp) => {
                    const apiResponse = resp.data
                    if (apiResponse.data !== null) {
                        const successAction = successActionCreator(apiResponse.data)
                        dispatch(successAction)
                    } else {
                        const failureAction = failureActionCreator(
                            apiResponse.message)
                        dispatch(failureAction)
                    }
                },
                (err: Error) => {
                    const failureAction = failureActionCreator(err.message)
                    dispatch(failureAction)
                }
            )
    }

    let plDesign: JSX.Element | JSX.Element[];
    if (!isRequestComplete)
        plDesign = <span>Loading...please wait</span>
    return plDesign
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