'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import ImgComponent from '../../../(components)/ImgComponent/ImgComponent';
import Pagination from '@/app/(components)/Pagination/Pagination';
import { MdOutlineCatchingPokemon } from "react-icons/md";



export default async function PokeNames({ params }) {


    const [currentPage, setCurrentPage] = useState(() => 1);
    const [pokemonsPerPage] = useState(() => 12);

    const getAllNames = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/type/${params.pokeNames}`)

        const finalRes = await res.json()

        return finalRes
    }

    const pokObject = await getAllNames()

    // Get current posts
    const indexOfLastPoke = currentPage * pokemonsPerPage;
    const indexOfFirstPoke = indexOfLastPoke - pokemonsPerPage;
    const currentPokemons = pokObject?.pokemon?.slice(indexOfFirstPoke, indexOfLastPoke);


    const handlePageClick = (data) => {
        let currentPAGE = data.selected + 1;
        setCurrentPage(currentPAGE);
    };


    return (
        <section className='text-dark pokeNames'>
            <div className="container-fluid pn ">
                <div className='row position-fixed w-100'>
                    <div className='col-md-12 bg-dark-subtle rounded-bottom-circle opacity-75'>
                        <h2 className='text-center'>
                            {pokObject?.name?.toUpperCase()} #{pokObject?.pokemon?.length}
                        </h2>
                    </div>
                </div>

                <div className="row g-3 mt-5 w-75 m-auto">
                    {currentPokemons?.map((pokemon, idx) => {
                        return <div key={idx} className='col-sm-3 py-2'>
                            <Link href={`pokemon-data/${pokemon.pokemon.url.slice(34, 50)}`} className='fw-bold p-2 w-100 rounded-4 btn btn-outline-light border-0' >
                                <p style={{ fontSize: '15px' }}>  {pokemon.pokemon.name} </p>
                                <ImgComponent props={pokemon.pokemon.url.slice(34, 50)} />
                            </Link >
                        </div>
                    })}
                </div>

                <Pagination
                    pokemonsPerPage={pokemonsPerPage}
                    totalPokemons={pokObject?.pokemon?.length}

                    handlePageClick={handlePageClick}
                />
            </div>

            <Link href={`/pokemon-types`} > <MdOutlineCatchingPokemon className="home" /> </Link>

        </section>

    )
}