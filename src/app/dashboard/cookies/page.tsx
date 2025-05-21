import { cookies } from 'next/headers'
import { TabBar } from "@/components";



export const metadata = {
 title: 'Cookies page',
 description: 'Cookies page',
};




export default async function CookiesPage() {

  const cookieStore = await cookies()
  const cookieTab = Number(cookieStore.get('selectedTab')?.value ?? '1');


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" > 
      <div className="flex flex-col">
        <span className="text-3xl">Tabs </span>
        <TabBar currentIndex={ cookieTab }/>
      </div>
    </div>
  );
};