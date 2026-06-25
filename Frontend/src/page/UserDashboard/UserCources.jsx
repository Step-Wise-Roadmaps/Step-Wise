
import sideBarLogo from "../../assets/sideBarLogo/sideBarLogo.png";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../features/auth/authSlice";

function UserCources() {

    const dispatch = useDispatch();
    const { user, isLoading } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);


    return(
        <>
            <div>
                <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white mb-10 p-6 md:p-10 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.16),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.10),_transparent_28%)]" />
                    <div className="relative flex justify-between">
                        <div className="max-w-2xl space-y-2">
                            <h1 className="roboto-semibold text-3xl">{user?.skill_name || "your skill"} Fundamentals </h1>
                            <div className="flex gap-2">
                                <p className="roboto-extralight text-slate-500">Start Learning {user?.skill_name || "your skill"} </p>
                            </div>
                        </div>
                        <div>
                            <img src={sideBarLogo} alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default UserCources;