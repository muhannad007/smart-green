import { BarChart } from "@mui/x-charts/BarChart";

const Charts = () => {
  return (
    <BarChart
      yAxis={[
        {
          label: "Flow Level",
          width: 50, // Increase this if the label is still cut off
        },
      ]}
      // 2. Add left margin to the whole chart to house that width
      margin={{ left: 10 }}
      xAxis={[
        {
          id: "barCategories",
          data: [
            "Point 1",
            "Point 2",
            "Point 3",
            "Point 4",
            "Point 5",
            "Point 6",
            "Point 7",
            "Point 8",
          ],
          label: "Sewage points",
          height: 58,
        },
      ]}
      series={[
        {
          data: [2, 5, 3, 1, 8, 10, 3, 15, 2],
        },
      ]}
      height={500}
      width={700}
    />
  );
};

export default Charts;
