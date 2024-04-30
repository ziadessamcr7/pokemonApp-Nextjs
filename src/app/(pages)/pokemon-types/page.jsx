'use client'
import { SearchBar } from '@/app/(components)/search/SearchBar';
import { SearchResultsList } from '@/app/(components)/search/SearchResultLsist';
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { Triangle } from 'react-loader-spinner';

export default function PokemoneCategories() {


    const [results, setResults] = useState([]);

    const getCategoriesList = () => {
        return axios.get(`https://pokeapi.co/api/v2/type/`)
    }

    const { data, isLoading } = useQuery({
        queryKey: ["CategoriesList"],
        queryFn: getCategoriesList
    })


    if (isLoading) {
        return <div className='d-flex justify-content-center align-items-center vh-100 bg-dark'>
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
    }



    return (

        <>
            <section className='text-dark pokeTypes'>
                <div className='container-fluid pt'>
                    <div className='row bg-dark-subtle rounded-bottom-circle opacity-75'>
                        <div className='text-center'>
                            <h1 className='fs-2'>
                                Pokémon Types
                            </h1>
                        </div>
                    </div>

                    <div className="row g-3 mt-5 d-flex justify-content-center w-50 m-auto">

                        <div>
                            <SearchBar setResults={setResults} />
                            <SearchResultsList results={results} />
                        </div>


                        {data?.data?.results?.map((cat, idx) => {
                            return <div key={idx} className='col-sm-3'>
                                <Link href={`pokemon-types/${cat.url.slice(31, 50)}`} className='fw-bold p-2 w-100 rounded-2 btn btn-outline-light'>
                                    {cat.name}
                                </Link >
                            </div>
                        }).slice(0, 18)}
                    </div>
                </div>
            </section>
        </>
    )
}


