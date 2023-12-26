import React from "react";
import Card from "../ui/card/Card";
import { News } from "../../models/News";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const NewsItem = ({ news }: { news: News }) => {
  return (
    <Card
      title={news.title}
      paragraph={news.paragraph}
      date={format(news.date, "dd/MM/yyyy HH:mm", { locale: ptBR })}
    />
  );
};
