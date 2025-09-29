import { Link } from '@tanstack/react-router'

import { ButtonWithOutline } from '../misc'

import { ChoristarLogoIcon } from '@/assets/svg'

export const Header = () => {
  return (
    <header className="section-container sticky top-0 z-50 flex justify-between px-4 py-3 backdrop-blur-sm md:px-5 xl:px-8 border-b border-text-field md:border-none shadow-md md:shadow-none">
      <Link className="flex items-center gap-4" to="/">
        <ChoristarLogoIcon />
        <p className="font-semibold text-main-text capitalize">choristar</p>
      </Link>
      <ButtonWithOutline className="rounded-3xl px-4 py-3.5 font-medium md:px-6 lg:px-9" />
    </header>
  )
}
