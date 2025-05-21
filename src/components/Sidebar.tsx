import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiBookmarkCheck, CiLogout } from 'react-icons/ci'
import { SidebarItem } from './SidebarItem'
import { IoBasketOutline, IoCalendarOutline, IoCheckboxOutline, IoCodeWorking, IoListOutline } from 'react-icons/io5'


const paths = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        icon: <IoCalendarOutline size={20} />
    },
    {
        path: '/dashboard/rest-todos',
        name: 'Rest todos',
        icon: <IoCheckboxOutline size={20} />
    },
    {
        path: '/dashboard/server-todos',
        name: 'Server Actions',
        icon: <IoListOutline size={20} />
    },
    {
      path: '/dashboard/cookies',
      name: 'Cookies',
      icon: <IoCodeWorking size={20} />
    },
    {
      path: '/dashboard/products',
      name: 'Productos',
      icon: <IoBasketOutline size={20} />
    },
]


export const Sidebar = () => {
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
            <div>
              <div className="-mx-6 px-6 py-4">
                {/* TODO: Next/Link hacia dashboard */}
                <Link href="/dashboard" title="home">
                  <Image src="https://miro.medium.com/v2/resize:fit:1400/0*oZLL-N4dGNlBe4Oh.png" width={200} height={200} alt="tailus logo"/>
                </Link>
              </div>
    
              <div className="mt-8 text-center">
                <Image src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/05/minato-s-kunai-naruto.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5" width={300} height={300} className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" alt='avatar'/>
                  <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Luis felipe</h5>
                  <span className="hidden text-gray-400 lg:block">Admin</span>
              </div>
    
              <ul className="space-y-2 tracking-wide mt-8">
                    {
                        paths.map( path => (
                            <SidebarItem key={path.name} {...path} />
                        ))
                    }
              </ul>
            </div>
            
    
            <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
              <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                <CiLogout />
                <span className="group-hover:text-gray-700">Logout</span>
              </button>
            </div>
          </aside>
  )
}
