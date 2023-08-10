import { Poppins } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";

const poppins = Poppins({ subsets: ["latin"], weight: ["700", "500"] });

export default function Contact() {
  return (
    <>
      <Container>
        <div className="w-full flex flex-col justify-center">
          <Header />
          <h1 className={`mainHeader ${poppins.className} mt-20 mob:mt-11`}>
            Contact Us
          </h1>
          <h2 className={`secondHeader ${poppins.className} mt-[10px] mob:w-[184px] mob:m-auto mob:mt-[10px]`}>
            Any question or remarks? Just write us a message!
          </h2>
          <div className="mt-[50px] mb-[50px] pr-10 pl-10 flex justify-center mob:mt-5 mob:pr-0 mob:pl-0">
            <ContactForm />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
