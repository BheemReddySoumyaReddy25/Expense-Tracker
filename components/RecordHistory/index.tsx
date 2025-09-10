import getRecords from "@/app/actions/getRecords";
import RecordHistoryError from "./RecordHistoryError";
import RecordHistoryEmpty from "./RecordHistoryEmpty";
import RecordHistoryHeader from "./RecordHistoryHeader";
import { Record } from "@/types/Records";
import RecordItem from "./RecordItem";

const RecordHistory = async () => {
  const { records, error } = await getRecords();

  if (error) return <RecordHistoryError error={error} />;
  if (!records || records.length === 0) return <RecordHistoryEmpty />;

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl">
      <RecordHistoryHeader />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
        {records.map((record: Record) => (
          <RecordItem key={record.id} record={record} />
        ))}
      </div>
    </div>
  );
};

export default RecordHistory;
