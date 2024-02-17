import './style.css'
import FastMarquee from 'react-fast-marquee'

export default function Home() {
  return (
    <main>
      <div className="gradient-background">
        <div className="flex justify-center items-center h-[45rem]">
          <FastMarquee
            style={{ fontSize: 220 }}
            speed={200}
            delay={1}
            className={'font-semibold'}
          >
            ZEIGEN WIE’s GEHT
          </FastMarquee>
          <div className="w-[205px] h-[205px] p-10 top-[23rem] right-[18rem] rounded-full flex flex-col justify-center items-center gap-5 absolute bg-black text-white z-50">
            <div className="uppercase text-[22px] text-center">
              Creative Days 2024
            </div>
            <div className="text-sm">MEHR ERFAHREN</div>
          </div>
        </div>
      </div>
    </main>
  )
}
