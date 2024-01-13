import { Button } from "@component/components/commonComponents/button"
import { Heading } from "@component/components/commonComponents/heading"
import { ImageComponent } from "@component/components/commonComponents/image"
import { List } from "@component/components/commonComponents/list"
import { TextComponent } from "@component/components/commonComponents/text"

/* const ListItemData = [
    {
        children: <Button text='Dashboard'   />
    },
    {
        children: <Button text='Users'  />
    },
    {
        children: <Button text='Products'   />
    }
] */

export const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className="admin-details">
                <div className="admin-img">
                    <ImageComponent src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfxQDFxR6MvsVFCtx3_bzLC68ZPza7KsvRg&usqp=CAU'} alt={'admin-image'} objFit="cover" />
                </div>
                <div>
                    <Heading text='Admin' type='h4' />
                    <TextComponent text={'administrator'} />                   
                </div>
            </div>
            <div className="page-list">
            <TextComponent text='Pages' />
          {/*   <List listItems={ListItemData}/> */}
            </div>           
        </div>
    )
}