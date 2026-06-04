import CardHistoryTransaction from "../Card/CardHistoryTransaction";
import SearchNumberOrName from "../input/SearchNumberOrName";
import { useSearchParams } from "react-router";
import { useAppSelector } from "../../store/hooks";

const ITEMS_PER_PAGE = 7;

function HistoryTransaction() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { currentUser } = useAppSelector((state) => state.auth);

  const searchQuery = searchParams.get("search") || "";
  const currentPage = parseInt(searchParams.get("page")) || 1;

  const transactionHistory = currentUser?.transactionHistory || [];

  const filteredTransactions = transactionHistory.filter((item) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(searchLower) ||
      item.detail.toLowerCase().includes(searchLower)
    );
  });

  const totalPages = Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = filteredTransactions.slice(startIndex, endIndex);

  const updateParams = (newParams) => {
    const nextParams = Object.fromEntries([...searchParams]);
    setSearchParams({ ...nextParams, ...newParams });
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    if (value) {
      setSearchParams({ search: value, page: "1" });
    } else {
      setSearchParams({ page: "1" });
    }
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      updateParams({ page: pageNumber.toString() });
    }
  };

  return (
    <section className="text-medium mt-6">
      <div className="mx-4 mb-8 flex items-center gap-4 font-semibold">
        <img src="/image/historyBlue.svg" alt="icon history" />
        <p>History Transaction</p>
      </div>

      <div className="mx-4 h-auto w-280 justify-between pb-10 shadow max-md:mx-4 max-md:w-auto max-md:shadow-none">
        <div className="mb-10 flex items-center justify-between p-6 max-md:mb-4 max-md:flex-col max-md:items-start max-md:gap-4 max-md:p-4">
          <p className="font-semibold">Find Transaction</p>
          <div className="w-1/3 max-md:w-full">
            <SearchNumberOrName
              type="text"
              placeholder="Enter Number Or Full Name"
              icon="/image/Search.svg"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <div className="grid gap-4 px-6 max-md:px-2">
          {transactionHistory.length === 0 ? (
            <p className="py-10 text-center text-gray-400">
              Belum ada riwayat transaksi.
            </p>
          ) : currentData.length > 0 ? (
            currentData.map((item) => (
              <CardHistoryTransaction
                key={item.id}
                image={item.image}
                title={item.title}
                detail={item.detail}
                text={item.text}
                icon="/image/Trash.svg"
                result={item.result}
              />
            ))
          ) : (
            <p className="py-10 text-center text-gray-400">
              Data "{searchQuery}" tidak ditemukan...
            </p>
          )}
        </div>

        {filteredTransactions.length > 0 && (
          <div className="text-tiny mx-6 mt-10 flex justify-between max-md:mx-2 max-md:flex-col max-md:items-center max-md:gap-4 max-md:pb-24">
            <p>
              Show {currentData.length} History of {filteredTransactions.length}{" "}
              History
            </p>
            <div className="flex items-center gap-4 max-md:flex-wrap max-md:justify-center max-md:gap-3">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`cursor-pointer ${currentPage === 1 ? "text-gray-300" : "hover:font-bold"}`}
              >
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (num) => (
                  <button
                    key={num}
                    onClick={() => handlePageChange(num)}
                    className={`cursor-pointer px-2 ${
                      currentPage === num
                        ? "font-bold text-blue-600 underline"
                        : ""
                    }`}
                  >
                    {num}
                  </button>
                ),
              )}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`cursor-pointer ${
                  currentPage === totalPages
                    ? "text-gray-300"
                    : "font-bold text-[#0B0909]"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default HistoryTransaction;
