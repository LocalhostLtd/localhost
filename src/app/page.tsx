import Header from "@/components/header";
import CardContainer from "@/components/CardContainer";
import ContactForm from "@/components/Contact_form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div>
        <ContactForm />
      </div>
    </main>
  );
}
