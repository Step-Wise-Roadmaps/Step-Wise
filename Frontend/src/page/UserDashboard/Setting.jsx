
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePassword, reset } from "../../features/auth/authSlice";

function Setting() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [ formData, setFormData ] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const { oldPassword, newPassword, confirmPassword } = formData;
    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isSuccess || isError) {
            const timer = setTimeout(() => {
                dispatch(reset());
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [isSuccess, isError, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            oldPassword,
            newPassword,
            confirmPassword
        };

        dispatch(changePassword(userData));
    };

    return(
        <>
            <form onSubmit={onSubmit}>
                <div className="p-8 md:p-10 w-full space-y-5">
                    <h1 className="roboto-bold text-4xl">Account Settings</h1>

                    <div className="border border-slate-200 rounded-md shadow-md p-10">
                        <div className="space-y-5">
                            <p className="roboto-medium text-lg">Login Information</p>
                            <p className="roboto-light text-md">
                                Current Password (required to update email or change current password)
                            </p>
                            <div className="space-y-2">

                                {message && (
                                    <p
                                        className={`mt-2 text-sm text-center font-medium ${
                                            isError
                                                ? "text-red-500 bg-red-50 border border-red-200"
                                                : "text-green-600 bg-green-50 border border-green-200"
                                        } p-3 rounded-md`}
                                    >
                                        {message}
                                    </p>
                                )}

                                <input
                                    className="w-full border border-slate-400 p-2 md:p-3 outline-blue-500" placeholder="Current Password" 
                                    type="password"
                                    name="oldPassword"
                                    value={oldPassword}
                                    onChange={onChange}
                                    required
                                />
                                <p 
                                    onClick={() => navigate("/forgot-password")}
                                    className="text-right underline cursor-pointer text-blue-500 hover:text-blue-700 duration-100">
                                    Forget Password?
                                </p>
                            </div>

                            <p className="roboto-light text-md">
                                Add Your New Password
                            </p>
                            <input
                                className="w-full border border-slate-400 p-2 md:p-3 outline-blue-500" placeholder="New Password" 
                                type="password"
                                name="newPassword"
                                value={newPassword}
                                onChange={onChange}
                                required
                            />

                            <p className="roboto-light text-md">
                                Repeat Your New Password
                            </p>
                            <input
                                className="w-full border border-slate-400 p-2 md:p-3 outline-blue-500" placeholder="Repeat Password" 
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={onChange}
                                required
                            />
                            <button 
                                className="bg-blue-500 p-3 px-8 cursor-pointer rounded-md text-white hover:bg-blue-600 duration-200"
                                type="submit"
                                disabled={isLoading}>
                                {isLoading ? "Saving..." : "Change"}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Setting;