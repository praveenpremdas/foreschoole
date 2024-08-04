import NavBar from "./components/NavBar/NavBar"
import SquareListingPanel from "./components/custom/SquareListingPanel"
import ImageCarousel from "./components/carousel/ImageCarousel"
import CardCarousel from "./components/carousel/CardCarousel "
import Carousel3d from "./components/carousel/Carousel3d"
import Testimonials from "./components/testimonials/Testimonials"
import BookATrail from "./components/custom/BookATrail"
import StickyBar from "./components/navbar/StickyBar"
import ClientFaq from "./components/faq/ClientFaq"
import Footer from "./components/footer/Footer"
import StudentBenefits from "./components/studentbenifits/StudentBenefits"
import Animation1 from "./components/landinganimations/animation1"
import OurClassrooms from "./components/custom/ourclassroom"
import Pricing from "./components/custom/pricing"
import ForeSchoolClasses from "./components/custom/ForeSchoolClasses"

export default function Home() {
  return (
    <main className='bg-gray-200'>
      <NavBar/>
      <Animation1/>
      <OurClassrooms/>
      <Testimonials/> 
      <Pricing/>
      <ForeSchoolClasses/>
      {/* <SquareListingPanel/> */}
      <StudentBenefits/>
      {/* 
      <ImageCarousel/>
      <BookATrail/>
       <CardCarousel/>  */}
      <Carousel3d/>
      <ClientFaq/>
      <Footer/>
      <StickyBar/>
    </main>
  );
}
