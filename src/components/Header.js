import Image from "next/image"
export default function Header() {
    return (
        <main>
            <div className="mt-8 mx-8 rounded-[2rem] bg-gradient-to-b from-0% from-pink-400 to-100% to-cyan-300 p-12 h-[32.5rem] box-border">
                <Image src="/img10.jpg" width="46" height="46" className="rounded-full z-40 ml-[400px] mt-[50px]" />
                <Image src="/img7.jpg" width="84" height="84" className="rounded-full z-30 ml-[625px] mt-[-84px]"/>
                <Image src="/img3.jpg" width="58" height="58" className="rounded-full z-20 ml-[800px]"/>
                <div className="font-bold text-6xl translate-x-2/4 w-60 mx-[30%] mt-[0px] bg-transparent ">Users & Profiles</div>
                <Image src="/img8.jpg" width="84" height="84" className="rounded-full z-40 mt-[-70px] ml-[350px]"/>
                <Image src="/img4.jpg" width="60" height="60" className="rounded-full z-30 mt-[60px] ml-[540px]"/>
                <Image src="/img9.jpg" width="96" height="96" className="rounded-full z-20 ml-[800px] mt-[-150px]"/>
            </div>
        </main>
    )
}
