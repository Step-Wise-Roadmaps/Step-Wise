
import { BookOpen } from "lucide-react";
import sideBarLogo from "../../assets/sideBarLogo/sideBarLogo.png";

import { useSelector } from "react-redux"

function UserDashboard() {

    const { user } = useSelector((state) => state.auth);

    return (
        <>
            <section className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 md:p-10 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.16),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.10),_transparent_28%)]" />

                <div className="relative flex justify-between">
                    <div className="max-w-2xl space-y-2">
                        <h1 className="roboto-semibold text-3xl">Welcome Neftalem! 👋</h1>
                        <div className="flex gap-2">
                            <span className="text-slate-300"><BookOpen /></span>
                            <p className="roboto-extralight text-slate-500">Start Learning web development </p>
                        </div>
                    </div>
                    <div>
                        <img src={sideBarLogo} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default UserDashboard;