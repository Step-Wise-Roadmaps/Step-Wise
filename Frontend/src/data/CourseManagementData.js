

import {
    Users,
    UserStar,
} from "lucide-react"

export const stats = ({users, courses, skills, isLoading}) => [
    {
        title: "Total Skils",
        value: isLoading ? "Loading..." : (skills?.length || 0),
        icon: Users,
        tone: "from-cyan-500 to-blue-500",
    },

    {
        title: "Total Courses",
        value: isLoading ? "Loading..." : (courses?.length || 0),
        icon: UserStar,
        tone: "from-emerald-500 to-teal-500",
    }
]