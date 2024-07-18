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
import { menuItems, socialLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MobileMenu } from "./mobile-menu"

export const SiteHeader = () => {
  const pathname = usePathname()

  return (
    <header className="py-2 flex justify-between sticky top-0 z-20 backdrop-blur">
      {/* Desktop Menu */}
      <NavigationMenu className="max-lg:hidden">
        <NavigationMenuList>
          {menuItems.map((item) => {
            const isActive = pathname === item.href

            return (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-muted-foreground bg-transparent",
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

      {/* Mobile Menu */}
      <MobileMenu />

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
