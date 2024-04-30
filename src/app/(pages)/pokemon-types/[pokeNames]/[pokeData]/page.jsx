import ExampleChart from '@/app/(components)/chart/Chart';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function PokeData({ params }) {

    console.log(params.pokeData);


    const getPokemonData = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokeData}`)

        const finalRes = await res.json()

        return finalRes

    }

    const pokeObj = await getPokemonData()

    console.log(pokeObj);


    return (
        <section className='text-dark pokeData'>
            <div className='container-fluid pt opacity-75'>
                <div className='row bg-dark'>
                    <div className='col-md-12 bg-dark-subtle rounded-bottom-circle'>
                        <div className='text-center'>
                            <h2>
                                {pokeObj.name.toUpperCase()}
                            </h2>
                        </div>
                    </div>

                    <div className="row py-3 text-primary">

                        <div className="col-lg-4 d-flex justify-content-center align-items-center">
                            <div className='bg- px-3'>
                                {pokeObj?.sprites?.other['official-artwork'].front_default ?
                                    <Image width={300} height={300} src={pokeObj?.sprites?.other['official-artwork'].front_default} alt="poke" />
                                    : 'NO-IMG'}
                            </div>
                        </div>

                        <div className="col-lg-4 bg- d-flex justify-content-center align-items-center">
                            <div className='bg-inf text-white'>
                                <h3>Pokédex data</h3>
                                <h6 className=' border-1 border-bottom border-top py-3 fw-bold' > type(s): {pokeObj?.types?.map((type, idx) => {
                                    return <Link key={idx} href={`/pokemon-types/${type.type.url.slice(31, 50)}`} className='border border-1 mx-1 p-1 text-decoration-none text-primary'> {type.type.name.toUpperCase()}   </Link>
                                })} </h6>
                                <h6 className='border-1 border-bottom pb-2 ' >height: {pokeObj.height.toString().substring(0, 1) + "." + pokeObj.height.toString().substring(1)} m </h6>
                                <h6 className='border-1 border-bottom pb-2 '>weight: {pokeObj.weight.toString().substring(0, 2) + "." + pokeObj.weight.toString().substring(2)} kg</h6>

                                <div className='d-flex align-items-center bg-dager border-1 border-bottom'  >
                                    <h6 className='bg-succes' > abilities: </h6>
                                    <div className='mb-2'>
                                        {pokeObj.abilities?.map((ab, idx) => {
                                            return <div key={idx} className='ms-3 border-1 border my-1 text-center p-1 rounded-2'> {ab.ability.name}     </div>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 ">
                            <div className='h-100 d-flex justify-content-center align-items-center'>
                                {/* <ChartComponent pokeObj={pokeObj} /> */}
                                <ExampleChart pokeObj={pokeObj} />

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}
