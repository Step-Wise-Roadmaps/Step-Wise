import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import sideBarLogo from "../../assets/sideBarLogo/sideBarLogo.png";
import { changeUserProfile, reset } from "../../features/auth/authSlice";

function UserProfile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
    });

    const { full_name, email } = formData;

    useEffect(() => {
        if (user) {
            setFormData({
                full_name: user.full_name || "",
                email: user.email || "",
            });
        }
    }, [user]);

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
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            full_name,
            email,
        };

        dispatch(changeUserProfile(userData));
    };

    return (
        <div>
            <form
                onSubmit={onSubmit}
                className="p-8 md:p-10 border border-slate-200 shadow-sm w-full h-full space-y-10"
            >
                <div className="flex justify-between items-center">
                    <h1 className="roboto-semibold text-xl">Profile</h1>
                    <img src={sideBarLogo} alt="Logo" />
                </div>

                <div className="roboto-medium text-md">
                    Details
                </div>

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* Full Name */}
                    <div className="space-y-3">
                        <h1 className="roboto-semibold text-md">
                            Full Name
                        </h1>

                        <input
                            type="text"
                            name="full_name"
                            value={full_name}
                            onChange={onChange}
                            className="border border-black outline-blue-500 w-full p-2 rounded-md"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-3">
                        <h1 className="roboto-semibold text-md">
                            Email
                        </h1>

                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            className="border border-black outline-blue-500 w-full p-2 rounded-md"
                            required
                        />

                        <p
                            onClick={() =>
                                navigate("/user-dashboard/settings")
                            }
                            className="text-right text-blue-500 cursor-pointer hover:text-blue-600 hover:underline"
                        >
                            Change Password.
                        </p>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 duration-200 disabled:bg-gray-400 cursor-pointer"
                >
                    {isLoading ? "Saving..." : "Save"}
                </button>
            </form>
        </div>
    );
}

export default UserProfile;