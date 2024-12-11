"use client";

export default function Home() {
    return (
        <div className="w-screen h-screen flex flex-col justify-between bg-gradient-to-br from-black/0 via-black/20 to-black/40 box-border">
            <img
                src="https://s3-alpha-sig.figma.com/img/88c5/ba94/7749f3110f5987917c742db34a329603?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KUJjOkVzmQFNlWzplMnCVI1doWAoHdjHdAkNB4morFYC6loBoQIpNmEJIAZin4gI14J2qeNe-g7DxsVbyqZa9vd5kta5WQqfW1ggwbbaID0Ed9enPoPfGww~GxCBQJ97SYBJ0oOHMjV0kS1vcwOunsQ0ZEUndAHE19zQhm62iFlCemTFLATFhh5n6rUqTAkdgm54uP2BsVkPR4EslfL7W8JM-4Os0FqX7DUuU~MPvlv5v1H6ZkkxO6yxIDUKgAft1-FYXfjjxjzyCWNjN1wCEIJ2gyFLn5qwXTYH3twHYOHxXoJrCK89YGg2BKZVAtTB~jCZnGWSIrUwZ5S-VncZag__"
                alt=""
                className="absolute z-[-5] h-full w-auto object-cover object-[55%] top-0 left-0"
            />
            <div className="flex justify-between items-center w-[91%] m-auto mt-[22px]">
                <span className="flex justify-center items-center w-[143px] h-[47px] bg-[#B2B0B0] text-[20px] font-[350]">
                    name/logo
                </span>
                <div className="flex justify-between items-center gap-[14px]">
                    <span className="text-black bg-white rounded-full w-[26px] h-[26px] text-center">
                        TMI
                    </span>
                    <span className="text-black bg-white rounded-full w-[26px] h-[26px] text-center">
                        LI
                    </span>
                </div>
            </div>
            <div className="flex items-center flex-col gap-12 mb-[87px] w-[91%] m-auto">
                <div className="w-full flex flex-col gap-12">
                    <h1 className="text-[#15593A] text-[35px] font-[700]">გამარჯობა!</h1>
                    <p className="text-[#15593A] text-[20px]">დაჯავშნე შენი საპარკინგე ადგილი</p>
                </div>
                <button
                    onClick={() => {
                        console.log("გაგრძელება");
                    }}
                    className="bg-[#15593A] text-[16px] text-white flex justify-center items-center w-full h-[55px] rounded-[14px]"
                >
                    გაგრძელება
                </button>
            </div>
        </div>
    );
}
