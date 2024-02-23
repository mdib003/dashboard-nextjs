import { fetchProductById } from "@component/app/lib/fetchProduct"
import { ProductDetailsComponent } from "@component/components/productDetailsComponent"

const ProductDetailsPage = async ({ params }: any) => {

    const { id } = params
    const product = await fetchProductById(id)

    return (
        <>
            {product ? <ProductDetailsComponent product={JSON.stringify(product)} /> : <div className="mar-t-16 flex align-center not-found-container"><div className="width-full not-found">Product Does Not Exist</div></div>}
        </>

    )
}

export default ProductDetailsPage