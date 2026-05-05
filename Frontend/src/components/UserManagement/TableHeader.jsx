
import { TableRows } from "../../data/UserManagementData";

function TableHeader() {
  return (
    <header className='w-full bg-slate-50 p-5 rounded-2xl'>
      {TableRows.map((TableRow, index) => {
          return(
            <div key={index} className='grid grid-cols-7 gap-4'>
              <p className='col-span-2'>{TableRow.fullName}</p>
              <p className='col-span-2'>{TableRow.email}</p>
              <p>{TableRow.skill}</p>
              <p>{TableRow.enroled}</p>
              <p>{TableRow.role}</p>
            </div>
          )
        })}
    </header>
  );
}

export default TableHeader;