import Link from 'next/link'
import { motion } from 'framer-motion'

interface DropdownMenuProps {
  items: { name: string; href: string }[]
}

export default function DropdownMenu({ items }: DropdownMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
    >
      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 group relative"
            role="menuitem"
          >
            {item.name}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

