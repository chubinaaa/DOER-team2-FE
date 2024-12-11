interface LogoProps {
    width?: string;
    height?: string;
    backgroundColor?: string
    className?: string;
}

const Logo = ({ width = "w-[36.4%]", height = "h-[5.6%]", backgroundColor = "bg-[#D9D9D9]" }: LogoProps) => {
    return (
        <div
            className={` ${width} ${height} ${backgroundColor}  flex items-center justify-center ml-[4%] mt-[2.5%]`}
        >
            <div className='w-[77.5%] h-[63%] flex items-center justify-center p-[11px] '>
            Logo

            </div>
        </div>
    );
};

export default Logo;
