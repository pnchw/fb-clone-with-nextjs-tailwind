function NavCenterIcon({ Icon, active }) {
    return (
        <div className={`order-b-2 ${active ? "border-b-2 border-blue-500" : "border-transparent"}`}>
            <div className="py-2 px-8 max-[900px]:px-4 rounded-xl hover:bg-gray-100 group cursor-pointer">
                <Icon className={`text-center h-6 group-hover:text-blue-500 mx-auto
                    ${active ? "text-blue-500" : "text-gray-500"}`} />
            </div>
        </div>
    )
    }

export default NavCenterIcon;   

