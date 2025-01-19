import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <motion.span
        className="text-xl font-bold text-gray-900"
      >
        YourLogo
      </motion.span>
    </Link>
  )
}

