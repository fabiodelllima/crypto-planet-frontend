import iconFacebook from "../../assets/networks/facebook.svg";
import iconInstagram from "../../assets/networks/instagram.svg";
import iconYoutube from "../../assets/networks/youtube.svg";
import iconTwitter from "../../assets/networks/twitter.svg";
import iconLinkedin from "../../assets/networks/linkedin.svg";
import badgeMicrosoft from "../../assets/badges/microsoft-badge.svg";
import badgeMacOs from "../../assets/badges/apple-macos-badge.svg";
import badgeAppStore from "../../assets/badges/apple-app-store-badge.svg";
import badgeGooglePlay from "../../assets/badges/google-play-badge.svg";
import Button from "../common/Button";

const Footer = () => {
  const footerSections = [
    {
      title: "Exchange",
      links: [
        "Exchange Home",
        "Margin Trading",
        "Derivatives Trading",
        "Supercharger",
      ],
    },
    {
      title: "Support",
      links: ["Request form", "Contact Support", "FAQ", "Security"],
    },
    {
      title: "Resources",
      links: [
        "Downloads",
        "Desktop Application",
        "Buy Crypto",
        "Referral",
        "Listing Trading",
      ],
    },
    {
      title: "Learn",
      links: [
        "What's Trending",
        "Product News",
        "Events",
        "University",
        "Research",
        "Market Update",
      ],
    },
    {
      title: "Company",
      links: [
        "About us",
        "Careers",
        "News",
        "Security",
        "Community",
        "Announcements",
      ],
    },
  ];

  return (
    <footer className="bg-container">
      <div className="px-8 pt-14 lg:pt-20 bg-container text-white max-w-7xl mx-auto">
        <div className="flex flex-col pb-6 lg:flex-row sm:justify-between lg:justify-evenly gap-14 lg:gap-8">
          <section className="flex flex-col gap-4 lg:w-1/4">
            <h2 className="text-lg font-bold">Crypto Planet</h2>
            <p className="text-sm text-greyPrimary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
              aenean nisl condimentum. Lorem sed nisl condimentum.
            </p>

            <div className="flex gap-5 pt-2 items-center">
              <Button styleType="footerIcon" size="footerIcon">
                <img src={iconFacebook} className="w-5" />
              </Button>
              <Button styleType="footerIcon" size="footerIcon">
                <img src={iconInstagram} className="w-5" />
              </Button>
              <Button styleType="footerIcon" size="footerIcon">
                <img src={iconYoutube} className="w-5" />
              </Button>
              <Button styleType="footerIcon" size="footerIcon">
                <img src={iconTwitter} className="w-5" />
              </Button>
              <Button styleType="footerIcon" size="footerIcon">
                <img src={iconLinkedin} className="w-7" />
              </Button>
            </div>
          </section>

          <section className="flex flex-col lg:flex-row lg:gap-12 gap-8 pb-8">
            {footerSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-4">
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
              </div>
            ))}
          </section>
        </div>

        <div className="flex flex-col-reverse gap-8 py-12 lg:py-14 items-center lg:justify-between lg:flex-row border-t border-borderGray">
          <section className="flex flex-col justify-between gap-2 lg:gap-2">
            <span className="text-xs text-greyPrimary">
              © 2024 Crypto Planet. All rights reserved.
            </span>
            <div className="flex gap-6 text-xs justify-center">
              <span className="text-white hover:opacity-80 cursor-pointer transition-colors">
                Privacy
              </span>
              <span className="text-white hover:opacity-80 cursor-pointer transition-colors">
                Terms
              </span>
              <span className="text-white hover:opacity-80 cursor-pointer transition-colors">
                Sitemap
              </span>
            </div>
          </section>

          <section className="flex flex-wrap justify-center lg:justify-end gap-3">
            <Button styleType="badge" size="badge">
              <img
                src={badgeMicrosoft}
                className="w-[140px]"
                alt="Microsoft Store"
              />
            </Button>
            <Button styleType="badge" size="badge">
              <img
                src={badgeGooglePlay}
                className="w-[140px]"
                alt="Google Play"
              />
            </Button>
            <Button styleType="badge" size="badge">
              <img src={badgeAppStore} className="w-[140px]" alt="App Store" />
            </Button>
            <Button styleType="badge" size="badge">
              <img src={badgeMacOs} className="w-[140px]" alt="MacOS" />
            </Button>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
