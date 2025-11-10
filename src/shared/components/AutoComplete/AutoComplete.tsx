import { Autocomplete, Button, Input, Label, Menu, MenuItem, SearchField, useFilter } from 'react-aria-components';
import { useState } from 'react';
import classes from './AutoComplete.module.scss';
export const AutoComplete = () => {
    const { contains } = useFilter({ sensitivity: 'base' });
    const [value, setValue] = useState<string>('');
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(false);
        setValue('');
    };
    const items = [
        { id: 1, value: 'первое' },
        { id: 2, value: 'втрое' },
        { id: 3, value: 'третье' },
        { id: 4, value: 'четвертое' },
        { id: 5, value: 'пятое' },
        { id: 6, value: 'шестое' },
        { id: 7, value: 'седьмое' },
        { id: 8, value: 'восьмое' },
    ];
    return (
        <div className={classes.AutoComplete}>
            <Autocomplete filter={contains}>
                <SearchField>
                    <Label>Поиск: </Label>
                    <Input
                        className={classes.AutoCompleteInput}
                        placeholder="Введите..."
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <Button className={classes.AutoCompleteButton} onClick={handleClick}>
                        ✕
                    </Button>
                </SearchField>
                {value || open ? (
                    <Menu className={classes.AutoCompleteMenu}>
                        {items.map((item) => {
                            return <MenuItem key={item.id}>{item.value}</MenuItem>;
                        })}
                    </Menu>
                ) : (
                    <></>
                )}
            </Autocomplete>
        </div>
    );
};
