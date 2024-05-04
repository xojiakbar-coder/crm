import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
import { useState } from "react";

const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(moment());

  return (
    <div style={{ marginTop: "1.4px" }}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          label="Date"
          value={selectedDate}
          onChange={setSelectedDate}
          views={["year", "month", "day"]}
          openTo="day"
          slotProps={{ textField: { size: "small" } }}
          // renderInput={(params) => <TextField {...params} size="small" />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default DateTimePicker;
