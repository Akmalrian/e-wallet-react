import { useAppSelector } from "../../store/hooks";
import CardIncome from "../Card/CardIncome";
import ChartDashboard from "../section/ChartDashboard";

function IncomeChartDashboard() {
  const { currentUser } = useAppSelector((state) => state.auth);
  return (
    <section className="text-medium">
      <div className="grid grid-cols-2 justify-center max-md:grid max-md:gap-0 max-md:px-4 md:flex md:justify-between">
        <div className="col-span-2 flex flex-col items-center gap-4 max-md:w-full max-md:justify-self-start md:flex-row md:items-stretch md:justify-between">
          <CardIncome
            icon="/image/balance.svg"
            title="Balance"
            text={`Rp${(currentUser?.balance || 0).toLocaleString("id-ID")}`}
            detail="+2%"
            arrow="/image/ArrowRise.svg"
            day="3 Days Ago"
          />
        </div>
        <div>
          <CardIncome
            icon="/image/income-withdraw.svg"
            title="Income"
            text={`Rp${(currentUser?.income || 0).toLocaleString("id-ID")}`}
            detail="+11.01%"
            arrow="/image/ArrowRise.svg"
          />
        </div>
        <div>
          <CardIncome
            icon="/image/expense-withdraw.svg"
            title="Expense"
            text={`Rp${(currentUser?.expense || 0).toLocaleString("id-ID")}`}
            detail="-5.06%"
            arrow="/image/arrowDown.svg"
          />
        </div>
      </div>
      <div className="mt-5 flex w-full flex-col items-center justify-between gap-4 rounded-md px-4 py-4 shadow max-md:mx-4 max-md:w-[calc(100%-2rem)] max-md:rounded-xl md:h-20.25 md:flex-row md:gap-0">
        <p className="text-medium font-semibold">Fast Service</p>
        <div className="flex w-full justify-center gap-4 md:w-auto">
          <button className="bg-primary flex h-11 w-27.25 items-center justify-center gap-2 rounded-[5px] border text-white transition hover:bg-blue-700">
            <img
              className="h-6 w-6"
              src="/image/Vector2.svg"
              alt="icon top up"
            />
            Top Up
          </button>
          <button className="bg-primary mr-4 flex h-11 w-27.25 items-center justify-center gap-2 rounded-[5px] border text-white transition hover:bg-blue-700">
            <img
              className="h-6 w-6"
              src="/image/Send2.svg"
              alt="icon transfer"
            />{" "}
            Transfer
          </button>
        </div>
      </div>
      <div className="mt-5 w-full overflow-hidden shadow max-md:mx-4 max-md:w-[calc(100%-2rem)] max-md:rounded-xl md:h-149.5">
        <ChartDashboard />
      </div>
      <div></div>
    </section>
  );
}

export default IncomeChartDashboard;
