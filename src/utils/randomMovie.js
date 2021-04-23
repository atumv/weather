const randomMovie = () => {
  const moviesList = [
    "Шрек",
    "Пила",
    "Чужой",
    "Бэтмен",
    "Рэмбо",
    "Терминатор",
    "Аладдин",
    "Аватар",
    "Титаник",
    "Сияние",
    "Дракула"
  ];

  const randomIndex = Math.floor(Math.random() * moviesList.length);
  const randomMovie = moviesList[randomIndex];

  return randomMovie;
};

export default randomMovie;
