import {
  downloadButtons,
  footerLinks,
  footerSections,
} from "./Data/FooterData";

const Footer = () => {
  return (
    <footer className="bg-container">
      <section className="p-8 bg-container text-white max-w-7xl mx-auto">
        <section className="flex flex-col lg:flex-row sm:justify-between lg:justify-evenly gap-8 border-b border-borderGray pb-8">
          <section className="flex flex-col gap-4 lg:w-1/4">
            <h2 className="text-lg font-bold">Crypto Planet</h2>
            <p className="text-sm text-textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
              aenean nisl condimentum. Lorem sed nisl condimentum.
            </p>
          </section>
          <section className="flex flex-col lg:flex-row lg:gap-12 gap-8">
            {footerSections.map((section) => (
              <section key={section.title} className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold">{section.title}</h3>
                <ul className="space-y-2 text-textSecondary">
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
        <section className="flex flex-wrap justify-center gap-4 py-8 border-b border-borderGray">
          {downloadButtons.map((button, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-4 py-2 bg-white text-black rounded-lg"
            >
              <div className="flex flex-col">
                <span className="text-sm font-semibold">{button.title}</span>
                <span className="text-xs">{button.subtitle}</span>
              </div>
            </div>
          ))}
        </section>
        <section className="flex flex-col lg:flex-row justify-between items-center gap-4 pt-8">
          <span className="text-xs text-textSecondary">
            2024 Crypto Planet. All rights reserved.
          </span>
          <div className="flex gap-6 text-xs">
            {footerLinks.map((link, index) => (
              <span
                key={index}
                className="hover:text-white cursor-pointer transition-colors"
              >
                {link}
              </span>
            ))}
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
