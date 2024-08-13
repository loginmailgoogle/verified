import '../ThankYou/thankyou.css';
import logoSvg from '../../img/G__logo.svg.png';

function ThankYou() {
    
  return (
    <section className="sectionTwo">
        <div className='bigv'>
            <div className='v'>
                <img src={logoSvg} alt="logo" className="logo" id="mainlogo" />
            </div>
            <h1>Thank You</h1>
            <p>Your profile is verified.</p>
        </div>
    </section>
  );
}

export default ThankYou;
