// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12

import { Sidebar, TopMenu } from "@/components";



export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* TODO: src/components <Sidebar /> */}
      <Sidebar />

      {/*TODO: Fin del <Sidebar /> */}
    
      
      {/* Main Layout content - Contenido principal del Layout */}
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        
        {/* TODO: src/components <TopMenu /> */}
        
        {/* TODO: Fin del <TopMenu /> */}
        <TopMenu />
        {/* TODO: Contenido en el Layout.tsx */}
        <div className="px-6 pt-6 bg-white p-2 m-2 pb-5 rounded">


          {/* TODO: dashboard/page.tsx  */}
          {/* Este contenido va dentro de page.tsx */}
           {children}
          {/* TODO: fin del dashboard/page.tsx  */}



        {/* TODO: Fin del contenido en el Layout.tsx */}
        </div>
      </div>
    </>
  );
}