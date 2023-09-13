import IconButton from "./IconButton";
import { HomeIcon,HeartIcon,BuildingLibraryIcon,PlusCircleIcon,RssIcon,FireIcon } from "@heroicons/react/24/outline";
const Divider = () => <hr className="border-t-(0.1px) bordere-gray-900"/>
const Sliderbar = () => {
    
    return (
        <div className="text-gray-500 px-5 pt-5 pb-36 text-xs lg:text-sm border-r border-gray-900 h-screen overflow-y-scroll sm:max-w-[12rem] lg:max-w-[15rem] hidden md:block scrollbar" >
            <div className="space-y-4">
                <IconButton icon={HomeIcon} label="Home" />
                <Divider/>
                <IconButton icon={HeartIcon} label="Liked Songs" />
                <Divider/>
                <IconButton icon={BuildingLibraryIcon} label="Your Library" />
                <Divider/>
                <IconButton icon={PlusCircleIcon} label="Create PlayList" />
                <Divider/>
                <IconButton icon={RssIcon} label="Your Episodes" />
                <Divider/>
                <IconButton icon={FireIcon} label="Hot" />
                <Divider/>
            </div>
            <p className="cursor-pointer hover:text-white pt-1">
                PLAYLIST
            </p>
            <p className="cursor-pointer hover:text-white pt-1">
                PLAYLIST
            </p>
            <p className="cursor-pointer hover:text-white pt-1">
                PLAYLIST
            </p>
            <p className="cursor-pointer hover:text-white pt-1">
                PLAYLIST
            </p>
            <p className="cursor-pointer hover:text-white pt-1">
                PLAYLIST
            </p>
            <p className="cursor-pointer hover:text-white pt-1">
                PLAYLIST
            </p>
            <p className="cursor-pointer hover:text-white pt-1">
                PLAYLIST
            </p>
            <p className="cursor-pointer hover:text-white pt-1">
                PLAYLIST
            </p>
            <p className="cursor-pointer hover:text-white pt-1">
                PLAYLIST
            </p>
            <p className="cursor-pointer hover:text-white pt-1">
                PLAYLIST
            </p>
            <p className="cursor-pointer hover:text-white pt-1">
                PLAYLIST
            </p><p className="cursor-pointer hover:text-white pt-1">
                PLAYLIST
            </p><p className="cursor-pointer hover:text-white pt-1">
                PLAYLIST
            </p><p className="cursor-pointer hover:text-white pt-1">
                PLAYLIST
            </p><p className="cursor-pointer hover:text-white pt-1">
                PLAYLIST
            </p><p className="cursor-pointer hover:text-white pt-1">
                PLAYLIST
            </p><p className="cursor-pointer hover:text-white pt-1">
                PLAYLIST
            </p>
            
        </div>
    );
}
export default Sliderbar;