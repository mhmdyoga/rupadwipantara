import AnimatedContent from '@/components/AnimatedContent'
import AudioManager from '@/components/AudioManager'
import Character from '@/components/Character'

const NilaiLuhur = () => {
  return (
         <div className='items-center flex flex-col md:flex-row gap-2 overflow-y-auto justify-evenly bg-[#76250E] absolute w-full h-screen overflow-hidden top-0 left-0'>
      <div className='flex items-center'>
        <Character/>
      </div>
      <div className='flex flex-col gap-4 text-white font-bold w-60 md:w-[450px] text-center md:text-left pb-32'>
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={true}
          duration={1.2}
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={19.2}
        >
     <AudioManager src="/audio/Nilai_Luhur.mp3"/>
          <h2 className='text-xs md:text-lg'>Berupa kecintaan terhadap alam sebagai amanah Tuhan, kesederhanaan hidup, gotong royong, dan tanggung jawab menjaga keseimbangan ekosistem untuk semua makhluk hidup.</h2>
        </AnimatedContent>
   
          <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={true}
          duration={1.2}
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={19.4}
        >
          <h2 className='text-xs md:text-lg'>Diwujudkan melalui upacara adat Seba Baduy yang mencerminkan rasa syukur atas hasil panen, silaturahmi dengan pemerintah daerah, dan penyampaian amanat pemimpin adat sebagai simbol harmoni dan persatuan.</h2>
        </AnimatedContent>
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={1.2}
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={19.8}
        >
          <h2 className='text-xs md:text-lg'>Suku Baduy mengajarkan bahwa kesetiaan pada tradisi, spiritualitas, dan keselarasan dengan alam adalah kearifan tertinggi yang harus diwariskan untuk keberlangsungan hidup semua ciptaan Tuhan.</h2> 
        </AnimatedContent>
      </div>
    </div>
  )
}

export default NilaiLuhur