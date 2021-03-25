import React, { useState, useEffect } from "react";
import empty from "./assets/empty.png";
import rock from "./assets/rock.png";
import paper from "./assets/paper.png";
import scissor from "./assets/scissor.png";
import "./App.scss";

function GameComponent() {
  useEffect(() => {
    setName(prompt("Player name"));
  }, [prompt]);
  const pictures = [scissor, rock, paper];
  const [row, setRow] = useState(false);
  const [score, setScore] = useState(0);
  const [youWin, setWin] = useState(false);
  const [name, setName] = useState("player");
  const [started, setStarted] = useState(false);
  const [comp_score, setCompScore] = useState(0);
  const [random_player, setRandomPlayer] = useState(rock);
  const [random_computer, setRandomComputer] = useState(paper);
  const startFunction = () => {
    const user_num = Math.round(
      Math.random(Number(pictures.length - 1)) * Number(pictures.length - 1)
    );
    const comp_num = Math.round(
      Math.random(Number(pictures.length - 1)) * Number(pictures.length - 1)
    );
    setRandomPlayer(pictures[user_num]);
    setRandomComputer(pictures[comp_num]);
    setStarted(true);
    if (
      (user_num === 1 && comp_num === 0) ||
      (user_num === 0 && comp_num === 2) ||
      (user_num === 2 && comp_num === 1)
    ) {
      setWin(true);
      setRow(false);
      setScore(score + 1);
    } else if (
      (user_num === 0 && comp_num === 1) ||
      (user_num === 2 && comp_num === 0) ||
      (user_num === 1 && comp_num === 2)
    ) {
      setWin(false);
      setRow(false);
      setCompScore(comp_score + 1);
    } else {
      setRow(true);
      setWin(false);
    }
    if (score === 10 && score > comp_score) {
      alert("Congrats bud ! You won the game!");
      setScore(0);
      setCompScore(0);
      setStarted(false);
    } else if (comp_score === 10 && comp_score > score) {
      alert("Huh, it seems its not your day bud!");
      setScore(0);
      setCompScore(0);
      setStarted(false);
    }
  };
  return (
    <div className="component_wrapper">
      <div className="header">
        <div className="user_score">
          <p>score</p>
          <h1>{score}</h1>
        </div>
        <div className="game_name">
          <h1>rock</h1>
          <h1>paper</h1>
          <h1>scissors</h1>
        </div>
        <div className="user_score">
          <p>score</p>
          <h1>{comp_score}</h1>
        </div>
      </div>
      <div className="game_part">
        <div className='player'>
          <h3>{name ? name : "player"}</h3>
          {!started ? (
            <img src={empty} alt="Empty"/>
          ) : (
            <img src={random_player} alt="Random"  className={ youWin ? 'winner' : null }/>
          )}
        </div>
        {started ? (
          <div className="controller">
            <h1>
              {youWin && !row
                ? "you win"
                : row && !youWin
                ? "-- set --"
                : "you lose"}
            </h1>
            <button onClick={startFunction}>play again</button>
          </div>
        ) : (
          <div className="start">
            <button onClick={startFunction}>start</button>
          </div>
        )}
        <div className="computer">
          <h3>computer</h3>
          {!started ? (
            <img src={empty} alt="Empty" />
          ) : (
            <img src={random_computer} alt="Random" className={ !youWin && !row ? 'winner' : null }/>
          )}
        </div>
      </div>
    </div>
  );
}

export default GameComponent;
