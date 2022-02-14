import React from 'react'
import PropTypes from 'prop-types'
import Workers from './icons/workersSVG'

function WhoWeAre(props) {
    return (
        <div className="websitePadding grid sm:grid-cols-1 lg:grid-cols-2 text-bg-black items-center py-6 max-w-full">
            <div className="flex items-center flex-col justify-center min-h-[400px]">
                <h1>Ko smo mi?</h1>
                <Workers />
            </div>
            <div className="p-2">
                <h3 className='scriptHeading pb-4'> Mi smo... </h3>
                <p>
                    Kompanija koja je osnovana 2018. godine, a nalazimo se u Crnoj Gori. U ponudi imamo granit, kvarc i drugi dekorativni kamen koji se koristi za dekoraciju domova i kancelarija.
                    Mi smo mlada i dinamična kompanija sa sedištem u Beranama (Crna Gora), koja je pozicionirana među najvećim kompanijama za preradu kamena u regionu. Imamo ogromno iskustvo, znanje i kvalitetne proizvode koji nam omogućavaju da budemo lideri u ovom poslu.
                    <br />
                    <br />
                    <span className='scriptHeading text-2xl font-bold'>Elegant Stone </span>je jedan od vodećih dobavljač granita, mermera i kvarca i drugog ukrasnog kamena u Crnoj Gori. Naša kompanija je osnovana 2018. godine i brzo je postala pouzdan partner na tržištu. Pružamo prvoklasne proizvode po pristupačnoj ceni uz visok nivo usluge. Želimo da izgradimo dugoročne odnose sa našim kupcima pružajući im kvalitetne proizvode u svakom trenutku. Naš cilj je da se etabliramo kao vodeći dobavljač prirodnog kamena u regionu, zbog čega se trudimo da vaše porudžbine budu isporučene na vreme i da ispune vaša očekivanja kada je u pitanju kvalitet i dizajn.
                    Sa granitom radimo od kada smo otvorili svoja vrata, tako da možete biti sigurni da ćete od nas dobiti samo materijale vrhunskog kvaliteta.
                </p>
            </div>
        </div>
    )
}

WhoWeAre.propTypes = {

}

export default WhoWeAre

