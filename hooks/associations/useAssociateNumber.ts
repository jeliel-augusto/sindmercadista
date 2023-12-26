import { useState } from "react";

export const useAssociateNumbers = () => {
  const [associatesNumber, setAssociatesNumber] = useState<number>(400);
  return { associatesNumber };
};
