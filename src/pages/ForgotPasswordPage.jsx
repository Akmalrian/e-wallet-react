import ContentForgotPassword from "../component/ContentForgotPassword";

const ForgotPasswordPage = () => (
  <main className="md:bg-primary absolute -z-2 flex h-[130vh] w-full items-center justify-center">
    <img
      className="absolute -z-1 hidden h-234 w-234 md:flex"
      src="/image/Ellipse 1 (1).svg"
      alt="dim background"
    />
    <section className="absolute flex h-105 w-full md:h-111.5 md:w-137.5">
      <div className="flex-1 rounded-2xl bg-white">
        <ContentForgotPassword />
      </div>
    </section>
  </main>
);
export default ForgotPasswordPage;
