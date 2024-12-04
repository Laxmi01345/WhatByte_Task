import { BiAward } from "react-icons/bi";
import { FiAlignCenter } from "react-icons/fi";
import { IoDocumentOutline } from "react-icons/io5";

export default function leftbar() {
    return (
        <div className="font-bold text-gray-700 justify-center text-center mt-10 h-screen">
        <div className="p-4 flex hover:text-blue-600 cursor-pointer hover:bg-blue-100 rounded-r-full mr-10">
        <FiAlignCenter size={24}/>
        <h1 className="pl-4">Dashboard</h1>
        </div>
        <div className="p-4 flex hover:text-blue-600 cursor-pointer hover:bg-blue-100 rounded-r-full mr-10">
        <BiAward size={24}/>
        <h1 className="pl-4">Skill Test</h1>
        </div>
        <div className="p-4 flex hover:text-blue-600 cursor-pointer hover:bg-blue-100 rounded-r-full mr-10">
        <IoDocumentOutline size={24}/>
        <h1 className="pl-4">Internship</h1>
        </div>
    </div>
    )
}