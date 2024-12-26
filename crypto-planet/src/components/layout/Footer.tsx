import {
  downloadButtons,
  footerLinks,
  footerSections,
} from "./Data/FooterData";

import iconFacebook from "../../assets/networks/facebook.svg";
import iconInstagram from "../../assets/networks/instagram.svg";
import iconYoutube from "../../assets/networks/youtube.svg";
import iconTwitter from "../../assets/networks/twitter.svg";
import iconLinkedin from "../../assets/networks/linkedin.svg";

const Footer = () => {
  return (
    <footer className="bg-container">
      <section className="px-8 pb-8 pt-14 lg:pt-20 bg-container text-white max-w-7xl mx-auto">
        <section className="flex flex-col pb-6 lg:flex-row sm:justify-between lg:justify-evenly gap-14 lg:gap-8">
          <section className="flex flex-col gap-4 lg:w-1/4">
            <h2 className="text-lg font-bold">Crypto Planet</h2>
            <p className="text-sm text-greyPrimary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
              aenean nisl condimentum. Lorem sed nisl condimentum.
            </p>
            <div className="flex gap-5 pt-2 items-center">
              <button className="p-2 bg-transparent hover:bg-greySecondary rounded-lg">
                <img src={iconFacebook} className="w-5" />
              </button>
              <button className="p-2 bg-transparent hover:bg-greySecondary rounded-lg">
                <img src={iconInstagram} className="w-5" />
              </button>
              <button className="p-2 bg-transparent hover:bg-greySecondary rounded-lg">
                <img src={iconYoutube} className="w-5" />
              </button>
              <button className="p-2 bg-transparent hover:bg-greySecondary rounded-lg">
                <img src={iconTwitter} className="w-5" />
              </button>
              <button className="p-1 bg-transparent hover:bg-greySecondary rounded-lg">
                <img src={iconLinkedin} className="w-7" />
              </button>
            </div>
          </section>
          <section className="flex flex-col lg:flex-row lg:gap-12 gap-8 pb-8">
            {footerSections.map((section) => (
              <section key={section.title} className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold">{section.title}</h3>
                <ul className="space-y-2 text-greyPrimary">
                  {section.links.map((link, index) => (
                    <li
                      key={index}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </section>
        </section>
        <section className="flex flex-col-reverse gap-8 pt-8 pb-10 lg:pb-8 items-center lg:justify-between lg:flex-row border-t border-borderGray">
          <section className="flex flex-col justify-between gap-2 lg:gap-2">
            <span className="text-xs text-greyPrimary">
              © 2024 Crypto Planet. All rights reserved.
            </span>
            <div className="flex gap-6 text-xs justify-center">
              {footerLinks.map((link, index) => (
                <span
                  key={index}
                  className="text-white hover:opacity-80 cursor-pointer transition-colors"
                >
                  {link}
                </span>
              ))}
            </div>
          </section>
          <section className="flex flex-wrap justify-center lg:justify-end gap-3">
            {downloadButtons.map((button, index) => (
              <div
                key={index}
                className="flex justify-center bg-black rounded-lg border border-greySecondary hover:border-b-greyPrimary"
              >
                <button>
                  <img src={button.icon} className="w-[140px]" />
                </button>
              </div>
            ))}
          </section>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
