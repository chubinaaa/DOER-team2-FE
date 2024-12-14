import Logo from "./Logo";
import { useState } from "react";

type TProps = {
    onClick: () => void;
};
const InstallPopup: React.FC<TProps> = ({ onClick }) => {
    const [isVisible, setVisibleState] = useState(true);

    const hide = () => {
        console.log("hide, hide me clicked");
        setVisibleState(false);
    };

    if (!isVisible) {
        return <></>;
    }

    return (
        <>
            <div
                onClick={hide}
                className="w-screen h-screen absolute top-0 bottom-0 flex justify-center items-start z-50"
            >
                <div className="flex justify-center items-center gap-[5%] w-[70%] h-[73px] rounded-[12px] bg-[#F7F7F7] absolute top-[4%] left-[14.5%]  py-[6.4%] px-[3.5%] border-box">
                    <Logo className="w-[34px] h-[34px] text-[9px]" />
                    <div className="flex-1">
                        <p className="font-bold text-[10px] text-[#000000]">დააყენე “სახელი”</p>
                        <p className="w-[16.48%] h-[16.4%] font-light text-[10px]text-[#888888]">
                            sakheli.ge
                        </p>
                    </div>
                    <button className="font-bold text-[12px] text-[#567DF4]" onClick={onClick}>
                        Install
                    </button>
                </div>
            </div>
        </>
    );
};

export default InstallPopup;
