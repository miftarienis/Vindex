import HeaderSection from '@/components/sections/HeaderSection'
import MerchandiseSection from '@/components/sections/MerchandiseSection'
import PricingSection from '@/components/sections/PricingSection'
import TeamSection from '@/components/sections/TeamSection'
import WorkoutScetion from '@/components/sections/WorkoutSection'
import Slider from '@/components/Slider'
import Layout from '@/layout/Layout'

export default function Home() {
  return (
    <Layout title="Home">
      {/* Header Section Example */}
      <HeaderSection />
      {/* Workout Section  */}
      <WorkoutScetion />
      {/* Team Section */}
      <TeamSection />
      {/* Images Gallery */}
      <Slider />
      {/* Pricing Section  */}
      <PricingSection />
      {/* Merchandise Section */}
      <MerchandiseSection />
    </Layout>
  )
}
