import Busca from '@/components/Busca'
import DropDown from '@/components/DropDown'
import Localization from '@/components/Localization'
import Modal from '@/components/Modal'
import VideoModal from '@/components/VideoModal'

export default function Home() {

  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-[#333333] gap-[5rem] '>
     <hr />
      <Modal />
      <Localization />
      <Busca/>
      <VideoModal />
      <DropDown />
      <hr />
    </main>
  )
}
