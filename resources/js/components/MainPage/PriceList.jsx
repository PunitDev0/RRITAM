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
      allotment10: "₹12,07,424.00",
      allotment40: "₹50,84,825.00",
      days90: "₹31,61,625.00",
      possession: "₹31,61,625.00",
      total: "₹1,26,46,500.00",
    },
    {
      size: 158.159,
      rate: "₹85,000",
      registration: "₹31,000",
      allotment10: "₹13,13,352.00",
      allotment40: "₹55,19,749.00",
      days90: "₹34,32,050.00",
      possession: "₹34,32,050.00",
      total: "₹1,37,28,201.00",
    },
    {
      size: 162.077,
      rate: "₹85,000",
      registration: "₹31,000",
      allotment10: "₹13,46,654.00",
      allotment40: "₹56,56,487.00",
      days90: "₹35,17,071.00",
      possession: "₹35,17,071.00",
      total: "₹1,40,68,284.00",
    },
    {
      size: 167.233,
      rate: "₹85,000",
      registration: "₹31,000",
      allotment10: "₹13,90,480.00",
      allotment40: "₹58,36,432.00",
      days90: "₹36,28,956.00",
      possession: "₹36,28,956.00",
      total: "₹1,45,15,824.00",
    },
    {
      size: 179.395,
      rate: "₹85,000",
      registration: "₹31,000",
      allotment10: "₹14,93,858.00",
      allotment40: "₹62,60,886.00",
      days90: "₹38,92,872.00",
      possession: "₹38,92,872.00",
      total: "₹1,55,71,486.00",
    },
  ];

  return (
    <div className="amenities py-5" id="pricelist">
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
      <p className="max-w-7xl mx-auto px-4 text-gray-500 text-[10px] mt-4 text-right sm:text-center">
        <a href="/disclaimer" className="underline hover:text-blue-600">Refer Disclaimer</a>
      </p>
    </div>
  );
}
