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
      rate: "₹85,000",
      registration: "₹31,000",
      allotment10: "₹12,07,424.50",
      allotment40: "₹50,84,825.30",
      days90: "₹3,161,624.90",
      possession: "₹3,161,624.90",
      total: "₹12,646,499.60",
    },
    {
      size: 158.159,
      rate: "₹85,000",
      registration: "₹31,000",
      allotment10: "₹13,13,351.50",
      allotment40: "₹55,19,749.10",
      days90: "₹3,432,047.80",
      possession: "₹3,432,047.80",
      total: "₹13,728,191.20",
    },
    {
      size: 162.077,
      rate: "₹85,000",
      registration: "₹31,000",
      allotment10: "₹13,46,654.50",
      allotment40: "₹56,56,487.30",
      days90: "₹3,517,070.90",
      possession: "₹3,517,070.90",
      total: "₹14,068,283.60",
    },
    {
      size: 167.233,
      rate: "₹85,000",
      registration: "₹31,000",
      allotment10: "₹1,390,480.50",
      allotment40: "₹58,36,431.70",
      days90: "₹3,628,956.10",
      possession: "₹3,628,956.10",
      total: "₹14,515,824.40",
    },
    {
      size: 179.395,
      rate: "₹85,000",
      registration: "₹31,000",
      allotment10: "₹1,493,857.50",
      allotment40: "₹6,260,885.50",
      days90: "₹3,892,871.50",
      possession: "₹3,892,871.50",
      total: "₹15,571,486.00",
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
