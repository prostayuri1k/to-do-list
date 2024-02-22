import React, {useState} from 'react';
import {Controller, set, useForm} from "react-hook-form";
import {Button, Input, InputNumber, Radio} from "antd";
import s from './Registration.module.css';
import {NavLink, useNavigate} from "react-router-dom";


const Registration = () => {
    const navigate = useNavigate();
    const {control, handleSubmit, formState: {errors}} = useForm();

    async function passRegistrationData (data) {

        let options = {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        let response = await fetch('https://todo-redev.herokuapp.com/api/users/register', options);
            if(response.ok) {
                navigate('/authorization');
            }
            let result =  await response.json();
            return result;

    }
    const onSubmit = (data) => {
        passRegistrationData(data)
            .then(res => console.log(res))
            .catch(err => console.log(err.message))
    }

    return (
        <div className='App-container'>
            <div className='App-wrapper'>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                    <p className={s.error_message}>{errors.username?.message}</p>
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
                    <p className={s.error_message}>{errors.email?.message}</p>
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
                    <p className={s.error_message}>{errors.password?.message}</p>
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
                    <p className={s.error_message}>{errors.gender?.message}</p>
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
                    <p className={s.error_message}>{errors.age?.message}</p>
                    <Button type={"primary"} htmlType={"submit"}>Sign Up</Button>
                </form>
            </div>
            <p>Already have an account? <NavLink to='/authorization'>Log In!</NavLink></p>
        </div>

    );
};

export default Registration;