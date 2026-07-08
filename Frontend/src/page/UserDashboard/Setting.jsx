
function Setting() {
    return(
        <>
            <div>
                <div className="p-8 md:p-10 w-full space-y-5">
                    <h1 className="roboto-bold text-4xl">Account Settings</h1>

                    <div className="border border-slate-200 rounded-md shadow-md p-10">
                        <div className="space-y-5">
                            <p className="roboto-medium text-lg">Login Information</p>
                            <p className="roboto-light text-md">
                                Current Password (required to update email or change current password)
                            </p>
                            <div className="space-y-2">
                                <input
                                    className="w-full border border-slate-400 p-3 outline-blue-500" placeholder="Current Password" 
                                    type="password"
                                />
                                <p 
                                    className="text-right underline cursor-pointer text-blue-500 hover:text-blue-700 duration-100">
                                    Forget Password?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Setting;