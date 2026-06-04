import CardHistoryDashboard from "../Card/CardHistoryDashboard";

function TransactionHistory() {
  return (
    <section className="text-medium mt-10 h-216.75 w-full shadow max-md:mt-4 max-md:h-auto max-md:pb-24 max-md:shadow-none md:w-85.25">
      <div className="mx-4 flex items-center justify-between">
        <p className="text-medium mt-5 font-semibold">Transaction History</p>
        <p className="text-tiny text-primary mt-5 font-medium">See All</p>
      </div>
      <div className="mx-4 mt-5 grid gap-8">
        <CardHistoryDashboard
          icon="/image/1(9).svg"
          title="Robert Fox"
          text="Transfer"
          detail="+Rp50.000"
        />
        <CardHistoryDashboard
          icon="/image/1(8).svg"
          title="Floyd Miles"
          text="Send"
          detail="-Rp50.000"
        />
        <CardHistoryDashboard
          icon="/image/1(7).svg"
          title="Ujang"
          text="Send"
          detail="-Rp50.000"
        />
        <CardHistoryDashboard
          icon="/image/1(6).svg"
          title="Raulemons"
          text="Transfer"
          detail="+Rp50.000"
        />
        <CardHistoryDashboard
          icon="/image/1(5).svg"
          title="Reiva"
          text="Transfer"
          detail="+Rp50.000"
        />
        <CardHistoryDashboard
          icon="/image/1(4).svg"
          title="Thobie"
          text="Send"
          detail="-Rp50.000"
        />
        <CardHistoryDashboard
          icon="/image/1(3).svg"
          title="Buzjany"
          text="Transfer"
          detail="+Rp50.000"
        />
        <CardHistoryDashboard
          icon="/image/1(2).svg"
          title="Adisurya"
          text="Send"
          detail="-Rp50.000"
        />
        <CardHistoryDashboard
          icon="/image/1(1).svg"
          title="Miguelle"
          text="Transfer"
          detail="+Rp50.000"
        />
      </div>
    </section>
  );
}

export default TransactionHistory;
