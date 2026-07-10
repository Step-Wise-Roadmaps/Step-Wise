import { TableRows } from "../../data/UserManagementData";

function TableHeader() {
  return (
    <header className="w-full bg-slate-50 p-5 rounded-2xl border border-slate-200">
      {TableRows.map((TableRow, index) => (
        <div
          key={index}
          className="grid grid-cols-7 items-center gap-4"
        >
          <p className="col-span-2 text-sm md:text-base text-slate-700 roboto-medium">
            {TableRow.fullName}
          </p>

          <p className="col-span-2 text-sm md:text-base text-slate-700 roboto-medium">
            {TableRow.email}
          </p>

          <p className="text-sm md:text-base text-slate-700 roboto-medium">
            {TableRow.skill}
          </p>

          <p className="text-sm md:text-base text-slate-700 roboto-medium">
            {TableRow.role}
          </p>

          <p className="text-right text-sm md:text-base text-slate-700 roboto-medium">
            Action
          </p>
        </div>
      ))}
    </header>
  );
}

export default TableHeader;