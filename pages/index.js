import PostSection from '../includes/buildingBlocks/singlePost'
import HomeMainSection from '../includes/homeMainSection'
import HomeLayout from '../includes/layouts/homeLayout'
import SplitSection from '../includes/splitSection'
import SubHeaderSection from '../includes/subHeaderSection'


export default function Home() {
  return (
      <HomeLayout title="ElegantStone doo - Berane - granit, mermer, qvarc...">
          <HomeMainSection />
          <SubHeaderSection />
          <PostSection />
          <SplitSection />
      </HomeLayout>

  )
}
