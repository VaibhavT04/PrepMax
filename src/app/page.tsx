import Hero from '@/components/Hero'
import Features from '@/components/Features'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <div className="w-full">
      <Hero/>
      <Features/>
      <CallToAction/>
    </div>
  )
}
