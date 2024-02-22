import React from 'react';
import {Controller, useForm} from "react-hook-form";
import {Button, Input} from "antd";
import s from './Authorization.module.css';
import {NavLink, useNavigate} from "react-router-dom";

const Authorization = () => {
    const navigate = useNavigate();
    const {control, handleSubmit, formState: {errors}} = useForm();

    async function authorize (data) {
        let options = {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        let response = await fetch('https://todo-redev.herokuapp.com/api/auth/login', options);
        let result = await response.json();
        if(response.ok) {
            localStorage.setItem('token', result.token);
            if(localStorage.getItem('token') === result.token) {
                navigate('/todo')
            }
        }
    }
    const onSubmit = (data) => {
        authorize(data);
    }

    return (
        <div className='App-container'>
            <div className='App-wrapper'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>
                            email
                        </label>
                        <Controller
                            control={control}
                            name='email'
                            rules={{
                                required: 'required field',
                                pattern: {
                                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                                    message: 'Enter correct email'
                                }
                            }}
                            render={({field}) =>
                                <Input
                                    rootClassName={s.input}
                                    {...field}
                                    placeholder='dino_saur_cream@gmail.com'
                                />}
                        />
                    </div>
                    <p className={s.error_message}>{errors.email?.message}</p>
                    <div>
                        <label>
                            password
                        </label>
                        <Controller
                            control={control}
                            name='password'
                            rules={{
                                required: 'required field',
                                minLength: {
                                    value: 6,
                                    message: 'Min length - 6 symbols'
                                },
                                pattern: {
                                    value: /(?=.*[A-Z])/,
                                    message: 'Password must contain at least one capital letter'
                                }
                            }}
                            render={({field}) =>
                                <Input.Password
                                    rootClassName={s.input}
                                    {...field}
                                    placeholder='Secret_info123'
                                />}
                        />
                    </div>
                    <p className={s.error_message}>{errors.password?.message}</p>
                    <Button type={"primary"} htmlType={"submit"}>Log In</Button>
                </form>
            </div>
            <p>Don't have an account? <NavLink to='/'>Sign Up!</NavLink></p>
        </div>

    );
};

export default Authorization;