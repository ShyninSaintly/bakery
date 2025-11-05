import {Menu, MenuTrigger} from "react-aria-components";
import {useState} from "react";

const Sidebar = () => {
    const [selected,setSelected]=useState<Selection>(
        new Set(['Sidebar','Console'])
    );
    return (
        <MenuTrigger>
            <ActionButton>Открыть</ActionButton>
            <Menu selectionMode={"single"} selectedKeys={selected} onSelectionChange={setSelected}>
                <Item href="/main">Элемент 1</Item>
                <Item href="/main">Элемент 2</Item>
                <Item href="/main">Элемент 3</Item>
                <Item href="/main">Элемент 4</Item>
                <Item href="/main">Элемент 5</Item>
                <Item href="/main">Элемент 6</Item>
            </Menu>
        </MenuTrigger>
    );
};

export default Sidebar;