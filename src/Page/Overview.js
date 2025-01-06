import '../App.css';
import CarouselObj from './CarouselObj';
import './Page.css';

function Overview() {
    return (
        <div>
            <h1 className='Heading'>Overview</h1>
            <div className='Underline'></div>
            <CarouselObj/>
            <p className='TextDescription'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. 
            </p>
            
        </div>
    );
}

export default Overview;