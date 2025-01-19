import Image from "next/image";
export default function HeroSection() {
    return (
        <div>
            {/* Reference the image from the public folder */}
            <Image src="/assets/RHESC1.jpg" alt="My Image" className="bg-cover w-screen" height={200} width={1000} />
        </div>
    );
}
