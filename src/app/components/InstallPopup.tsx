import Logo from "./Logo";
const InstallPopup = () => {
    return (
        <div className="w-[279px] h-[73px] top-[34px] left-[57px] rounded-[12px] bg-[#F7F7F7]">
            <div className="flex">
                <Logo width="34.48px" height="34.48px mt-[18px] mr-[12px] mb-[21px] ml-[18px]" />
                <div>
                    <p className="w-[108px] h-[14px] mt-[18px] mr-[64px] font-FiraGO font-bold text-[10px] leading-[14.4px] text-[#000000]">
                        დააყენე “სახელი”
                    </p>
                    <p className="w-[46px] h-[12px] mb-[18px] mr-[64px] mt-[11px] font-FiraGO font-light text-[10px] leading-[12px] text-[#888888]">
                        sakheli.ge
                    </p>
                </div>
                <button className=" w-[35px] h-[14px] mt-[30px] ml-[-28px] font-FiraGO font-bold text-[12px] leading-[14.4px] text-[#567DF4]">
                    Install
                </button>
            </div>
        </div>
    );
};

export default InstallPopup;
