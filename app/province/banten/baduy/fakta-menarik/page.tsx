import AnimatedContent from '@/components/AnimatedContent'
import AudioManager from '@/components/AudioManager'
import Character from '@/components/Character'


const FaktaMenarik = () => {
  return (
    <div className='items-center flex flex-col md:flex-row gap-2 justify-evenly bg-[#76250E] absolute w-full h-screen overflow-hidden top-0 left-0'>
      <div className='flex items-center'>
        <Character/>
      </div>
      <div className='flex flex-col gap-4 text-white font-bold w-[450px]'>
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={true}
          duration={1.2}
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={26.2}
        >
     <AudioManager src="/audio/Fakta_Menarik.mp3"/>
          <h2>Gaya hidup sangat ramah lingkungan, pantang mandi dengan sabun dan shampo agar air sungai tetap jernih, dan menolak sampah plastik. </h2>
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
          delay={26.4}
        >
          <h2>Membangun rumah tanpa paku, melainkan menggunakan tali dari kulit atau akar pohon secara gotong royong. </h2>
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
          delay={26.8}
        >
          <h2>Bagi Baduy Dalam, menerima teknologi modern seperti smartphone dianggap pengkhianatan terhadap amanah leluhur, yangi membuktikan bahwa mereka memilih kesederhanaan dan harmoni dengan alam sebagai bentuk penghormatan tertinggi kepada warisan budaya mereka.</h2> 
        </AnimatedContent>
      </div>
    </div>
  )
}

export default FaktaMenarik