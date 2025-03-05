import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ChatBot from './ChatBot'
const Home = () => {
  return (
    <div className='w-screen h-screen container text-white'>
       
      <div className='flex flex-row h-[10vh] justify-between items-center'>
        <div className='flex flex-row justify-center items-end'>
            <div className='text-5xl mr-30 font-bold'>LIPTWO</div>
            <div>
                <ul className='gap-20 font-normal text-xl flex flex-row justify-center items-end'>
                    <li><a href="#">Cats</a></li>
                    <li><a href="#">Shelter</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
      </div>
      <div className='grid grid-cols-3 w-full h-[700px]'    >
        <div className=' flex gap-20 relative justify-center items-center content-center col-span-2'>
            <div className='text-9xl relative  tracking-wide  scale-[1.25] leading-tight font-bold' ><div className='text-9xl scale-[2] font- absolute opacity-[0.3]'>02</div>Maine <br/>Coon</div>
            <div className='flex flex-col gap-5 max-w-[200px]'>
                <span>
                Welt Punge
                Male: 12cm
                Femalee: modiunc 8-12 bxL.</span>

                <span>
                Ere Color
                Ceceec Geen, Gold Odd-eyed
                </span>
                <span>
                Expectations:
                Longwsity Range: 913ys
                Social'Attention Heeds: MoGersne, Hch
                Tendency to Shed: Hich
                </span>
                <span>
                Coat
                Langee Long
                Characterijtics: Straight
                Colors: Whbe, Back, fr.e, Pd, Coam,
                </span>
                <span>
                Trcoioc/Calco, Tabby, Smoke, Shadod
                Less Aergeele: No
                Overad Gesoning Needs: Hich
                </span>
                <span>
                Club Recognition:
                Cat Asssciation Recegrison:
                CA ACFA,IVA. TICA
                Prevalwscer Comynon
                </span>
            </div>
            <div className='absolute col-span-1 w-[1000px] bottom-30 left-120  h-[700px] '>
                    <div className='flex absolute right-0 top-20 flex-col items-center justify-center gap-5'>
                    <SearchIcon sx={{fontSize:40, margin:1}}></SearchIcon>
                    <FacebookIcon></FacebookIcon>
                    <InstagramIcon></InstagramIcon>
                    <TwitterIcon></TwitterIcon>
                    </div>
                    <div className='w-[730px] shadow-2xl blur-md rounded-full z-0 h-4 bg-black absolute bottom-[-190px] left-20'></div>
                    <img className='bottom-[20px] z-50 w-[1000px]' src="./Procat.png" alt="" />

                    <div className='flex flex-row absolute right-0 bottom-[-200px] items-center gap-2 justify-center text-center content-center'>
                        <div className='border rounded-full h-[1px] w-[20px]'/> 02 <div className='border rounded-full h-[1px] w-[100px]'/> 12
                    </div>
            </div>
        </div>
      </div>
      <div className='flex home flex-row justify-between font-bold relative bottom-90  text-3xl'>
      <ArrowBackIosIcon sx={{fontSize:50}}></ArrowBackIosIcon>
      <ArrowForwardIosIcon sx={{fontSize:50}}></ArrowForwardIosIcon>
      </div>
      <ChatBot></ChatBot>
    </div>
  )
}   

export default Home
