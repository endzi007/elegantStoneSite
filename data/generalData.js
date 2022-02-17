import { FaFacebookF, FaTwitter, FaPhone, FaUserAlt, FaRegEnvelope, FaLocationArrow, FaInstagram } from "react-icons/fa";

export default {
    contact: {
        generalInfo: {
            address: { text: "Biznis zona, Rudeš, Berane, Crna Gora", icon: FaLocationArrow, label: "Adresa" },
            phone: { text: "(+382)68/523-530", icon: FaPhone, label: "Telefon" },
            person: { text: "Miketa Vučeljić", icon: FaUserAlt, role: "direktor", label: "Pozicija" },
            email: { text: "elegantstone@gmail.com", icon: FaRegEnvelope, label: "Email" }
        },
        socialLinks: [
            {
                name: "Facebook",
                icon: FaFacebookF,
                href: "https://www.facebook.com/elegantStoneBerane/"
            },
            {
                name: "Twitter",
                icon: FaTwitter,
                href: "https://www.twitter.com"
            },
            {
                name: "Instagram",
                icon: FaInstagram,
                href: "https://www.instagram.com/elegantstone.berane/"
            }
        ]
    },
    footer: {
        widgets: {
            about: {
                headingText: "O nama",
                paragraphTekst: "Ovo je text o nama"
            },
            links: [
                { label: "Početna", href: "/" },
                { label: "O nama", href: "/about" },
                { label: "Materijali", href: "/materials" },
                { label: "Projekti", href: "/projects" },
                { label: "Kontakt", href: "/contact" },

            ]
        }
    },
    navbar: [
        { label: "Početna", url: "/" },
        { label: "O nama", url: "/about" },
        { label: "Materijali", url: "/materials" },
        { label: "Projekti", url: "/projects" },
        { label: "Kontakt", url: "/contact" }
    ],
    pages: {
        homePage: {
            mainSection: {
                h1Text: "ELEGANT STONE",
                pText: "Web stranica je u izradi"
            }
        },
        gallery: {

        },
        contact: {
            pageTitle: "Kontakt | Elegant stone ",
            mainHedding: "Kontaktirajte nas za više informacija",
            paragraphText: "Ukoliko imate neka pitanja, molimo vas da nas kontaktirate a mi ćemo vam se javiti u najkraćem mogućem roku",
            contactForm: {
                nameText: "unesite vaše ime",
                emailText: "unesite vaš email",
                subjectText: "naslov",
                messageText: "unesite vašu poruku",
                buttonText: "Pošalji"
            },
        },
        about: {
            pageTitle: "O nama",
            mainHeading: "O nama",
            paragraphText: "Mi smo kompanija koja je osnovana 2018. godine, a nalazimo se u Crnoj Gori. U ponudi imamo granit, kvarc i drugi dekorativni kamen koji se koristi za dekoraciju domova i kancelarija. Mi smo mlada i dinamična kompanija sa sedištem u Beranama (Crna Gora), koja je pozicionirana među najvećim kompanijama za preradu kamena u regionu. Imamo ogromno iskustvo, znanje i kvalitetne proizvode koji nam omogućavaju da budemo lideri u ovom poslu.Elegant Stone je vodeći dobavljač granita, mermera i kvarca i drugog ukrasnog kamena u Crnoj Gori. Naša kompanija je osnovana 2018. godine i brzo je postala pouzdan partner na tržištu. Pružamo prvoklasne proizvode po pristupačnoj ceni uz visok nivo usluge. Želimo da izgradimo dugoročne odnose sa našim kupcima pružajući im kvalitetne proizvode u svakom trenutku. Naš cilj je da se etabliramo kao vodeći dobavljač prirodnog kamena u regionu, zbog čega se trudimo da vaše porudžbine budu isporučene na vreme i da ispune vaša očekivanja kada je u pitanju kvalitet i dizajn.Sa granitom radimo od kada smo otvorili svoja vrata, tako da možete biti sigurni da ćete od nas dobiti samo materijale vrhunskog kvaliteta."
        }
    }
}