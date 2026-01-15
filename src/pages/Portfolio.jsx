import Contact from "../sections/Contact";
import Courses from "../sections/Courses";
import Cover from "../sections/Cover";
import Details from "../sections/Details";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Technology from "../sections/Technology";

function Portfolio() {
    return ( 
        <>
            <div className="Portfolio">
                <Header />
                <Cover />
                <Technology />
                <Details />
                <Courses />
                {/* <Contact /> */}
                <Footer />
            </div>
        </>
    )
}

export default Portfolio;