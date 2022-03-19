import Button from '@/components/Button'
import type {NextPage} from 'next'
import IntroSection from "@/components/PagesUI/MainPage/IntroSection";
import DevicesSection from "@/components/PagesUI/MainPage/DevicesSection";
import AboutUsSection from "@/components/PagesUI/MainPage/AboutUs";

const Main: NextPage = () => {
    return (
        <>
            <IntroSection/>
            <DevicesSection/>
            <AboutUsSection/>
        </>
    )
}

export default Main
