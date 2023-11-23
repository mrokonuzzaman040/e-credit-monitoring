import Banner from "../Banner/Banner";
import SecondBanner from "../Banner/SecondBanner";
import ThirdBanner from "../Banner/ThirdBanner";
import Card from "../Card/Card";
import InfoSection from "../InfoSection/InfoSection";
import Review from "../Review/Review";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SecondBanner></SecondBanner>
            <ThirdBanner></ThirdBanner>
            <Card></Card>
            <InfoSection></InfoSection>
            {/* <Review></Review> */}
        </div>
    );
};

export default Home;