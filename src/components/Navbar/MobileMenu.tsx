import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface MobileMenuProps {
  navItems: {
    name: string
    href: string
    dropdown?: { name: string; href: string }[]
  }[]
  setIsMobileMenuOpen: (isOpen: boolean) => void
}

export default function MobileMenu({ navItems, setIsMobileMenuOpen }: MobileMenuProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const handleDropdownToggle = (itemName: string) => {
    setOpenDropdown(prevState => prevState === itemName ? null : itemName)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="sm:hidden bg-white"
    >
      <div className="pt-2 pb-3 space-y-1">
        {navItems.map((item) => (
          <div key={item.name}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.dropdown ? (
                <button
                  className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 group"
                  onClick={() => handleDropdownToggle(item.name)}
                >
                  {item.name}
                  <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 group relative"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                </Link>
              )}
            </motion.div>
            {item.dropdown && openDropdown === item.name && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="pl-6 pb-2"
              >
                {item.dropdown.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.href}
                    className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 group relative"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {subItem.name}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

