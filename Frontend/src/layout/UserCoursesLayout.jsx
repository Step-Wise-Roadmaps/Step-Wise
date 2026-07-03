
import { Outlet } from "react-router-dom";
import LessonSideBar from "../page/UserDashboard/LessonSideBar";

function UserCoursesLayout() {
    return(
        <div>
            <div className="flex">
                <LessonSideBar variant="main" />
                <main className="flex-1 min-h-screen w-full bg-slate-50 text-slate-900">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default UserCoursesLayout;