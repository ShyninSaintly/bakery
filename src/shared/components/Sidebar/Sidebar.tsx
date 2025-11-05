import {Item, Menu, MenuTrigger, ActionButton, Image, Icon} from "@adobe/react-spectrum";
import {Button} from "react-aria-components";
import {useState} from "react";

export const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const handleClick = (e)=>{
        e.preventDefault();
        setOpen(!open);
    }
    return (
        <>
                <Button onClick={handleClick} className={open? "active":""} >
                    {!open?(<Image src={'/'}/>):(<Icon src='.../'/>)}
                </Button>
                {open?(
                <Menu>
                    <Item key="cut" href={'#'}>1</Item>
                    <Item key="copy" href={'#'}>2</Item>
                    <Item key="paste" href={'#'}>3</Item>
                    <Item key="replace" href={'#'}>4</Item>
                </Menu>
                ):<></>}
        </>
    );
};