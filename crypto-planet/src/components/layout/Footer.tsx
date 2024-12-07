import {
  downloadButtons,
  footerLinks,
  footerSections,
} from "../../pages/Portfolio/Data/PortfolioData";

const Footer = () => {
  return (
    <footer className="p-8 bg-container text-white">
      <section className="flex flex-col lg:flex-row lg:justify-between gap-8 border-b border-borderGray pb-8">
        <section className="flex flex-col gap-4 lg:w-1/4">
          <h2 className="text-lg font-bold">Crypto Planet</h2>
          <p className="text-sm text-textSecondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </p>
          <section className="flex gap-4">
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
          </section>
        </section>
        <section className="flex flex-col lg:flex-row lg:gap-12 gap-8">
          {footerSections.map((section) => (
            <section key={section.title} className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold">{section.title}</h3>
              <ul className="space-y-2 text-textSecondary">
                {section.links.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </section>
          ))}
        </section>
      </section>
      <section className="flex flex-wrap justify-center gap-4 py-8 border-b border-borderGray">
        {downloadButtons.map((button, index) => (
          <div
            key={index}
            className="flex items-center gap-4 px-4 py-2 bg-white text-black rounded-lg"
          >
            <span>{button.icon}</span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">{button.title}</span>
              <span className="text-xs">{button.subtitle}</span>
            </div>
          </div>
        ))}
      </section>
      <section className="flex flex-col lg:flex-row justify-between items-center gap-4 pt-8">
        <span className="text-xs text-textSecondary">
          2022 dynamic. All rights reserved.
        </span>
        <div className="flex gap-6 text-xs">
          {footerLinks.map((link, index) => (
            <span key={index} className="hover:text-white cursor-pointer">
              {link}
            </span>
          ))}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
