import ProductDetail from '../product-detail/ProductDetail'
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from '../../../services/productservice';
import { useEffect } from 'react';
import { ProductsStateType } from '../../../redux/reduxtypes';
import { failureActionCreator, initiateRequestActionCreator, successActionCreator } from '../../../redux/actions';

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

    useEffect(
        () => {
            getData()
        },
        []
    )

    let plDesign: JSX.Element | JSX.Element[];
    if (!isRequestComplete)
        plDesign = <span>Loading...please wait</span>
    else if (errorMessage !== '')
        plDesign = <span>{errorMessage}</span>
    else if (!products || products.length === 0)
        plDesign = <span>No records</span>
    else {
        plDesign = (
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
                            products?.map(
                                (p) => <ProductDetail product={p} key={p.productId} />
                            )
                        }
                    </tbody>
                </table>
            </>
        )
    }

    return plDesign
}

export default ProductList