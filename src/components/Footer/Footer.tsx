import { footerLinks } from "../../constants";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className='footer-section'>
      <div className='footer-screen'>
        <div>
          <p className='part-one'>
            More ways to shop:{" "}
            <span className='span-one'> Find an Apple Store </span> or{" "}
            <span className='span-one'> other retailer</span> near you.
          </p>
          <p className='call'>Or call 000800-040-1966 </p>
        </div>
        <div className='divider' />
        <div className='link-container'>
          <p className='part-one'>
            Copyright &copy; Apple Inc. All rights reserved.
          </p>
          <div className="links">
            {footerLinks.map((link, i)=>(
                <p key={link} className="part-one">
                    {link} {' '}
                    {i !== footerLinks.length - 1 && (
                        <span className="link-span"> | </span>
                    )}
                </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
