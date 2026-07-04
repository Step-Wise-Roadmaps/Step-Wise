import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../features/auth/authSlice";
import { BookOpen } from "lucide-react";
import sideBarLogo from "../../assets/sideBarLogo/sideBarLogo.png";

import UserDashboardCards from "../../components/UserDashboardCommponents/UserDashboardCardCommpnents/UserDashboardCards";
import { stats } from "../../data/UserDashbourdData/UserDashbourdCardData"

function UserDashboard() {
    const dispatch = useDispatch();
    const { user, isLoading } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    // console.log("Current user state structure:", user);

    return (
        <div>
            <section className="relative overflow-hidden rounded-xl border border-slate-200 bg-white mb-10 p-6 md:p-10 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
                <div className="relative flex justify-between">
                    <div className="max-w-2xl space-y-2">
                        <h1 className="roboto-semibold text-3xl">Welcome Back {user?.full_name} 👋</h1>
                        <div className="flex gap-2">
                            <span className="text-slate-300"><BookOpen /></span>
                            <p className="roboto-extralight text-slate-500">Start Learning {user?.skill_name || "your skill"} </p>
                        </div>
                    </div>
                    <div>
                        <img src={sideBarLogo} alt="" />
                    </div>
                </div>
            </section>
            <div className="grid grid-cols-1 gap-10">
                <UserDashboardCards
                    // lessons={lessons}
                    isLoading={isLoading}
                />
            </div>
        </div>
    );
}

export default UserDashboard;