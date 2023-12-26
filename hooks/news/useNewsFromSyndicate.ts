import { useState } from "react";
import { News } from "../../models/News";

export const useNewsFromSyndicate = () => {
  const [news, setNews] = useState<News[]>([
    {
      id: 1,
      title: "Exemplo de notícia",
      paragraph: "Exemplo de texto",
      date: new Date().toISOString(),
    },
    {
      id: 2,
      title: "Exemplo de notícia 2",
      paragraph: "Exemplo de texto 2",
      date: new Date().toISOString(),
    },
  ]);
  return { news };
};
