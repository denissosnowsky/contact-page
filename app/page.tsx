import Image from "next/image";

import laptopImage from "@/assets/Rectangle.png";
import mobileImage from "@/assets/Rectangle2.png";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <Container className="bg-introBG text-white">
      <main className="pb-14 w-full h-screen pt-60">
        <div className="flex w-full h-full">
          <div className="pt-16 flex flex-col h-full">
            <h1 className="header mb-[72px]">Contact Page UIUX</h1>
            <div className="text-xl font-medium mb-[53px]">Modren UIUX</div>
            <div className="text-xl font-medium mb-[53px]">Free</div>
            <div className="text-xl font-medium mb-[53px]">
              {"Drop Some Love <3"}
            </div>
            <div className="text-3xl font-extrabold flex-1 flex flex-col justify-end">
              Ali Hassan
            </div>
          </div>
          <div>
            <div className="relative">
              <Image alt="laptop" src={laptopImage} width={1058} height={640} />
              <Image
                alt="mobile"
                src={mobileImage}
                width={240}
                height={445}
                className="absolute right-[-155px] top-1/2 translate-y-[-50%]"
              />
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
}
