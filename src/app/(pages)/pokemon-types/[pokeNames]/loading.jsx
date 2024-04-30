'use client'
import React from 'react'
import { Triangle } from 'react-loader-spinner'

export default function loading() {
    return (
        <div className='d-flex justify-content-center align-items-center vh-100 bg-dark'>
            <Triangle
                visible={true}
                height="100"
                width="150"
                color="white"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}
