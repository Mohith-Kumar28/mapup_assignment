import Image from 'next/image'
import { Inter } from 'next/font/google'
import LayoutComponent from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <LayoutComponent/>
    </>
  ) 
}
