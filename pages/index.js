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
          <div className="websitePadding">
          <div loading="lazy" data-mc-src="bf80ba50-ccbe-451c-8709-3deb5f264625#instagram"></div>
          </div>
      </HomeLayout>

  )
}
