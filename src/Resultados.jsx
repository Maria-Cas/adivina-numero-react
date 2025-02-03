function Resultados(props) {
  const { score, highscore, guessNumber, secretNumber } = props;
  let message = "";
  if (guessNumber === secretNumber) {
    message = "Numero correcto";
  } else if (score === 20) {
    message = "Empieza a adivinar";
  } else if (score === 0) {
    message = "You lost the game!!";
  } else if (guessNumber > secretNumber) {
    message = "Te has pasado";
  } else {
    message = "Te has quedado corto";
  }

  return (
    <section className="right">
      <p className="message">{message}</p>
      <p className="label-score">
        :100: Score: <span className="score">{score}</span>
      </p>
      <p className="label-highscore">
        :medalla_de_oro: Highscore:{" "}
        <span className="highscore">{highscore}</span>
      </p>
    </section>
  );
}

export default Resultados;
