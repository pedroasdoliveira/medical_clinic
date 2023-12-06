import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterLuxon } from "@mui/x-date-pickers-pro/AdapterLuxon";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      {children}
    </LocalizationProvider>
  );
};

export default Providers;
