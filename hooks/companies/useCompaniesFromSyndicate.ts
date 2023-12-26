import { useState } from "react";
import { Company } from "../../models/Company";

export const useCompaniesFromSyndicate = () => {
  const [companies, setCompanies] = useState<Company[]>([
    {
      id: 1,
      name: "Nova Era SuperAtacado",
    },
  ]);
  return { companies };
};
