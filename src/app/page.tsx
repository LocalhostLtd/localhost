import Header from '@/components/header';
import Footer from '@/components/footer';
import CardContainer from "@/components/CardContainer";
import HomeBackground from '../../public/home_background.PNG';

export default function Home() {
  return (
    <div className="bg-cover bg-center bg-customGreen bg-opacity-10" style={{backgroundImage: `url(${HomeBackground.src})`}}>  
      <div className="fixed top-0 left-0 w-full h-full  bg-customGreen opacity-70"></div>
      <Header />
      <h1 className="font-sans text-white">Need a website? Leave it to us</h1>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <CardContainer />
      </div>
      <Footer />
    </div>
  );
}
