const Footer = () => {
  return (
    <footer className="flex flex-col p-8 bg-black text-white">
      <section className="flex flex-wrap justify-center gap-8">
        <section className="flex flex-col gap-4">
          <h2>Crypto Planet</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>

          <section className="flex gap-4 justify-center">
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
          </section>
        </section>

        <section className="flex flex-col gap-4">
          <h3>Exchange</h3>
          <ul>
            <li>Link para clicar</li>
            <li>Link para clicar</li>
            <li>Link para clicar</li>
            <li>Link para clicar</li>
            <li>Link para clicar</li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3>Support</h3>
          <ul>
            <li>Link para clicar</li>
            <li>Link para clicar</li>
            <li>Link para clicar</li>
            <li>Link para clicar</li>
            <li>Link para clicar</li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3>Resources</h3>
          <ul>
            <li>Link para clicar</li>
            <li>Link para clicar</li>
            <li>Link para clicar</li>
            <li>Link para clicar</li>
            <li>Link para clicar</li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3>Learn</h3>
          <ul>
            <li>Link para clicar</li>
            <li>Link para clicar</li>
            <li>Link para clicar</li>
            <li>Link para clicar</li>
            <li>Link para clicar</li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3>Company</h3>
          <ul>
            <li>Link para clicar</li>
            <li>Link para clicar</li>
            <li>Link para clicar</li>
            <li>Link para clicar</li>
            <li>Link para clicar</li>
          </ul>
        </section>
      </section>

      <section className="flex flex-col gap-12 py-4">
        <section className="flex justify-center pt-12 pb-6  border-b-[1px] border-white">
          <button>
            <div className="flex flex-col">
              <span>^</span>
              <span>Subir para o topo da página</span>
            </div>
          </button>
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex gap-4 pl-4 pr-6 py-2 w-full rounded-lg bg-white text-black">
            <div className="flex items-center">
              <span>X</span>
            </div>
            <div className="flex flex-col">
              <span>Download PC-Client</span>
              <span>Windows</span>
            </div>
          </div>

          <div className="flex gap-4 pl-4 pr-6 py-2 w-full rounded-lg bg-white text-black">
            <div className="flex items-center">
              <span>X</span>
            </div>
            <div className="flex flex-col">
              <span>Download for the</span>
              <span>MacOS</span>
            </div>
          </div>

          <div className="flex gap-4 pl-4 pr-6 py-2 w-full rounded-lg bg-white text-black">
            <div className="flex items-center">
              <span>X</span>
            </div>
            <div className="flex flex-col">
              <span>Download on the</span>
              <span>App Store</span>
            </div>
          </div>

          <div className="flex gap-4 pl-4 pr-6 py-2 w-full rounded-lg bg-white text-black">
            <div className="flex items-center">
              <span>X</span>
            </div>
            <div className="flex flex-col">
              <span>Get in on</span>
              <span>Google Play</span>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4 py-4">
          <span className="flex justify-center">
            2022 dynamic. All rights reserved.
          </span>

          <div className="flex justify-center gap-6">
            <span className="flex justify-center">Privacy</span>
            <span className="flex justify-center">Terms</span>
            <span className="flex justify-center">Sitemap</span>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
