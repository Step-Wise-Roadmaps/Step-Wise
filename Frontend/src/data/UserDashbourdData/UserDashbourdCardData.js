

import {
    Users,
    UserStar,
} from "lucide-react"

export const stats = ({users, isLoading}) => [
    {
        title: "Total Cources",
        value: isLoading ? "Loading..." : (users?.length || 0),
        icon: Users,
        tone: "from-cyan-500 to-blue-500",
    },

    {
        title: "Total Lesson",
        value: isLoading ? "Loading..." : (users.filter((user) => user.role === "admin").length || 0),
        icon: UserStar,
        tone: "from-emerald-500 to-teal-500",
    }
]