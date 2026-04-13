
import AdminSideBar from "../components/AdminSideBar.jsx"

import sideBarLogo from "../assets/sideBarLogo/sideBarLogo.png";
import profilePhoto from "../assets/sideBarLogo/profilePhoto.png"

function AdminDashboard() {
    return (
        <>
            <div className="flex bg-[#F9FAFB] w-full h-screen space-x-20 md:space-x-12">
                <div>
                    <AdminSideBar />
                </div>
                <div className="flex flex-col w-full m-6 space-y-15">
                    <div className="flex items-center ">
                        <h1 className="roboto-bold text-2xl text-cyan-900">Welcom To Admin Dashboard</h1>
                    </div>

                    <div className="p-6 bg-white rounded-xl flex-col space-y-10 md:flex md:space-x-30">
                        <div className=" flex items-center space-x-4">
                            <img className="w-20 h-20 rounded-[50px]" src={profilePhoto} alt="" />
                            <div>
                                <p className="roboto-regular text-md">Students</p>
                                <h1 className="roboto-semibold text-2xl">200</h1>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <img className="w-20 h-20 rounded-[50px]" src={profilePhoto} alt="" />
                            <div>
                                <p className="roboto-regular text-md">Students</p>
                                <h1 className="roboto-semibold text-2xl">200</h1>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <img className="w-20 h-20 rounded-[50px]" src={profilePhoto} alt="" />
                            <div>
                                <p className="roboto-regular text-md">Students</p>
                                <h1 className="roboto-semibold text-2xl">200</h1>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <img className="w-20 h-20 rounded-[50px]" src={profilePhoto} alt="" />
                            <div>
                                <p className="roboto-regular text-md">Students</p>
                                <h1 className="roboto-semibold text-2xl">200</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard;