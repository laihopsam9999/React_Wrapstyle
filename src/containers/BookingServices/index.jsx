import React from "react";
import "date-fns";
import { InputNomal } from "../../components/Form/InputForm";
import useStyleBooking from "./style";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DateTimePicker } from "@mui/lab";
import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { Button } from "../../components/Button/Button";
import { useTheme } from "@mui/material/styles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Tổ chức sự kiện",
  "Thuê sân Drag",
  "Thuê sân hai cua",
  "Sữa chữa",
  "Bảo trì",
  "Đo máy",
  "Độ xe",
  "Khác",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function BookingService(props) {
  const [value, setValue] = React.useState(new Date("Chưa chọn"));

  const classes = useStyleBooking();

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div className={classes.BookingContainer}>
      <div className={classes.BookingFunction}>
        <div className={classes.BookingForm}>
          <h3>Đặt lịch</h3>
          <div className={classes.BookingFormChild}>
            <InputNomal
              type="text"
              placeholder="Họ và tên"
              name="username"
              id="username"
            />
          </div>
          <div className={classes.BookingFormChild}>
            <InputNomal
              type="text"
              placeholder="Số điện thoại"
              name="username"
              id="username"
            />
          </div>
          <div className={classes.BookingFormChild}>
            <FormControl fullWidth>
              <Select
                multiple
                displayEmpty
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>Dịch vụ</em>;
                  }

                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  <em>Dịch vụ</em>
                </MenuItem>
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className={classes.BookingFormChild}>
            <FormControl fullWidth>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="Chọn ngày giờ hẹn"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                />
              </LocalizationProvider>
            </FormControl>
          </div>
          <div className={classes.BookingFormChild}>
            <Button backgroundColor={"red"}>Đặt lịch</Button>
          </div>
        </div>
        <div className={classes.BookingCalendar}></div>
      </div>
    </div>
  );
}
export default BookingService;
