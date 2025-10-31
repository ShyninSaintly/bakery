import {Button, Form, Input, Label, TextField} from "react-aria-components";

export const LoginPage = () => {
    return (
        <Form>
            <TextField name='username' type='text' isRequired>
                <Label>Логин</Label>
                <Input type='text' placeholder='Введите логин'  />
            </TextField>
            <TextField name='password' type='password' isRequired>
                <Label>Пароль</Label>
                <Input type='password' placeholder='Введите пароль'/>
            </TextField>
            <Button type='button'>Регистрация</Button>
            <Button type='submit'>Войти</Button>
        </Form>
    );
};