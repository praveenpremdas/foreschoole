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

export default function Home() {
  return (
    <main>
      <NavBar/>
      <Animation1/>
      <SquareListingPanel/>
      <StudentBenefits/>
      {/* 
      <ImageCarousel/>
      <BookATrail/>
      <ClientFaq/>
      <Testimonials/> 
       <CardCarousel/>  */}
      {/* <Carousel3d/> */}
      <Footer/>
      <StickyBar/>
    </main>
  );
}
