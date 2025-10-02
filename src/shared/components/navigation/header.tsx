import { Link } from '@tanstack/react-router'

import { ButtonWithOutline } from '../misc'

import { ChoristarLogoIcon } from '@/assets/svg'

export const Header = () => {
  return (
    <header className="section-container sticky top-0 z-50 flex justify-between border-b border-text-field px-4 py-3 shadow-md backdrop-blur-sm md:border-none md:px-5 md:shadow-none xl:px-8">
      <Link className="flex items-center gap-4" to="/">
        <ChoristarLogoIcon />
        <p className="font-semibold text-main-text capitalize">choristar</p>
      </Link>
      <ButtonWithOutline className="rounded-3xl px-4 py-3.5 font-medium md:px-6 lg:px-9" />
    </header>
  )
}
