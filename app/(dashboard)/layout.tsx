import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar/Sidebar";
import { OrgSidebar } from "./_components/org-sidebar";


interface DashboardLayoutProps{
    children: React.ReactNode;
};

const DashboardLayout =
({children,}:DashboardLayoutProps)=>{
return(
<main className="h-full">
    <Sidebar/>
    <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
            <OrgSidebar/>
            <div className="h-full flex-1">
                <Navbar/>
    {children}
            </div>
        </div>
    </div>
</main>
)
}
export default DashboardLayout