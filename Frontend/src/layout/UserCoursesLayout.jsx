
import { Outlet } from "react-router-dom";
import LessonSideBar from "../page/UserDashboard/LessonSideBar";
import { useState } from "react";

function UserCoursesLayout() {

    const [selectedLesson, setSelectedLesson] = useState(null);

    return(
        <div>
            <div className="flex">
                <LessonSideBar 
                    variant="main"
                    selectedLesson={selectedLesson}
                    setSelectedLesson={setSelectedLesson} 
                    />
                <main className="flex-1 min-h-screen w-full bg-slate-50 text-slate-900">
                    <Outlet context={{
                        selectedLesson
                    }} />
                </main>
            </div>
        </div>
    )
}

export default UserCoursesLayout;