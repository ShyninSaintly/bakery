import {AutoComplete} from "../AutoComplete/AutoComplete.tsx";
import {Menu, MenuItem} from "react-aria-components";
import classes from './Header.module.scss'
export const Header = () => {
    return (
        <div className={classes.Header}>
            <Menu className={classes.HeaderMenuItems}>
                <MenuItem>Главная</MenuItem>
                <MenuItem>Булочные</MenuItem>
                <MenuItem>Профиль</MenuItem>
                <MenuItem>хзче</MenuItem>
            </Menu>
            <AutoComplete/>
        </div>
    );
};