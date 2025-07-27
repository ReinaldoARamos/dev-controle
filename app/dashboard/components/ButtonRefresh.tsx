"use client";

import { RefreshCwIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export function RefreshButton() {
  const router = useRouter();

  return (
    <button onClick={router.refresh} className="rounded-sm bg-blue-500 px-2 py-[6px] font-medium leading-[150%] text-white transition-all duration-300 hover:bg-blue-400 hover:cursor-pointer">
      <RefreshCwIcon size={24} color="white" />
    </button>
  );
}
