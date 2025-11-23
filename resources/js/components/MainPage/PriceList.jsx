import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PriceList() {
  const pricingData = [
    {
      size: 145.697,
      rate: "₹80,000",
      registration: "₹31,000",
      allotment10: "₹11,34,576.00",
      allotment40: "₹47,93,431.30",
      days90: "₹29,79,503.65",
      possession: "₹29,79,503.65",
      total: "₹1,19,18,014.60",
    },
    {
      size: 158.159,
      rate: "₹80,000",
      registration: "₹31,000",
      allotment10: "₹12,34,272.00",
      allotment40: "₹52,03,431.10",
      days90: "₹32,34,351.55",
      possession: "₹32,34,351.55",
      total: "₹1,29,37,406.20",
    },
    {
      size: 162.077,
      rate: "₹80,000",
      registration: "₹31,000",
      allotment10: "₹12,65,616.00",
      allotment40: "₹53,32,333.30",
      days90: "₹33,14,474.65",
      possession: "₹33,14,474.65",
      total: "₹1,32,57,898.60",
    },
    {
      size: 167.233,
      rate: "₹80,000",
      registration: "₹31,000",
      allotment10: "₹13,06,864.00",
      allotment40: "₹55,01,965.70",
      days90: "₹34,19,914.85",
      possession: "₹34,19,914.85",
      total: "₹1,36,79,659.40",
    },
    {
      size: 179.395,
      rate: "₹80,000",
      registration: "₹31,000",
      allotment10: "₹14,04,160.00",
      allotment40: "₹59,02,095.50",
      days90: "₹36,68,627.80",
      possession: "₹36,68,627.80",
      total: "₹1,46,74,511.00",
    },
  ];

  return (
    <div className="amenities py-5" id="amenities">
      <h2 className="text-center text-base sm:text-lg md:text-xl font-bold mb-4 font-sans">
        Price List
      </h2>

      {/* 🔥 Responsive Scroll Container */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 overflow-x-auto">
        <Table className="min-w-[900px] w-full border border-gray-300 text-center">
          <TableHeader>
            <TableRow className="bg-[#4285f4] text-white">
              <TableHead
                colSpan={8}
                className="py-2 font-bold text-sm sm:text-base"
              >
                PRICE LIST – PLOTS
              </TableHead>
            </TableRow>

            <TableRow className="bg-gray-700 text-white">
              <TableHead className="font-bold border text-xs sm:text-sm">
                Plot Size (Sq. Yd.)
              </TableHead>
              <TableHead className="font-bold border text-xs sm:text-sm">
                Rate / Sq. Yd.
              </TableHead>
              <TableHead className="font-bold border text-xs sm:text-sm">
                Registration Amount
              </TableHead>
              <TableHead className="font-bold border text-xs sm:text-sm">
                10% On Allotment
              </TableHead>

              <TableHead className="font-bold border text-xs sm:text-sm whitespace-normal break-words">
                40% Within 30 Days <br /> (Include 50% EDC/IDC)
              </TableHead>

              <TableHead className="font-bold border text-xs sm:text-sm whitespace-normal break-words">
                25% Within 90 Days <br /> (Include 25% EDC/IDC)
              </TableHead>

              <TableHead className="font-bold border text-xs sm:text-sm whitespace-normal break-words">
                25% On Possession <br /> (Include 25% EDC/IDC)
              </TableHead>

              <TableHead className="font-bold border text-xs sm:text-sm">
                Total Cost
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {pricingData.map((row, index) => (
              <TableRow
                key={index}
                className="even:bg-gray-50 hover:bg-gray-100 transition"
              >
                <TableCell className="border text-xs sm:text-sm font-medium">
                  {row.size}
                </TableCell>
                <TableCell className="border text-xs sm:text-sm font-medium">
                  {row.rate}
                </TableCell>
                <TableCell className="border text-xs sm:text-sm font-medium">
                  {row.registration}
                </TableCell>
                <TableCell className="border text-xs sm:text-sm font-medium">
                  {row.allotment10}
                </TableCell>
                <TableCell className="border text-xs sm:text-sm font-medium">
                  {row.allotment40}
                </TableCell>
                <TableCell className="border text-xs sm:text-sm font-medium">
                  {row.days90}
                </TableCell>
                <TableCell className="border text-xs sm:text-sm font-medium">
                  {row.possession}
                </TableCell>
                <TableCell className="border text-xs sm:text-sm font-semibold">
                  {row.total}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
