import HeaderSection from '@/components/sections/HeaderSection'
import TeamSection from '@/components/sections/TeamSection'
import WorkoutScetion from '@/components/sections/WorkoutSection'
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
    </Layout>
  )
}
