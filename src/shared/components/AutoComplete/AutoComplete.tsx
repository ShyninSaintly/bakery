import {Autocomplete, Button, Input, Label, Menu, MenuItem, SearchField, useFilter} from 'react-aria-components';
import {useState} from "react";
// interface searchValues{
//  id:string;
//  value:string;
// }
// export const AutoComplete = (search?:searchValues) => {
    export const AutoComplete= ()=>{
        const {contains}=useFilter({sensitivity: 'base'});
        const [value, setValue] = useState<string>('');
    return (
        <div className="autocomplete">
            <Autocomplete filter={contains}>
                <SearchField>
                    <Label>Поиск</Label>
                    <Input placeholder="Ввведие..." value={value} onChange={e => setValue(e.target.value)} />
                    <Button>✕</Button>
                </SearchField>
                {value?(<Menu>
                    <MenuItem>первое</MenuItem>
                    <MenuItem>втрое</MenuItem>
                    <MenuItem>третье</MenuItem>
                    <MenuItem>четвертое</MenuItem>
                    <MenuItem>пятое</MenuItem>
                    <MenuItem>шестое</MenuItem>
                    <MenuItem>седьмое</MenuItem>
                    <MenuItem>восьмое</MenuItem>
                    <MenuItem>девятое</MenuItem>
                    <MenuItem>десятое</MenuItem>
                    <MenuItem>одиннадцатое</MenuItem>
                    <MenuItem>двеннадцатое</MenuItem>
                    <MenuItem>тринадцатое</MenuItem>
                    <MenuItem>четырнадцатое</MenuItem>
                </Menu>):<></>}
            </Autocomplete>
        </div>
    );
};