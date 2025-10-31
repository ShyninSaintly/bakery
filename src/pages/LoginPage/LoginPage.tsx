import {Button, Form, Input, Label, TextField} from "react-aria-components";
import classes from './LoginPage.module.scss'
import {type FormEvent, useState} from "react";
export const LoginPage = () => {
    const [login, setLogin] = useState('');
    const [password,setPassword]=useState('');
    const HandleSubmit=async (e:FormEvent) => {
        e.preventDefault();
        try{
            const response=await fetch('http://localhost:3000/users');
            if(!response.ok){
                console.error(`Ошибка получения пользователей:${response.status}`);
            }
            const users=await response.json();
            const currUser=users.find((u)=>u.userName===login);
            if(currUser && currUser.password===password){
                const authUser={
                    id:currUser.id,
                    userName:currUser.userName,
                    password:currUser.password,
                }
                    localStorage.setItem('AuthorizedUser',JSON.stringify(currUser))
            }
        }catch{

        }
        finally{

        }
    }
    return (
        <Form className={classes.LoginPage} onSubmit={HandleSubmit}>
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