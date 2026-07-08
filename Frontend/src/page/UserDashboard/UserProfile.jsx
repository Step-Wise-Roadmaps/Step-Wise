
import sideBarLogo from "../../assets/sideBarLogo/sideBarLogo.png"

function UserProfile() {
    return(
        <>
            <div>
                <div className="p-8 md:p-10 border border-slate-200 shadow-sm w-full h-full space-y-10">
                    <div className="flex justify-between items-center">
                        <h1 className="roboto-semibold text-xl">Profile</h1>
                        <img src={sideBarLogo} alt="" />
                    </div>

                    <div className="roboto-medium text-md">Details</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-3">
                            <h1 className="roboto-semibold text-md">Full Name</h1>
                            <input type="text" className="border border-black outline-blue-500 w-full p-2 rounded-md" />
                        </div>
                        <div className="space-y-3">
                            <h1 className="roboto-semibold text-md">Email</h1>
                            <input type="text" className="border border-black outline-blue-500 w-full p-2 rounded-md" />
                        </div>
                    </div>
                    <button className="text-center bg-blue-500 p-3 px-8 rounded-lg cursor-pointer text-white hover:bg-blue-600 duration-200">Save</button>
                </div>
            </div>
        </>
    )
}

export default UserProfile