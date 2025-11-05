import {Button, FieldError, Form, Input, Label, TextField} from "react-aria-components";
import classes from './LoginPage.module.scss'
import {type FormEvent, useState} from "react";
import {useNavigate} from "react-router";
export const LoginPage = () => {
    const [login, setLogin] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit=async (e:FormEvent) => {
        e.preventDefault();
        try{
            const response=await fetch('http://localhost:3000/users');
            if(!response.ok){
                console.error(`Ошибка получения пользователей:${response.status}`);
            }
            const users = await response.json();
            const currUser=users.find((u)=> u.userName === login);
            if(currUser && currUser.password === password){
                const authUser = {
                    id:currUser.id,
                    userName:currUser.userName,
                    password:currUser.password,
                }
                    localStorage.setItem('AuthorizedUser',JSON.stringify(authUser))
                    navigate('/main');
            }
        }catch{
            console.error('Неверный логин илил пароль');
        }
    }
    return (
        <div className={classes.LoginPage}>
            <Form className={classes.LoginPageForm}>
                <div className={classes.LoginPageHead}></div>
                <div className={classes.FormContentContainer}>
                    <TextField name='username' type='text' isRequired>
                        <Label className={classes.LoginPageLabel}>Логин</Label>
                        <Input className={classes.LoginPageInput} type='text' placeholder='Введите логин'
                               onChange={(e) => setLogin(e.target.value)}/>
                        <FieldError className={classes.LoginPageErrorMessage}>Заполните поле логин корректно</FieldError>
                    </TextField>
                    <TextField name='password' type='password' isRequired>
                        <Label className={classes.LoginPageLabel}>Пароль</Label>
                        <Input className={classes.LoginPageInput} type='password' placeholder='Введите пароль'
                               onChange={(e) => setPassword(e.target.value)}/>
                        <FieldError className={classes.LoginPageErrorMessage}>Заполните поле пароля корректно</FieldError>
                    </TextField>
                    <div className={classes.LoginPageButtonContainer}>
                        <Button type='button' className={classes.LoginPageBtn}>Регистрация</Button>
                        <Button type='submit' onClick={handleSubmit} className={classes.LoginPageBtn}>Войти</Button>
                    </div>
                </div>
                <div className={classes.LoginPageButtom}></div>
            </Form>
        </div>
    );
};