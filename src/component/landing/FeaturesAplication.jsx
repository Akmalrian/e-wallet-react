import BackgroundVector from "../section/BackgroundVector";
import CardFeatures from "../Card/CardFeatures";

const FeaturesAplication = () => (
  <section className="font-montserrat mb-80">
    <BackgroundVector />
    <div class="flex justify-center gap-4 p-10 max-md:flex-col max-md:p-0">
      <div class="relative right-20 max-md:right-0 max-md:-mt-50 max-md:flex max-md:justify-center">
        <img src="/image/Mobile-Dashboard.png" alt="mobile Dashboard" />
      </div>
      <div class="relative top-60 left-30 h-115 w-145 max-md:top-0 max-md:left-0 max-md:h-auto max-md:w-full max-md:p-6">
        <div class="text-white">
          <h6 className="mb-6 text-4xl">All The Great Zwallet Features.</h6>
          <p className="text-medium mb-6">
            We have some great features from the application and it’s totally
            free to use by all users around the world.
          </p>
        </div>
        <div class="grid gap-4">
          <CardFeatures
            icon="/image/fee.png"
            title="Small Fee"
            text="We only charge 5% of every success transaction done in Zwallet
                app."
          />
          <CardFeatures
            icon="/image/secured.png"
            title="Data Secured"
            text="All your data is secured properly in our system and it’s
                encrypted."
          />
          <CardFeatures
            icon="/image/friendly.png"
            title="User Friendly"
            text="Zwallet come up with modern and sleek design and not
                complicated.."
          />
          <button className="text-primary mt-4 h-12.5 w-41.25 rounded-md border bg-white px-6">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </section>
);
export default FeaturesAplication;
