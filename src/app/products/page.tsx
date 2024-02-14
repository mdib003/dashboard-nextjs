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
            <ProductsTable thead={productTableHeadData} tbody={productsList?.products}></ProductsTable>
        </div>
    )
}

export default ProductsPage