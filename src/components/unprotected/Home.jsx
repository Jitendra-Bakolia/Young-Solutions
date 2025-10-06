import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { emailPattern } from '@/helper/constants/validation.constants';
import toasty from '@/helper/utils/toasty.util';

const Home = () => {
    console.log('Home')
    return (

        <>
            This is main home page ...
        </>
    )
}

export default Home