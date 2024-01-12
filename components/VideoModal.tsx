import { openSans } from '@/app/fonts';
import { HeartIcon } from '@/public/exportSvg';
import { MotionDiv } from '../utils/MotionDiv';

const VideoModal = () => {
    return (
        <div className={`flex items-center justify-evenly flex-col w-[320px] h-[280px] bg-black-1 rounded-[10px] shadow ${openSans.className}`}>

            <div className='relative h-[170px] w-[240px] bg-neutral-600 shadow rounded-[10px]'>
                <iframe className='w-full h-full object-cover rounded-md' width="560" height="315" src="https://www.youtube.com/embed/RD_ZYaZE2Qc?si=FhXbkkjugbYeLcE1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <MotionDiv className='absolute w-[30px] h-[30px] -top-[10px] -left-[10px] cursor-pointer'
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5, }}
                >
                    <HeartIcon />
                </MotionDiv>
            </div>
            <div className='w-[240px] gap-3'>
                <h2 className='text-white-1 font-extrabold mb-2'>Música xyz 3.12</h2>
                <p className='text-xs text-white-1  font-[400] '>Framework?</p>

            </div>

        </div>

    )
}

export default VideoModal