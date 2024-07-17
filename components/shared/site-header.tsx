"use client"

import { ModeToggle } from "@/components/theme-toggle"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export const SiteHeader = () => {
  const pathname = usePathname()

  const menuItems = [
    { href: "/", label: "Accueil" },
    { href: "/calculator", label: "Calculatrice" },
    { href: "/faq", label: "FAQ" },
    { href: "/acronyms", label: "Abréviations" },
    { href: "/chatting", label: "Clavardage" },
    { href: "/about", label: "A Propos" },
  ]

  const socialLinks = [
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

  return (
    <header className="py-2 mx-10 flex justify-between sticky top-0 z-20 backdrop-blur">
      <NavigationMenu>
        <NavigationMenuList>
          {menuItems.map((item) => {
            const isActive = pathname === item.href

            return (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-muted-foreground",
                      { "text-accent-foreground": isActive }
                    )}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )
          })}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex">
        {socialLinks.map(({ href, ariaLabel, icon }) => (
          <Link
            key={href}
            className={buttonVariants({ variant: "ghost", size: "icon" })}
            target="_blank"
            rel="noopener noreferrer"
            href={href}
            aria-label={ariaLabel}
          >
            {icon}
          </Link>
        ))}
        <ModeToggle />
      </div>
    </header>
  )
}
