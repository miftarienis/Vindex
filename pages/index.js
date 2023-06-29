import HeaderSection from '@/components/sections/HeaderSection'
import MerchandiseSection from '@/components/sections/MerchandiseSection'
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
      {/* Merchandise Section */}
      <MerchandiseSection />
    </Layout>
  )
}
