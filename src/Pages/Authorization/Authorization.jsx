import React from 'react';
import {Controller, useForm} from "react-hook-form";
import {Button, Input} from "antd";
import s from './Authorization.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";

const Authorization = () => {
    const {control, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    const authorizeUser = async (data) => {
        try {
            let response = await axios.post('https://todo-redev.herokuapp.com/api/auth/login', data);
            if (response.statusText === 'OK') {
                let {token} = response.data;
                localStorage.setItem('token', token);
                navigate('/todo')
            }
        } catch (error) {
            console.log('Ошибка', error)
        }
    }

    const onSubmit = (data) => {
        authorizeUser(data);
    }

    return (
        <div className='App-container'>
            <div className='App-wrapper'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.input_field}>
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
                                    {...field}
                                    placeholder='dino_saur_cream@gmail.com'
                                />}
                        />
                        {errors.email && <p className={s.error_message}>{errors.email?.message}</p>}
                    </div>

                    <div className={s.input_field}>
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
                                    {...field}
                                    placeholder='Secret_info123'
                                />}
                        />
                        {errors.password && <p className={s.error_message}>{errors.password?.message}</p>}
                    </div>
                    <Button type={"primary"} htmlType={"submit"}>Log In</Button>
                </form>
            </div>
            <p>Don't have an account? <NavLink to='/to-do-list'>Sign Up!</NavLink></p>
        </div>
    );
};

export default Authorization;