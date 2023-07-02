import BookingSection from '@/components/sections/BookingSection'
import HeaderSection from '@/components/sections/HeaderSection'
import MerchandiseSection from '@/components/sections/MerchandiseSection'
import PricingSection from '@/components/sections/PricingSection'
import ServiceSection from '@/components/sections/ServiceSection'
import TeamSection from '@/components/sections/TeamSection'
import WorkoutScetion from '@/components/sections/WorkoutSection'
import Slider from '@/components/Slider'
import Layout from '@/layout/Layout'

export default function Home() {
  return (
    <Layout title="Home">
      {/* Header Section Example */}
      <HeaderSection />
      {/* Service Section */}
      <ServiceSection />
      {/* Workout Section  */}
      <WorkoutScetion />
      {/* Team Section */}
      <TeamSection />
      {/* Images Gallery */}
      <Slider />
      {/* Pricing Section  */}
      <PricingSection />
      {/* Booking Section  */}
      <BookingSection />
      {/* Merchandise Section */}
      <MerchandiseSection />
    </Layout>
  )
}
