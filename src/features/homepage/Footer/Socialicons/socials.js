import {styleIcon} from "./styled"
import {ReactComponent as GithubIcon} from "./icons/Github.svg"
import {ReactComponent as FacebookIcon} from "./icons/Facebook.svg"
import {ReactComponent as LinkedInIcon} from "./icons/LinkedIN.svg"
import {ReactComponent as InstagramIcon} from "./icons/Instagram.svg"

export const socials = [
    {
        name:"GitHub",
        url: "https://github.com/ulyanalakevich",
        Icon: styleIcon(GithubIcon)
    },
    {
        name:"Facebook",
        url: "https://www.facebook.com/ulyanalakevich",
        Icon: styleIcon(FacebookIcon)
    },
    {
        name:"LinkedIn",
        url: "https://www.facebook.com/ulyanalakevich",
        Icon: styleIcon(LinkedInIcon)
    },
    {
        name:"Instagram",
        url: "https://www.instagram.com/ulyanalakevich/",
        Icon: styleIcon(InstagramIcon)
    },
]