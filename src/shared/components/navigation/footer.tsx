import { Link } from '@tanstack/react-router'

import { Button } from '../ui'

import { WaitListForm } from '../misc'
import { ChoristarLogoIcon } from '@/assets/svg'

export const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center justify-around gap-4 border-t border-footer-border bg-background py-4 md:flex-row">
      <Link className="order-1 flex items-center gap-4 md:order-1" to="/">
        <ChoristarLogoIcon />
        <p className="font-semibold text-main-text capitalize">choristar</p>
      </Link>
      <div className="order-3 flex items-center gap-2 text-lg md:order-2">
        <span className="font-medium text-choristar-primary">
          &copy; {new Date().getFullYear()} Choristar.
        </span>
        <span>All Rights Reserved</span>
      </div>
      <div className="order-2 flex items-center gap-4 md:order-3">
        <WaitListForm>
          <Button asChild variant="ghost" className="text-lg">
            <span className="text-lg text-main-text capitalize">
              join the waitlist
            </span>
          </Button>
        </WaitListForm>
        <Button asChild variant="ghost" className="text-lg">
          <a
            aria-label="Choristar AI Mail"
            href="mailto:info@choristar.io?subject=Hello Admin"
            title="Contact US"
          >
            <span className="block text-lg text-main-text capitalize">
              contact us
            </span>
          </a>
        </Button>
      </div>
    </footer>
  )
}
