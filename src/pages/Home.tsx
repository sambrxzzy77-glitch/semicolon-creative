import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CorpSpectrum from '../components/CorpSpectrum'
import VideoSwitcher from '../components/VideoSwitcher'
import QuoteMarquee from '../components/QuoteMarquee'
import BTLExecution from '../components/BTLExecution'
import WhySemicolon from '../components/WhySemicolon'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CorpSpectrum />
      <VideoSwitcher />
      <QuoteMarquee />
      <BTLExecution />
      <WhySemicolon />
    </>
  )
}
