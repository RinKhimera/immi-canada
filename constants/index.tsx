import { Acronyms } from "@/app/acronyms/columns"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { v4 as uuidv4 } from "uuid"

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

export const acronymsDefinitions: Acronyms[] = [
  {
    id: uuidv4(),
    acronym: "DI",
    definition: "Déclaration d’Intérêt",
  },
  {
    id: uuidv4(),
    acronym: "MPQ",
    definition: "Mon Projet Québec",
  },
  {
    id: uuidv4(),
    acronym: "CSQ",
    definition: "Certificat de Sélection du Québec",
  },
  {
    id: uuidv4(),
    acronym: "TQQ",
    definition: "Travailleur Qualifiés du Québec",
  },
  {
    id: uuidv4(),
    acronym: "PRTQ",
    definition: "Programme Régulier des Travailleurs Qualifiés",
  },
  {
    id: uuidv4(),
    acronym: "AR / ADR",
    definition: "Accusé de Réception",
  },
  {
    id: uuidv4(),
    acronym: "AOR",
    definition: "Acknowledgment Of Receipt",
  },
  {
    id: uuidv4(),
    acronym: "ARDF",
    definition: "Accusé de Réception Dossier Fédéral",
  },
  {
    id: uuidv4(),
    acronym: "BIO",
    definition: "Données biométriques",
  },
  {
    id: uuidv4(),
    acronym: "IVM",
    definition: "Invitation à la Visite Médicale",
  },
  {
    id: uuidv4(),
    acronym: "VM",
    definition: "Visite Médicale",
  },
  {
    id: uuidv4(),
    acronym: "VMF",
    definition: "Visite Médicale Favorable",
  },
  {
    id: uuidv4(),
    acronym: "IRCC",
    definition: "Immigration, Réfugiés et Citoyenneté Canada",
  },
  {
    id: uuidv4(),
    acronym: "FDRP",
    definition: "Frais de Demande de Résidence Permanente",
  },
  {
    id: uuidv4(),
    acronym: "RP",
    definition: "Résidence Permanente",
  },
  {
    id: uuidv4(),
    acronym: "TCF",
    definition: "Test de Connaissance du Français",
  },
  {
    id: uuidv4(),
    acronym: "TEF",
    definition: "Test d’Évaluation de Français",
  },
  {
    id: uuidv4(),
    acronym: "PMI",
    definition: "Programme de Mobilité International",
  },
  {
    id: uuidv4(),
    acronym: "PTO",
    definition: "Permis de Travail Ouvert",
  },
  {
    id: uuidv4(),
    acronym: "PTF",
    definition: "Permis de Travail Fermé",
  },
  {
    id: uuidv4(),
    acronym: "VO",
    definition: "Visa Office / Bureau des Visas",
  },
  {
    id: uuidv4(),
    acronym: "CoPR",
    definition:
      "Confirmation of Permanent Residence / Confirmation de la Résidence Permanente",
  },
  {
    id: uuidv4(),
    acronym: "PPR",
    definition: "Passport Request / Demande de Passeport",
  },
].sort((a, b) => a.acronym.localeCompare(b.acronym))
