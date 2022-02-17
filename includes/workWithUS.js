import React from 'react'
import PropTypes from 'prop-types'
import ButtonLink from './buildingBlocks/buttonLink'

function WorkWithUS(props) {
    return (
        <div className='flex flex-col items-center min-h-[350px] align-middle justify-center bg-gray-300 mb-3'>
            <h1>Sarađujte sa nama</h1>
            <h3 className='scriptHeading pb-7'>Pošaljite nam vaš zahtjev</h3>
            <p>Ukoliko imate nešto na umu, niste sigurni da je to pravo rješenje za vas, pošaljite nam poruku i naš tim će Vam se javiti u najkraćem mogućem roku!!</p>
            <div className='p-5'>
                <ButtonLink href='contact' label="Pošaljite nam ponudu" backgroudColor='bg-primary-color' />
            </div>
        </div>
    )
}

WorkWithUS.propTypes = {}

export default WorkWithUS
