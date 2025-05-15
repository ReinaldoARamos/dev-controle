import { FileText, Folder, Trash } from "lucide-react";

export function Tickets() {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4 text-[16px] font-medium ">
      <div className="w-1/3 truncate">Fulano da Silva</div>
      <div className="w-1/4">12/05/2025</div>
      <div className="w-1/4 uppercase  text-black">
        <span className="rounded-sm bg-green-500 px-4 py-[3px]">Aberto</span>
      </div>
      <div className="w-[50px] text-right">
        <div className="flex gap-2.5">
          <Trash size={24} className="text-red-500" />
          <FileText size={24} className="text-blue-600" />
        </div>
      </div>
    </div>
  );
}
