import { ProductsTable } from "@component/components/commonComponents/table"
import { fetchProducts } from "../lib/fetchDatabase"

const productTableHeadData = [
    {
        theadRow: ['Title', 'Description', 'Price', 'Stock', 'Action']
    }
]


const ProductsPage = async () => {

    const productsList = await fetchProducts()

    return (
        <div>
            <div>
                {
                    (productsList?.products?.length && productsList?.products?.length > 0) ?
                        <ProductsTable thead={productTableHeadData} tbody={JSON.stringify(productsList?.products)}></ProductsTable> :
                        <div className="mar-t-16 flex align-center not-found-container">
                            <div className="width-full not-found">There are no products. Please click on add new products.</div>
                        </div>
                }
            </div>

        </div>
    )
}

export default ProductsPage