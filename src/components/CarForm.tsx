import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../interfaces/car.interface";
import {carService} from "../services/car.service";

const CarForm = () => {
    const {reset, register, handleSubmit, formState:{errors, isValid}} = useForm<ICar>()

    const save:SubmitHandler<ICar> = async (car) => {
        await carService.create(car)
        reset()

    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={''} {...register('brand')}/>
            <input type="text" placeholder={''} {...register('price')}/>
            <input type="text" placeholder={''} {...register('year')}/>
            <button>save</button>
        </form>
    );
};

export default CarForm;