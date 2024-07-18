import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export const menuItems = [
  { href: "/", label: "Accueil" },
  { href: "/calculator", label: "Calculatrice" },
  { href: "/faq", label: "FAQ" },
  { href: "/acronyms", label: "Abréviations" },
  { href: "/chatting", label: "Clavardage" },
  { href: "/about", label: "A Propos" },
]

export const socialLinks = [
  {
    href: "https://github.com/RinKhimera/immi-canada",
    ariaLabel: "GitHub",
    icon: <FaGithub size={20} />,
  },
  {
    href: "https://www.linkedin.com/in/samuel-pokam/",
    ariaLabel: "LinkedIn",
    icon: <FaLinkedin size={22} />,
  },
  {
    href: "https://x.com/rin_khimera",
    ariaLabel: "X",
    icon: <FaXTwitter size={20} />,
  },
]
