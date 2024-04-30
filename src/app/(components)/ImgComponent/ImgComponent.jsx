
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';


export default async function ImgComponent({ props }) {

    // console.log(props);

    // const params = new URLSearchParams({
    //     offset: 4,
    //     limit: 3
    // })

    // console.log(params);

    const getAllImgs = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${props}`)

        const finalRes = await res.json()

        return finalRes
    }

    const poke = await getAllImgs()



    return (
        <div >
            {poke?.sprites?.front_default ? <Image src={poke?.sprites?.front_default} width={100} height={100} alt="pokedox" /> : 'NO-IMG'}
        </div>
    )
}


