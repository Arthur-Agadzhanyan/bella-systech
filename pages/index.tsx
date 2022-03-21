import Button from '@/components/Button'
import type {NextPage} from 'next'
import IntroSection from "@/components/PagesUI/MainPage/IntroSection";
import DevicesSection from "@/components/PagesUI/MainPage/DevicesSection";
import AboutUsSection from "@/components/PagesUI/MainPage/AboutUsSection";
import CosmeticalToolsSection from "@/components/PagesUI/MainPage/CosmeticalToolsSection";
import BenefitsSection from "@/components/PagesUI/MainPage/BenefitsSection";
import ManufacturersSection from "@/components/PagesUI/MainPage/ManufacturersSection";
import NewsSection from "@/components/PagesUI/MainPage/NewsSection";
import CourseEnrollment from "@/components/PagesUI/CourseEnrollmentSection";

const Main: NextPage = () => {
    return (
        <>
            <IntroSection/>
            <DevicesSection/>
            <AboutUsSection/>
            <CosmeticalToolsSection/>
            <BenefitsSection/>
            <ManufacturersSection/>
            <NewsSection/>
            <CourseEnrollment/>
        </>
    )
}

export default Main
