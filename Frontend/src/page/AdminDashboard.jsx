
import AdminSideBar from "../components/AdminSideBar.jsx"

import sideBarLogo from "../assets/sideBarLogo/sideBarLogo.png";
import profilePhoto from "../assets/sideBarLogo/profilePhoto.png"

function AdminDashboard() {
    return (
        <>
            <div className="flex bg-[#F9FAFB] w-full h-screen md:space-x-20 md:space-x-12">
                <div>
                    <AdminSideBar />
                </div>
                <div className="flex flex-col w-full m-6 space-y-10">
                    <div className="flex items-center ">
                        <h1 className="roboto-bold text-lg md:text-2xl ml-15 md:ml-0 text-cyan-900">Welcom To Admin Dashboard</h1>
                    </div>

                    <div className="p-6 bg-white rounded-xl flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
                        <div className=" flex items-center space-x-4">
                            <img className="w-16 h-16 md:w-20 md:h-20 rounded-full" src={profilePhoto} alt="" />
                            <div>
                                <p className="roboto-regular text-md">Students</p>
                                <h1 className="roboto-semibold text-2xl">100</h1>
                            </div>
                        </div>

                        <div className=" flex items-center space-x-4">
                            <img className="w-16 h-16 md:w-20 md:h-20 rounded-full" src={profilePhoto} alt="" />
                            <div>
                                <p className="roboto-regular text-md">Skills</p>
                                <h1 className="roboto-semibold text-2xl">5</h1>
                            </div>
                        </div>

                        <div className=" flex items-center space-x-4">
                            <img className="w-16 h-16 md:w-20 md:h-20 rounded-full" src={profilePhoto} alt="" />
                            <div>
                                <p className="roboto-regular text-md">Cources</p>
                                <h1 className="roboto-semibold text-2xl">10</h1>
                            </div>
                        </div>

                        <div className=" flex items-center space-x-4">
                            <img className="w-16 h-16 md:w-20 md:h-20 rounded-full" src={profilePhoto} alt="" />
                            <div>
                                <p className="roboto-regular text-md">Lessons</p>
                                <h1 className="roboto-semibold text-2xl">50</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard;