import Bottombar from '@/components/shared/Bottombar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'
import TopBar from '@/components/shared/TopBar'

import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
    return (
        <div className='w-full md:flex'>

            <TopBar />
            <LeftSidebar />


            <section className="flex flex-1 h-full">
                <Outlet />
            </section>
            <RightSidebar />



            <Bottombar />
        </div>
    )
}
