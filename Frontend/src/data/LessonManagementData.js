

import {
    Brain,
    BookOpen
} from "lucide-react"

export const stats = ({ courses, lessons, isLoading}) => [
    {
        title: "Total Courses",
        value: isLoading ? "Loading..." : (courses?.length || 0),
        icon: Brain,
        tone: "from-cyan-500 to-blue-500",
    },

    {
        title: "Total Lessons",
        value: isLoading ? "Loading..." : (lessons?.length || 0),
        icon: BookOpen,
        tone: "from-emerald-500 to-teal-500",
    }
]