import Button from '@/components/Button'
import type {NextPage} from 'next'
import IntroSection from "@/components/PagesUI/MainPage/IntroSection";
import DevicesSection from "@/components/PagesUI/MainPage/DevicesSection";
import AboutUsSection from "@/components/PagesUI/MainPage/AboutUsSection";
import CosmeticalToolsSection from "@/components/PagesUI/MainPage/CosmeticalToolsSection";
import BenefitsSection from "@/components/PagesUI/MainPage/BenefitsSection";
import ManufacturersSection from "@/components/PagesUI/MainPage/ManufacturersSection";

const Main: NextPage = () => {
    return (
        <>
            <IntroSection/>
            <DevicesSection/>
            <AboutUsSection/>
            <CosmeticalToolsSection/>
            <BenefitsSection/>
            <ManufacturersSection/>
        </>
    )
}

export default Main
