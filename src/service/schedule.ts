export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  place: string;
}

export const schedule: ScheduleItem[] = [
  {
    id: "ceremony",
    time: "16:00",
    title: "Cerimônia",
    place: "Igreja de São Francisco",
  },
  {
    id: "photos",
    time: "17:30",
    title: "Retratos no adro",
    place: "Largo de São Francisco",
  },
  {
    id: "reception",
    time: "19:00",
    title: "Recepção e jantar",
    place: "Casa da Ópera",
  },
  {
    id: "dance",
    time: "21:30",
    title: "Primeira dança",
    place: "Salão principal",
  },
];
