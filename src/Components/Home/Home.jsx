import Banner from "../Banner/Banner";
import SecondBanner from "../Banner/SecondBanner";
import ThirdBanner from "../Banner/ThirdBanner";
import Card from "../Card/Card";
import InfoSection from "../InfoSection/InfoSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SecondBanner></SecondBanner>
            <ThirdBanner></ThirdBanner>
            <InfoSection></InfoSection>
            <Card></Card>
        </div>
    );
};

export default Home;