import { FaFacebookF, FaTwitter } from "react-icons/fa";
export default {
    contact: {
        generalInfo: {
            address: "Biznis zona, Rudeš, Berane, Crna Gora",
            phone: "(+382)68/523-530",
            person: "Miketa Vučeljić",
            email: "elegantstone@gmail.com"
        },
        persons: [
            {
                email: "elegantstone@gmail.com",
                phone: "(+382)68/523-530",
                person: "Miketa Vučeljić",
                role: "direktor"
            }
        ],
        socialLinks: [
            {
                name: "Facebook",
                icon: FaFacebookF,
                href: "https://www.facebook.com"
            },
            {
                name: "Twitter",
                icon: FaTwitter,
                href: "https://www.twitter.com"
            }
        ]
    },
    footer: {
        widgets: {
            about: {
                headingText: "About",
                paragraphTekst: "This is example paragraph text"
            }, 
            links: [
                {label: "Home", href: "/"},
                {label: "About", href: "/about"},
                {label: "Gallery", href: "/gallery"},
                {label: "Projects", href: "/projects"},
                {label: "Contact", href: "/contact"},

            ]
        }
    },
    homePage: {

    },
    gallery: {

    }
}