interface LogoProps {
    width?: string
    height?: string;
  }
  
  const Logo = ({ width = 'w-[143px]', height = 'h-[47px]' }: LogoProps) => {
    return (
      <div className={` ${width} ${height}  flex items-center justify-center bg-[#D9D9D9] p-[11px]`}>
        Logo
      </div>
    );
  }
  
  export default Logo;