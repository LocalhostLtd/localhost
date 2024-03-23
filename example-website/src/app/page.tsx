import Image from "next/image";
import Header from '@/components/header';
import CardContainer from "@/components/CardContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div>
        <Header />
        <CardContainer />
      </div>
    <main/>
  );
}
