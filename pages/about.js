import React from 'react'
import PropTypes from 'prop-types'
import HomeLayout from '../includes/layouts/homeLayout'

function About(props) {
    return (
        <HomeLayout title="About | ElegantStone doo Berane">
            <div className="flex flex-col pt-9">
                <div className='websitePadding'>
                    <h1>O nama</h1>

                </div>
                <div className='bg-primary-color  p-5 websitePadding'>

                    <div className="flex py-8 flex-col items-center w-1/2 text-primary-contrast-text">
                        <p>
                            Mi smo kompanija koja je osnovana 2018. godine, a nalazimo se u Crnoj Gori. U ponudi imamo granit, kvarc i drugi dekorativni kamen koji se koristi za dekoraciju domova i kancelarija.
                            Mi smo mlada i dinamična kompanija sa sedištem u Beranama (Crna Gora), koja je pozicionirana među najvećim kompanijama za preradu kamena u regionu. Imamo ogromno iskustvo, znanje i kvalitetne proizvode koji nam omogućavaju da budemo lideri u ovom poslu.
                            Elegant Stone je vodeći dobavljač granita, mermera i kvarca i drugog ukrasnog kamena u Crnoj Gori. Naša kompanija je osnovana 2018. godine i brzo je postala pouzdan partner na tržištu. Pružamo prvoklasne proizvode po pristupačnoj ceni uz visok nivo usluge. Želimo da izgradimo dugoročne odnose sa našim kupcima pružajući im kvalitetne proizvode u svakom trenutku. Naš cilj je da se etabliramo kao vodeći dobavljač prirodnog kamena u regionu, zbog čega se trudimo da vaše porudžbine budu isporučene na vreme i da ispune vaša očekivanja kada je u pitanju kvalitet i dizajn.
                            Sa granitom radimo od kada smo otvorili svoja vrata, tako da možete biti sigurni da ćete od nas dobiti samo materijale vrhunskog kvaliteta.

                        </p>
                        <h5>
                            Kvalitet kojem možete verovati

                        </h5>
                        <p>
                            ElegantStone pruža najbolji kvalitet proizvoda, korisničku podršku i podršku u regionu.
                            Naši proizvodi su najvišeg kvaliteta i nudimo odličnu korisničku uslugu i podršku. Činimo sve što možemo da osiguramo da dobijete proizvod koji će trajati.
                            Već neko vreme smo u industriji dekorativnog kamena i znamo šta je potrebno našim kupcima. Nudimo razne usluge u ovoj industriji i nadamo se da možemo pomoći da vaše poslovanje raste uz pomoć originalnog sadržaja.
                            Izaberite pravi kamen
                            Bez obzira na vaš budžet, naša prodavnica ima veliki izbor kamenja. Bilo da tražite nešto što će blistati na svetlosti ili nešto sa dubokom bojom, imamo ih gotovo sve.
                            Kada je u pitanju kupovina granita ili bilo koje druge vrste ukrasnog kamena, cena može značajno da varira. Da biste dobili najbolju vrednost za svoj novac, morate znati koju vrstu kamena želite. Različito kamenje ima različite kvalitete i emituje različite boje pri različitom osvetljenju. Imamo veliki izbor kamenja između kojih možete birati, tako da bez obzira na vaš budžet imamo kamen za vas.
                            Pronađite svoju idealnu dekoraciju
                            Nalazimo se u Beranama u Crnoj Gori, ali naši proizvodi se šalju širom Crne Gore. Možemo vam ponuditi širok spektar boja i oblika koji će zadovoljiti vaše potrebe.
                        </p>

                        <h5>
                            Koje su prednosti kupovine od vas?
                        </h5>
                        <ul>
                            <li>Nudimo širok izbor proizvoda koji odgovaraju svakom kupcu</li>
                            <li>Imamo odličnu reputaciju za naše proizvode visokog kvaliteta i korisničku uslugu</li>
                            <li>Nudimo ogroman asortiman proizvoda tako da možete brzo i lako da pronađete ono što tražite</li>
                        </ul>

                        <h5>
                            Zašto bih izabrao vašu kompaniju?
                        </h5>
                        <p>
                            Ne možete biti sigurni šta vaša konkurencija nudi, ali možete biti sigurni u reputaciju koju ćete imati kod nas.
                            Naš tim posluje više godina.
                            Mi smo etablirana kompanija sa dokazanim iskustvom.
                            Mi smo stručnjaci u onome što radimo i trudićemo se da budemo savršeni da vaš projekat bude savršen.
                            Kako da znam da ćete moći da mi obezbedite sve što mi treba?
                            Veoma smo uvereni da možemo da vam obezbedimo sve što vam je potrebno.
                            Imamo iskustva sa ovom vrstom posla i moći ćemo da uradimo posao.
                            Uvek smo našim klijentima davali sve što im je ranije bilo potrebno.

                        </p>
                    </div>
                    <div className="flex-grow-1 ">Picture</div>
                </div>
            </div>
        </HomeLayout>
    )
}

About.propTypes = {
    title: PropTypes.string.isRequired
}

export default About