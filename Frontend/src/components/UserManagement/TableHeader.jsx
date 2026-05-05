
import { TableRows } from "../../data/UserManagementData";

function TableHeader() {
  return (
    <header className='w-full bg-slate-50 p-5 rounded-2xl'>
      {TableRows.map((TableRow, index) => {
          return(
            <div key={index} className='grid grid-cols-7 gap-4'>
              <p className='col-span-2 text-md text-slate-900 roboto-medium'>{TableRow.fullName}</p>
              <p className='col-span-2 text-md text-slate-900 roboto-medium'>{TableRow.email}</p>
              <p className="text-slate-900 text-md roboto-medium">{TableRow.skill}</p>
              <p className="text-slate-900 text-md roboto-medium">{TableRow.enroled}</p>
              <p className="text-slate-900 text-md roboto-medium">{TableRow.role}</p>
            </div>
          )
        })}
    </header>
  );
}

export default TableHeader;