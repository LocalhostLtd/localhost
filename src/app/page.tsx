import Header from '@/components/header';
import Footer from '@/components/footer';
import CardContainer from "@/components/CardContainer";

export default function Home() {
  return (
    <main >
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-between">
        <CardContainer />
      </div>
      <Footer />
    </main>
  );
}
