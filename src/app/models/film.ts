export class Film {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  year: number;
  genre: string;
  isNew: boolean;

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    rating: number,
    year: number,
    genre: string,
    isNew: boolean
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.rating = rating;
    this.year = year;
    this.genre = genre;
    this.isNew = isNew;
  }
}

export const FILMS: Film[] = [
  {
    id: 1,
    title: "Captain America",
    description:
      "Steve Rogers becomes Captain America, battling the Red Skull and Hydra in World War II, while struggling to adjust to his new identity.",
    image: "captain_america.jfif",
    rating: 8.5,
    year: 2008,
    genre: "Action",
    isNew: true,
  },
  {
    id: 2,
    title: "Back Action",
    description:
      "An elite team races against time to prevent an international conspiracy, facing betrayal and danger as they uncover secrets.",
    image: "back_action.jfif",
    rating: 8.5,
    year: 2008,
    genre: "Action",
    isNew: false,
  },
  {
    id: 3,
    title: "The Sand Castle",
    description: "A gripping war drama following a young soldier's journey in the Middle East.",
    image: "/the_sand_castle.jfif",
    rating: 7.9,
    year: 2017,
    genre: "Drama",
    isNew: false,
  },
];
