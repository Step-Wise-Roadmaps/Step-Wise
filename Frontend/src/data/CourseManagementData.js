

import {
    Brain,
    BookOpen
} from "lucide-react"

export const stats = ({users, courses, skills, isLoading}) => [
    {
        title: "Total Skils",
        value: isLoading ? "Loading..." : (skills?.length || 0),
        icon: Brain,
        tone: "from-cyan-500 to-blue-500",
    },

    {
        title: "Total Courses",
        value: isLoading ? "Loading..." : (courses?.length || 0),
        icon: BookOpen,
        tone: "from-emerald-500 to-teal-500",
    }
]