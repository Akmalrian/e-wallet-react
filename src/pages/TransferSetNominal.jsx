import NavigationDashboard from "../component/header/NavigationDashboard";
import SetNominal from "../component/section/SetNominal";

const TransferSetNominal = () => (
  <main>
    <section className="font-montserrat grid grid-cols-[1fr_4.5fr] gap-15 max-md:grid-cols-1 max-md:gap-0">
      <nav>
        <NavigationDashboard />
      </nav>
      <div>
        <SetNominal />
      </div>
    </section>
  </main>
);
export default TransferSetNominal;
