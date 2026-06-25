import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../features/auth/authSlice";
import { BookOpen } from "lucide-react";
import sideBarLogo from "../../assets/sideBarLogo/sideBarLogo.png";

function UserDashboard() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    console.log("Current user state structure:", user);

    return (
        <section className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 md:p-10 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <div className="relative flex justify-between">
                <div className="max-w-2xl space-y-2">
                    <h1 className="roboto-semibold text-3xl">Welcome {user?.full_name} 👋</h1>
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
    );
}

export default UserDashboard;