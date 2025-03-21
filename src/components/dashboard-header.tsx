import { MdOutlineAdd, MdRefresh, MdSearch } from "react-icons/md";

export default function DashboardHeader({ onAdd, onRefresh, isRefreshing }: {
  onAdd: () => void;
  onRefresh: () => void;
  isRefreshing: boolean;
}) {
  return (
    <div className="flex justify-between sm:items-center mb-6 border-b pb-4">
      <div className="flex gap-x-12">
        <h3 className="font-bold text-xl">Your Courses</h3>

        <a href="/dashboard/search" className="text-sm flex items-center gap-x-2 font-semibold hover:underline">
          <MdSearch />
          Search for Sections
        </a>

        <div onClick={onAdd} className="text-sm flex items-center gap-x-2 font-semibold hover:underline hover:cursor-pointer">
          <MdOutlineAdd />
          Add by CRN
        </div>
      </div>

      <div className={isRefreshing ? "animate-spin opacity-50" : "hover:cursor-pointer"} onClick={onRefresh}>
        <MdRefresh className="w-5 h-5" />
      </div>
    </div>
  );
}
