import { ProductsTable } from "@component/components/commonComponents/table"

const productTableHeadData = [
    {
        theadRow: ['Title', 'Description', 'Price', 'Added', 'Stock', 'Action']
    }
]

const productTableBodyData = [

    {
        name: 'Dell Laptop', description: 'A laptop has an all-in-one design, with a built-in monitor, keyboard, touchpad (which replaces the mouse), and speakers. This means it is fully functional, even when no peripherals are connected. A laptop is also quicker to set up, and there are fewer cables to get in the way.', price: 100, added: 'Client', stock: 60
    },
    {
        name: 'Iphone', description: 'The iPhone is one of the two largest smartphone platforms in the world alongside Android, and is a large part of the luxury market. ', price: 200, added: 'Client', stock: 10
    },
    {
        name: 'Samsung Galazy s24', description: 'With AI-driven cameras, powerful processors, and smooth pixel-perfect performance, every aspect of the Galaxy S24 experience is set to be epic', price: 50, added: 'Client', stock: 2
    },
    {
        name: 'Ipad', description: 'The iPad is a brand of iOS and iPadOS-based tablet computers that are developed by Apple Inc., first introduced on January 27, 2010. ', price: 65, added: 'Client', stock: 0
    },

]


const ProductsPage = () => {
    return (
        <div>
            <ProductsTable thead={productTableHeadData} tbody={productTableBodyData}></ProductsTable>
        </div>
    )
}

export default ProductsPage