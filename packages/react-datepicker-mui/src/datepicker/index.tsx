import type { Theme } from "@mui/material";
import { useTheme } from "@mui/material";
import GlobalStyles from "@mui/material/GlobalStyles";
import { alpha } from "@mui/system/colorManipulator";
import { FC } from "react";
import type { ReactDatePickerProps } from "react-datepicker";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatepickerProps extends ReactDatePickerProps {}

const CustomGlobalStyles: FC<{ theme: Theme }> = (props: { theme: Theme }) => {
  const { theme } = props;
  if (theme.palette.mode === "dark") {
    return (
      <GlobalStyles
        styles={{
          ".datepicker .react-datepicker": {
            color: theme.palette.grey[300],
            backgroundColor: theme.palette.background.paper,
            background: alpha(theme.palette.grey![900], 0.8),
            boxShadow: theme.shadows[16],
            borderRadius: theme.shape.borderRadius,
            "& .react-datepicker__header": {
              color: theme.palette.grey[300],
              backgroundColor: theme.palette.background.paper,
              borderBottom: `1px solid ${alpha(theme.palette.grey![600], 0.2)}`,
            },
            "& .react-datepicker__current-month, \
              & .react-datepicker__day, \
              & .react-datepicker__day-name": {
              color: theme.palette.grey[300],
            },
            "": {
              color: theme.palette.grey[300],
            },
            "& .react-datepicker__day--disabled, \
              & .react-datepicker__month-text--disabled, \
              & .react-datepicker__quarter-text--disabled, \
              & .react-datepicker__year-text--disabled": {
              color: `${theme.palette.grey[500]}`,
            },
            "& .react-datepicker__day.react-datepicker__day--disabled:hover, \
              & .react-datepicker__month.react-datepicker__month-text--disabled:hover, \
              & .react-datepicker__quarter.react-datepicker__quarter-text--disabled:hover, \
              & .react-datepicker__year.react-datepicker__year-text--disabled:hover": {
              color: `${theme.palette.grey[500]}`,
              backgroundColor: "transparent",
            },
            "& .react-datepicker__day.react-datepicker__day--selected": {
              color: "white",
              backgroundColor: theme.palette.primary.main,
            },
            "& .react-datepicker__day--selected:hover": {
              color: "white",
              fontWeight: "bold",
              backgroundColor: alpha(theme.palette.primary.dark, 0.8),
            },
            "& .react-datepicker__time": {
              backgroundColor: theme.palette.background.paper,
            },
            "& .react-datepicker-time__header": {
              color: theme.palette.grey[300],
            },
            "& .react-datepicker__time-container": {
              backgroundColor: theme.palette.background.paper,
            },
            "& .react-datepicker__time-list::-webkit-scrollbar": {
              backgroundColor: theme.palette.grey[700],
            },
            "& .react-datepicker__time-list::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.grey[400],
            },
            "& .react-datepicker__time-list::-webkit-scrollbar-thumb:hover": {
              backgroundColor: theme.palette.grey[300],
            },
            "& .react-datepicker__time-list-item": {
              color: theme.palette.grey[300],
            },
            "& .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected":
              {
                backgroundColor: theme.palette.primary.main,
              },
            "& .react-datepicker__day--keyboard-selected, \
            & .react-datepicker__day:hover, \
            & .react-datepicker__time-list-item:hover, \
            & .react-datepicker__time--keyboard-selected:hover, \
            & .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover":
              {
                color: "#fff",
                backgroundColor: alpha(theme.palette.primary.main, 0.7),
              },
          },
        }}
      />
    );
  }
  return (
    <GlobalStyles
      styles={{
        ".datepicker .react-datepicker": {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[16],
          border: 0,
          borderRadius: theme.shape.borderRadius,
          "& .react-datepicker__day--selected": {
            color: "#fff",
            backgroundColor: theme.palette.primary.main,
          },
          "& .react-datepicker__header": {
            backgroundColor: theme.palette.background.default,
            borderBottom: `1px solid ${alpha(theme.palette.grey![600], 0.2)}`,
          },
          "& .react-datepicker__day--selected:hover": {
            color: "white",
            fontWeight: "bold",
            backgroundColor: theme.palette.primary.dark,
          },
          "& .react-datepicker__day.react-datepicker__day--disabled:hover, \
              & .react-datepicker__month.react-datepicker__month-text--disabled:hover, \
              & .react-datepicker__quarter.react-datepicker__quarter-text--disabled:hover, \
              & .react-datepicker__year.react-datepicker__year-text--disabled:hover": {
            color: `#ccc`,
            backgroundColor: "transparent",
          },
          "& .react-datepicker__time-container": {
            borderLeft: `1px solid ${alpha(theme.palette.grey![600], 0.2)}`,
          },
          "& .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected, \
            & .react-datepicker__day--in-range": {
            color: "#fff",
            backgroundColor: theme.palette.primary.main,
          },
          "& .react-datepicker__day--keyboard-selected, \
            & .react-datepicker__day:hover, \
            & .react-datepicker__day--in-selecting-range, \
            & .react-datepicker__time-list-item:hover, \
            & .react-datepicker__time--keyboard-selected:hover, \
            & .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover \
            & .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover":
            {
              color: "#fff",
              backgroundColor: alpha(theme.palette.primary.main, 0.4),
            },
          "& .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover, \
            & .react-datepicker__day--keyboard-selected:hover": {
            color: "#fff",
            backgroundColor: theme.palette.primary.dark,
          },
          "& .react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range, \
            & .react-datepicker__month-text--in-range, \
            & .react-datepicker__quarter-text--in-range, \
            & .react-datepicker__year-text--in-range), \
            & .react-datepicker__month-text--in-selecting-range:not(.react-datepicker__day--in-range, \
            & .react-datepicker__month-text--in-range, \
            & .react-datepicker__quarter-text--in-range, \
            & .react-datepicker__year-text--in-range), \
            & .react-datepicker__quarter-text--in-selecting-range:not(.react-datepicker__day--in-range, \
            & .react-datepicker__month-text--in-range, \
            & .react-datepicker__quarter-text--in-range, \
            & .react-datepicker__year-text--in-range), \
            & .react-datepicker__year-text--in-selecting-range:not(.react-datepicker__day--in-range, \
            & .react-datepicker__month-text--in-range, \
            & .react-datepicker__quarter-text--in-range, \
            & .react-datepicker__year-text--in-range)": {
            color: "#fff",
            backgroundColor: alpha(theme.palette.primary.main, 0.4),
          },
        },
      }}
    />
  );
};

export const Datepicker: FC<DatepickerProps> = (props: DatepickerProps) => {
  const theme = useTheme();
  return (
    <div className="datepicker">
      <CustomGlobalStyles theme={theme} />
      <ReactDatePicker {...props} />
    </div>
  );
};
