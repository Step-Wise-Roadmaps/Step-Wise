import { stats } from "../../../data/UserDashbourdData/UserDashbourdCardData";

function UserDashboardCards({ lessons, isLoading}) {
    return(
        <>
            {stats({ lessons, isLoading}).map((stat) => {
                const Icon = stat.icon;
                return(
                    <div key={stat.title} className="p-6 md:p-8 flex items-center justify-between border border-slate-200 rounded-xl shadow-sm bg-white">
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                            <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                        </div>
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.tone} text-white`}>
                            <Icon className="w-6 h-6" />
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default UserDashboardCards;