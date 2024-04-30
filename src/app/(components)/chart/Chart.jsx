'use client'

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });


export default function ExampleChart({ pokeObj }) {

    const option = {
        chart: {
            id: 'apexchart-example',
            foreColor: 'white',

        },

        xaxis: {
            categories: pokeObj?.stats?.map((st) => {
                return st.stat.name
            })
        },

        plotOptions: {
            bar: {
                borderRadius: 5,
                horizontal: true,
            }
        },
    }

    const series = [{
        name: '',
        data: pokeObj?.stats?.map((st) => {
            return st.base_stat
        })
    }]

    return (
        <>
            <ApexChart type="bar" options={option} series={series} height={350} width={400} />
        </>
    )

}