function FooterLandingPage() {
  return (
    <footer className="bg-primary font-montserrat h-94.5 w-full text-white max-md:h-180">
      <div className="mb-15 flex max-w-full justify-between px-30 py-12 max-md:mb-0 max-md:flex-col max-md:gap-8 max-md:px-6 max-md:py-8">
        <div className="w-66 max-md:w-full">
          <div className="mb-4 flex items-center">
            <img
              className="h-12.5 w-12.5"
              src="/image/MoneyWallet.png"
              alt="Logo"
            />
            <h6 className="font-nunitoSans mx-4 text-[36px]">E-Wallet</h6>
          </div>
          <p>
            Clarity gives you the blocks and components you need to create a
            truly professional website.
          </p>
        </div>
        <div>
          <h6 className="mb-4 text-[18px] font-semibold">GET IN TOUCH</h6>
          <div className="mb-4 flex gap-4">
            <img src="/image/telephone.svg" alt="icon telephone" />
            <p>+62 5637 8882 9901</p>
          </div>
          <div className="flex gap-4">
            <img src="/image/mail.svg" alt="icon mail" />
            <p>contact@zwallet.com</p>
          </div>
        </div>
        <div>
          <h6 className="mb-4 text-[18px] font-semibold">SOCIAL MEDIA</h6>
          <img src="/image/Social.svg" alt="icon social media" />
        </div>
        <div>
          <h6 className="mb-4 text-[18px] font-semibold">NEWSLETTER</h6>
          <div className="relative flex items-center">
            <img
              src="/image/mail.png"
              className="absolute left-3"
              alt="mail icon"
            />
            <input
              className="text-secondary w-full rounded-md bg-white py-2 pr-3 pl-10"
              type="text"
              placeholder="Enter Your Email"
            />
          </div>
          <button className="text-primary mt-4 h-9 w-full rounded-md border bg-white px-6">
            Subscribe
          </button>
        </div>
      </div>
      <div className="grid justify-center text-center">
        <span className="mb-6 w-286.5 border-t max-md:w-full"></span>
        <p>© Copyright 2022, All Rights Reserved by ClarityUI</p>
      </div>
    </footer>
  );
}
export default FooterLandingPage;
