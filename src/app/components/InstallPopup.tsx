import Logo from "./Logo";
const InstallPopup = () => {
    return (
        <div className="flex justify-center items-center w-full h-screen ">
            <div className="flex justify-center items-center gap-[30%] w-[70%] h-[8.56%] rounded-[12px] bg-[#F7F7F7] absolute top-[4%] left-[14.5%]  p-[6.4%] border-box">
                <Logo width="w-[12.35%]" height="h-[47%]" backgroundColor="bg-[#567DF4]"/>
                <div>
                    <p className="w-[38%] h-[19%] font-bold text-[10px] mb-[15%] text-[#000000]">
                        დააყენე “სახელი”
                    </p>
                    <p className="w-[16.48%] h-[16.4%] font-light text-[10px]text-[#888888]">
                        sakheli.ge
                    </p>
                </div>
                <button className=" w-[12.5%] h-[19%] font-bold text-[12px] text-[#567DF4]">
                    Install
                </button>
            </div>
        </div>
    );
};

export default InstallPopup;
