import getRecords from "@/app/actions/getRecords";
import ChartCard from "./charts/ChartCard";
import ChartError from "./charts/ChartError";
import ChartEmpty from "./charts/ChartEmpty";
import BarChart from "./charts/BarChart";


const RecordChart = async () => {
  const { records, error } = await getRecords();

  if (error) {
    return (
      <ChartCard
        title="Expense Chart"
        description="Visual representation of your spending"
      >
        <ChartError message={error} />
      </ChartCard>
    );
  }

  if (!records || records.length === 0) {
    return (
      <ChartCard
        title="Expense Chart"
        description="Visual representation of your spending"
      >
        <ChartEmpty />
      </ChartCard>
    );
  }

  return (
    <ChartCard
      title="Expense Chart"
      description="Visual representation of your spending"
    >
      <div className="overflow-x-auto">
        <BarChart
          records={records.map((record) => ({
            ...record,
            date: String(record.date),
          }))}
        />
      </div>
    </ChartCard>
  );
};

export default RecordChart;
