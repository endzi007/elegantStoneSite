import { FaFacebookF, FaTwitter, FaPhone, FaUserAlt, FaRegEnvelope, FaLocationArrow} from "react-icons/fa";

export default {
    contact: {
        generalInfo: {
            address: {text: "Biznis zona, Rudeš, Berane, Crna Gora", icon: FaLocationArrow},
            phone: {text:  "(+382)68/523-530", icon: FaPhone},
            person: {text: "Miketa Vučeljić", icon: FaUserAlt, role: "direktor"},
            email: {text: "elegantstone@gmail.com", icon: FaRegEnvelope}
        },
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
    navbar: [
        {label: "HOME", url: "/"},
        {label: "About", url: "/about"},
        {label: "Gallery", url: "/gallery"},
        {label: "Projects", url: "/projects"},
        {label: "Contact", url: "/contact"}
    ],
    pages: {
        homePage: {
    
        },
        gallery: {
    
        },
        contact: {
            pageTitle: "Contact us",
            mainHedding: "Message us for more details",
            paragraphText: "If you have any questions, please feel free to contact us we will answer you in shortest time possible",
            contactForm: {
                nameText: "enter your name", 
                emailText: "enter your email",
                subjectText: "subject",
                messageText: "enter your message",
                buttonText: "Submit"
            },
        }
    }
}