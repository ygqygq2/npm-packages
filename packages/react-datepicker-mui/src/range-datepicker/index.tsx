import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {
  Box,
  Button,
  Input,
  InputAdornment,
  Popover,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type { Theme } from "@mui/system/createTheme";
import { endOfDay, format, startOfDay, subDays, subHours, subMinutes } from "date-fns";
import { MouseEvent, SyntheticEvent, memo, useEffect, useRef, useState, type FC } from "react";
import type { ReactDatePickerProps } from "react-datepicker";

import { Datepicker } from "../datepicker";

export type Dates = [Date | null, Date | null];

interface RangeDatepickerProps extends Partial<ReactDatePickerProps> {
  dates?: Dates;
  callbackDateChange?: ({ dates }: { dates: Dates }) => void;
}

export const RangeDatepicker: FC<RangeDatepickerProps> = memo((props) => {
  const { dates = [null, null], callbackDateChange, ...otherProps } = props;
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const [start, end] = dates;
  const now = new Date();
  const fifteenMinutesAgo = subMinutes(now, 15);
  const [startDate, setStartDate] = useState<Date | null>(start || fifteenMinutesAgo);
  const [endDate, setEndDate] = useState<Date | null>(end || now);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const prevDatesRef = useRef(dates);

  useEffect(() => {
    const [prevStart, prevEnd] = prevDatesRef.current;
    if (start !== prevStart) {
      setStartDate(start);
    }
    if (end !== prevEnd) {
      setEndDate(end);
    }
    prevDatesRef.current = dates;
  }, [dates, start, end]);

  const handlePopoverOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsPopoverOpen(true);
  };

  const handlePopoverClose = () => {
    // setAnchorEl(null);
    setIsPopoverOpen(false);
  };

  const handleStartDateChange = (
    date: Date | null,
    _event: SyntheticEvent<any, Event> | undefined,
  ): void => {
    setStartDate(date);
    if (endDate && date && date > endDate) {
      setEndDate(date);
    }
  };

  const handleEndDateChange = (
    date: Date | null,
    _event: SyntheticEvent<any, Event> | undefined,
  ): void => {
    setEndDate(date);
    if (startDate && date && date < startDate) {
      setStartDate(date);
    }
  };

  const handleRangeDateChange = (dates: Dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleClear = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const handleConfirm = () => {
    const [prevStart, prevEnd] = prevDatesRef.current;
    // 添加判断,如果时间未变化则不更新
    if (startDate === prevStart && endDate === prevEnd) {
      setIsPopoverOpen(false);
      return;
    }
    callbackDateChange?.({ dates: [startDate, endDate] });

    // 关闭弹窗
    // setAnchorEl(null);
    setIsPopoverOpen(false);
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const formatTime = (date: Date) => {
    if (!smUp) {
      if (isToday(date)) {
        return `今天 ${format(date, "HH:mm")}`;
      }
      return format(date, "yyyy-MM-dd");
    }
    return format(date, "yyyy-MM-dd HH:mm:ss");
  };

  const shortcutsItems = [
    {
      label: "近 30 分钟",
      updateTime: () => {
        const now = new Date();
        setEndDate(now);
        const thirtyMinutesAgo = subMinutes(now, 30);
        setStartDate(thirtyMinutesAgo);
      },
    },
    {
      label: "近 1 小时",
      updateTime: () => {
        const now = new Date();
        setEndDate(now);
        const oneHourAgo = subHours(now, 1);
        setStartDate(oneHourAgo);
      },
    },
    {
      label: "近 3 小时",
      updateTime: () => {
        const now = new Date();
        setEndDate(now);
        const threeHoursAgo = subHours(now, 3);
        setStartDate(threeHoursAgo);
      },
    },
    {
      label: "近 12 小时",
      updateTime: () => {
        const now = new Date();
        setEndDate(now);
        const twelveHoursAgo = subHours(now, 12);
        setStartDate(twelveHoursAgo);
      },
    },
    {
      label: "今天",
      updateTime: () => {
        const now = new Date();
        setEndDate(now);
        const startOfToday = startOfDay(now);
        setStartDate(startOfToday);
      },
    },
    {
      label: "昨天",
      updateTime: () => {
        const now = new Date();
        const startOfToday = startOfDay(now);
        setEndDate(endOfDay(subDays(startOfToday, 1))); // 设置结束时间为昨天的最后一秒
        const startOfYesterday = startOfDay(subDays(startOfToday, 1)); // 获取昨天的开始时间
        setStartDate(startOfYesterday);
      },
    },
    {
      label: "近 3 天",
      updateTime: () => {
        const now = new Date();
        setEndDate(now);
        const threeDaysAgo = subDays(now, 2);
        const startOfThreeDaysAgo = startOfDay(threeDaysAgo);
        setStartDate(startOfThreeDaysAgo);
      },
    },
    {
      label: "近 7 天",
      updateTime: () => {
        const now = new Date();
        setEndDate(now);
        const sevenDaysAgo = subDays(now, 6);
        const startOfSevenDaysAgo = startOfDay(sevenDaysAgo);
        setStartDate(startOfSevenDaysAgo);
      },
    },
    {
      label: "近 30 天",
      updateTime: () => {
        const now = new Date();
        setEndDate(now);
        const thirtyDaysAgo = subDays(now, 29);
        const startOfThirtyDaysAgo = startOfDay(thirtyDaysAgo);
        setStartDate(startOfThirtyDaysAgo);
      },
    },
  ];

  return (
    <Box sx={{ p: 1 }}>
      <Box
        onClick={handlePopoverOpen}
        sx={{
          pl: 1,
          borderRadius: 1,
          border: isPopoverOpen
            ? `1px solid ${primaryColor}`
            : `1px solid ${theme.palette.divider}`,
          width: smUp ? 400 : "auto",
        }}
      >
        <Stack spacing={0.5} direction="row" alignItems="center">
          <Input
            disableUnderline
            placeholder="开始时间"
            value={startDate ? formatTime(startDate) : ""}
            startAdornment={
              <InputAdornment position="start">
                <SvgIcon sx={{ fontSize: 16 }}>
                  <AccessTimeIcon />
                </SvgIcon>
              </InputAdornment>
            }
            inputProps={{
              sx: {
                fontSize: 14,
                textAlign: "center",
                color: theme.palette.text.secondary,
              },
            }}
          />
          <Typography
            variant="caption"
            sx={{
              display: "inline-block",
              color: theme.palette.text.disabled,
            }}
          >
            至
          </Typography>
          <Input
            disableUnderline
            placeholder="结束时间"
            value={endDate ? formatTime(endDate) : ""}
            inputProps={{
              sx: {
                fontSize: 14,
                textAlign: "center",
                color: theme.palette.text.secondary,
              },
            }}
          />
        </Stack>
      </Box>
      <Popover
        disableAutoFocus
        open={isPopoverOpen}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        slotProps={{
          paper: {
            sx: { px: 2, pt: 1, pb: 0, pointerEvents: "auto" },
          },
        }}
        sx={{ top: 10 }}
      >
        <Box>
          <Box
            sx={{ display: "flex", flexDirection: mdUp ? "row" : "column", alignItems: "center" }}
          >
            <Stack direction={mdUp ? "column" : "row"} spacing={1}>
              {shortcutsItems.map((option) => (
                <Typography
                  key={option.label}
                  variant="caption"
                  onClick={option.updateTime}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  {option.label}
                </Typography>
              ))}
            </Stack>
            {mdUp && <Box sx={{ mx: 4 }} />}
            <Datepicker
              open
              selected={startDate}
              startDate={startDate}
              timeFormat="HH:mm"
              timeIntervals={10}
              timeCaption="Time"
              inline
              /* @ts-ignore */
              onChange={mdUp ? handleStartDateChange : handleRangeDateChange}
              showTimeSelect={mdUp}
              /* @ts-ignore */
              selectsRange={!mdUp ? true : undefined}
              endDate={!mdUp ? endDate : null}
              {...otherProps}
            />
            {mdUp && (
              <Datepicker
                open
                selected={endDate}
                endDate={endDate}
                onChange={handleEndDateChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={10}
                timeCaption="Time"
                inline
                {...otherProps}
              />
            )}
          </Box>
          <Box sx={{ py: 1, display: "flex", justifyContent: "flex-end" }}>
            <Button size="small" onClick={handleClear}>
              清空
            </Button>
            <Button size="small" onClick={handleConfirm}>
              确认
            </Button>
          </Box>
        </Box>
      </Popover>
    </Box>
  );
});
RangeDatepicker.displayName = "RangeDatepicker";
