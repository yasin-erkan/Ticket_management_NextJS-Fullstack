import { Bell, Mail, Search, Settings, User } from "lucide-react";
import { FC, Suspense } from "react";
import Statistics from "./statistics";
import Loading from "./loading";

const Header: FC = () => {
    return (
        <>
            <header className="h-21 bg-zinc-900 border-b border-zinc-800 px-6 py-[18px] ">
                <div className="flex items-center justify-between gap-4">
                    {/* search bar */}
                    <div className="flex-1 max-w-md">
                        <div className="relative">
                            <Search className="size-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 " />
                            <input type="text" placeholder="Search Ticket" className="w-full pl-10 pr-4 py-2 rounded-lg bg-zinc-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                        </div>

                    </div>
                    {/* icons*/}
                    <div className="flex items-center gap-2 md:gap-4">
                        <button className="relative p-2 text-gray-400 hover:text-gray-100 rounded-lg hover:bg-zinc-800 transition">
                            <Bell className="size-5 text-gray-400" />
                            <span className="absolute -top-1 -right-1 size-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
                        </button>
                        <button className="relative p-2 text-gray-400 hover:text-gray-100 rounded-lg hover:bg-zinc-800 transition">
                            <Mail className="size-5 text-gray-400" />
                            <span className="absolute -top-1 -right-1 size-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">4</span>
                        </button>
                        {/* settings */}
                        <button className=" p-2 text-gray-400 hover:text-gray-100 rounded-lg hover:bg-zinc-800 transition">
                            <Settings className="size-5" />

                        </button>

                        {/* user profile */}
                        <div className="relative">
                            <button className="flex items-center gap-2 p-2 hover:bg-zinc-800 rounded-lg transition">
                                <div className="size-8 items-center bg-blue-600 rounded-full grid place-items-center">
                                    <User className="size-4 text-white" />
                                </div>


                                <div className="hidden md:block text-left">
                                    <p className="text-sm font-medium text-gray-100">User</p>
                                    <p className="text-xs text-gray-400">Admin</p>

                                </div>
                            </button>
                        </div>
                    </div>
                </div>

            </header>

            <Suspense fallback={<Loading />}>
                <Statistics />
            </Suspense>

        </>
    );
};

export default Header;