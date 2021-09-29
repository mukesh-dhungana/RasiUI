import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Icon from '../../atoms/Icon/Icon';
import {
    LeftOutlined,
    RightOutlined
} from '@ant-design/icons';
const { Sider, Header, Content } = Layout;
const { SubMenu } = Menu;

const colors = {
    primary: "primary",
    secondary: "secondary"
}

const Divider = ({ menuId }: any) => <div className={`vl-${menuId}`} />

const MenuInfo = ({ menuId, dueInfo }: any) => <p key={menuId} className="menu-extra-small-text">{dueInfo}</p>

function HeadMenu({ menus, handleClick, myKey, stroke, StrokeDefault, menuIds, collapse }: any) {
    const [openKeys, setOpenKeys] = useState([]);
    const temp = Array.from(menuIds.keys());
    const rootSubmenuKeys = temp.map(String);
    const onOpenChange = (o: any) => {
        let latestOpenKey = o.find((match: never) => openKeys.indexOf(match) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(o);
        } else {
            latestOpenKey = Array.of(latestOpenKey)
            setOpenKeys(latestOpenKey);
        }
    }
    myKey = parseInt(myKey);
    const menuItems = [...menus];
    const subItems = menuItems
        .filter(menu => menu.parentId === null && menu.path === null)
        .map((menu) => (
            <SubMenu key={menu.id} className="menu-medium" onTitleClick={collapse ? handleClick: null} icon={<Icon name={menu.icon} 
                stroke={menuIds.get(menu.id).includes(myKey) ? colors[stroke] : colors[StrokeDefault]} className={menuIds.get(menu.id).includes(myKey) ? 'icon-active' : ''} />} title={menu.name} >
                <Divider menuId={menu.id} />
                {menu.dueInfo && <MenuInfo menuId={menu.id} dueInfo={menu.dueInfo} />}
                {
                    menus
                        .filter((m: any) => m.parentId === menu.id && m.subKey === undefined)
                        .map((subMenu: any) => (
                            <Menu.Item key={subMenu.id}>
                                <Link to={subMenu.path}><p className="menu-regular">{subMenu.name}</p></Link>
                            </Menu.Item>
                        ))
                }

                {
                    menus
                        .filter((m: any) => m.parentId === menu.id && m.subKey !== undefined && m.path === null)
                        .map((subMenu: any) => (
                            <Menu.ItemGroup key={subMenu.id} title={subMenu.name}>
                                {
                                    menus
                                        .filter((m: any) => subMenu.parentId === menu.id && m.subKey === subMenu.subKey && m.path !== null)
                                        .map((result: any) => (
                                            <Menu.Item key={result.id}>
                                                <Link to={result.path}><p className="menu-regular">{result.name}</p></Link>
                                            </Menu.Item>
                                        ))
                                }
                            </Menu.ItemGroup >
                        ))
                }
            </SubMenu >
        ))
    const items = menuItems
        .filter(menu => menu.parentId === null && menu.path !== null)
        .map((menu) => (
            <Menu.Item style={{ height: 40 }} key={menu.id} icon={<Icon name={menu.icon}
                stroke={menu.id == myKey ? colors[stroke] : colors[StrokeDefault]} className={menu.id === myKey ? 'icon-active' : ''} />}>
                <Link to={menu.path}><p className="menu-medium">{menu.name}</p></Link>
            </Menu.Item>
        ))

    const result = [...subItems, ...items]
    result.sort(function (a: any, b: any) {
        return a.key - b.key;
    });
    return (
        <Menu theme="light" mode="inline" onClick={handleClick} openKeys={openKeys} onOpenChange={onOpenChange}>
            {result}
        </Menu>
    )
}

function SiderNav({ menus }: any) {
    const [collapse, setCollapse] = useState(true);
    const [stroke, setStroke] = useState('secondary');
    const [myKey, setKey] = useState('');
    const strokeDefault = "primary";

    const onCollapse = () => {
        setCollapse(!collapse);
    };

    const handleOutClose = () => {
        setCollapse(true);
    }

    const handleClick = (ar: any) => {
        setKey(ar.key);
        setStroke('secondary')
        collapse ? setCollapse(false): setCollapse(true);
    }

    let menuIds = new Map();
    menus
        .filter((m: any) => m.parentId === null && m.path === null).map((m: any) => {
            menuIds.set(m.id, []);
        });
    Array.from(menuIds.keys()).map(menuId => {
        const childIds = menus.filter((m: any) => menuId === m.parentId && m.path !== null).map((m: any) => m.id);
        menuIds.set(menuId, childIds);
    })
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapse} width={250}>
                {collapse ?
                    <div className="logo">
                        <Icon name="mini-logo" stroke="none" />
                    </div> :
                    <div className="main-logo">
                        <Icon name="mini-logo" stroke="none" />
                        <Icon name="logo" stroke="none" style={{ marginLeft: 12 }} />
                    </div>
                }
                <HeadMenu menus={menus} stroke={stroke} myKey={myKey} strokeDefault={strokeDefault} handleClick={handleClick} menuIds={menuIds} collapse={collapse}/>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    <h1 className="h0" style={{textAlign: 'center'}}>
                        This is our Header Menu
                    </h1>
                    {React.createElement(collapse ? RightOutlined : LeftOutlined, {
                        className: 'trigger',
                        onClick: onCollapse,
                    })}
                </Header>
                <Content onClick={handleOutClose}
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <div>
                        <h1 className="h0">
                            Click anywhere inside this content to collapse
                        </h1>
                        <h1>
                            When Navigation Bar is Open
                        </h1>
                        <p className="body-extra-small-lg"> Accounts Payable, Payroll, Users </p>
                        <p className="body-extra-small-md"> Accounts Payable, Payroll, Users </p>
                        <p className="body-small-sm"> Accounts Payable, Payroll, Users </p>
                        <br />
                        <br />
                        <p className="body-extra-small-light-lg"> Accounts Payable, Payroll, Users </p>
                        <p className="body-extra-small-light-md"> Accounts Payable, Payroll, Users </p>
                        <p className="body-extra-small-light-sm"> Accounts Payable, Payroll, Users </p>
                        <br />
                        <br />
                        <p className="body-extra-small-text">Please confirm that the list above contains all accounts RSI would need access to for this banking instittution.</p>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}

export default SiderNav;