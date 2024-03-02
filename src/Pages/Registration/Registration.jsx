import React from 'react';
import {Controller, useForm} from "react-hook-form";
import {Button, Input, InputNumber, Radio} from "antd";
import s from './Registration.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";


const Registration = () => {
    const {control, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    const registerUser = async (data) => {
        try {
            const response = await axios.post('https://todo-redev.herokuapp.com/api/users/register', data);
            if(response.statusText === 'OK') {
                navigate('/authorization');
            }
        } catch (error) {
            console.log('Ошибка:', error);
        }
    };

    const onSubmit = (data) => {
        registerUser(data);
    }

    return (
        <div className='App-container'>
            <div className='App-wrapper'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.input_label_error}>
                        <div className={s.input_wrapper}>
                            <label className={s.input_title}>
                                username
                            </label>
                            <Controller
                                control={control}
                                name='username'
                                rules={{
                                    required: 'required field'
                                }}
                                render={({field}) =>
                                    <Input
                                        rootClassName={s.input}
                                        {...field}
                                        placeholder='Dino_saur_cream'
                                    />}
                            />
                        </div>
                        {errors.username && <p className={s.error_message}>{errors.username?.message}</p>}
                    </div>

                    <div className={s.input_label_error}>
                        <div className={s.input_wrapper}>
                            <label className={s.input_title}>
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
                        {errors.email && <p className={s.error_message}>{errors.email?.message}</p>}
                    </div>

                    <div className={s.input_label_error}>
                        <div className={s.input_wrapper}>
                            <label className={s.input_title}>
                                password
                            </label>
                            <Controller
                                control={control}
                                name='password'
                                rules={{
                                    required: 'required field',
                                    minLength: {
                                        value: 8,
                                        message: 'Min length - 8 symbols'
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*_,.-])[A-Za-z\d!@#$%^&*_,.-]*$/,
                                        message: 'Password must contain at least 1 capital letter 1 digit and 1 symbol'
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
                        {errors.password && <p className={s.error_message}>{errors.password?.message}</p>}
                    </div>

                    <div className={s.input_label_error}>
                        <div className={s.input_wrapper}>
                            <label className={s.input_title}>
                                gender
                            </label>
                            <Controller
                                control={control}
                                render={({field}) =>
                                    <Radio.Group
                                        {...field}
                                        options={[{label: 'male', value: 'male'}, {label: 'female', value: 'female'}]}
                                        optionType={"button"}
                                        buttonStyle={"solid"}
                                    />}
                                name='gender'
                                rules={{
                                    required: 'required field'
                                }}
                            />
                        </div>
                        {errors.gender && <p className={s.error_message}>{errors.gender?.message}</p>}
                    </div>

                    <div className={s.input_label_error}>
                        <div className={s.input_wrapper}>
                            <label className={s.input_title}>
                                age
                            </label>
                            <Controller
                                render={({field}) =>
                                    <InputNumber
                                        rootClassName={s.input}
                                        {...field}
                                        placeholder='25'
                                    />}
                                rules={{
                                    required: 'required field',
                                    validate: {
                                        positive: v => parseInt(v) > 0 || 'Should be greater than 0',
                                        maxAge: v => parseInt(v) < 100 || 'Shold be less than 100'
                                    }
                                }}
                                name='age'
                                control={control}
                            />
                        </div>
                        {errors.age && <p className={s.error_message}>{errors.age?.message}</p>}
                    </div>

                    <Button type={"primary"} htmlType={"submit"}>Sign Up</Button>
                </form>
            </div>
            <p>Already have an account? <NavLink to='/authorization'>Log In!</NavLink></p>
        </div>

    );
};

export default Registration;