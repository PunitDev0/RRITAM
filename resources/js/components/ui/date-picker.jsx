"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerDemo({ date, setDate, maxDate }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!date}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
          onClick={() => console.log("PopoverTrigger clicked")} // Debugging
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 z-[1000]" style={{ zIndex: 1060 }}>
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            console.log("Date selected:", selectedDate); // Debugging
            setDate(selectedDate);
          }}
          maxDate={maxDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}