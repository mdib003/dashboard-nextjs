import { CTA } from "@component/components/commonComponents/cta"
import { Heading } from "@component/components/commonComponents/heading"
import { ImageComponent } from "@component/components/commonComponents/image"
import { List } from "@component/components/commonComponents/list"
import { TextComponent } from "@component/components/commonComponents/text"
import { MdDashboardCustomize } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

const ListItemData = [
    {
        children: <CTA text='Dashboard' type="link" btnClass="secondary" href="/" linkType='link1' icon={<MdDashboardCustomize/>}/>,
        className: "mar-b-8",        
    },
    {
        children: <CTA text='Users' type="link" btnClass="primary" href="/users" linkType='link1' icon={<FaUsers/>}/>,
        className: "mar-b-8"
    },
    {
        children: <CTA text='Products' type="link" btnClass="primary" href="/products" linkType='link1' icon={<FaBoxOpen/>}/>,
        className: "mar-b-8"
    }
]

const userHelpList = [
    {
        children: <CTA text='Settings' type="link" btnClass="secondary" href="/settings" linkType='link1' icon={<FaCog/>}/>,
        className: "mar-b-8",        
    },
    {
        children: <CTA text='Users' type="link" btnClass="primary" href="/help" linkType='link1' icon={<FaQuestionCircle/>}/>,
        className: "mar-b-8"
    },
    {
        children: <CTA text='Log out' type="link" btnClass="primary" href="/logout" linkType='link1' icon={<FaSignOutAlt/>}/>,
        className: "mar-b-8"
    }
]

export const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className="admin-details">
                <div className="admin-img">
                    <ImageComponent src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfxQDFxR6MvsVFCtx3_bzLC68ZPza7KsvRg&usqp=CAU'} alt={'admin-image'} objFit="cover" />
                </div>
                <div>
                    <Heading text='Admin' type='h4' />
                    <TextComponent text={'administrator'} className="mar-b-8"/>
                </div>
            </div>
            <div className="page-list">
                <TextComponent text='Pages' />
                <List listItems={ListItemData} />
            </div>
            <div className="user-help-list">
                <TextComponent text='User' />
                <List listItems={userHelpList} />
            </div>
        </div>
    )
}