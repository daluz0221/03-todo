'use client';

import Link from "next/link"
import { usePathname } from "next/navigation";


interface Props {
    path: string;
    name: string;
    icon: React.ReactNode
}

export const SidebarItem = ({ path, name, icon }:Props) => {

    const pathName = usePathname();

  return (
    <li>
        <Link href={ path } className={`relative px-4 py-3 flex items-center space-x-4 hover:bg-sky-600 hover:rounded-2xl hover:text-white ${ (pathName === path && 'rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400') }`}>
        {icon}
        <span className="-mr-1 font-medium">{ name }</span>
        </Link>
    </li>
  )
}
