import { fetchProductById } from "@component/app/lib/fetchProduct"
import { ProductDetailsComponent } from "@component/components/productDetailsComponent"

const ProductDetailsPage = async ({ params }: any) => {

    const { id } = params
    const product = await fetchProductById(id)
   
    return (
        <ProductDetailsComponent product={JSON.stringify(product)}/>
    )
}

export default ProductDetailsPage