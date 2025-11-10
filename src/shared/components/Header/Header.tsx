import { AutoComplete } from '../AutoComplete/AutoComplete.tsx';
import { Menu, MenuItem } from 'react-aria-components';
import classes from './Header.module.scss';
export const Header = () => {
    return (
        <div className={classes.Header}>
            <Menu className={classes.HeaderMenuItems}>
                <MenuItem className={classes.HeaderMenuItem}>Главная</MenuItem>
                <MenuItem className={classes.HeaderMenuItem}>Булочные</MenuItem>
                <MenuItem className={classes.HeaderMenuItem}>Профиль</MenuItem>
                <MenuItem className={classes.HeaderMenuItem}>хзче</MenuItem>
                <MenuItem className={classes.HeaderMenuItem}>
                    <AutoComplete />
                </MenuItem>
            </Menu>
        </div>
    );
};
