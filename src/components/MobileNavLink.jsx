import React from 'react'
import { Popover } from '@headlessui/react'
import Link from 'next/link'

const MobileNavLink = ({ href, children }) => {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

export default MobileNavLink