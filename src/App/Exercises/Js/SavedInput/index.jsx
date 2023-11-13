import { useState, useEffect } from 'react';

const board = [
  { id: 1, nick: 'Janek' },
  { id: 2, nick: 'Bogusz' },
];

export const Savedinput = () => {
  const [nick, setNick] = useState(0);

  const handleUpdateNick = () => {
    setNick(nick + board);
  };

  const handleResetNick = () => {
    setNick();
    // usuń element z localStorage - bo wykonaliśmy operacje zerowania count
    localStorage.removeItem('nick');
  };

  // useEffect(() => {
  //   // pobierz wartość count z localStorage
  //   const storedCount = localStorage.getItem('nick');

  //   // sprawdź czy istnieje taki klucz w lokaStorage
  //   if (storedCount) {
  //     // jeżeli istnieje to ustaw wartość count jako state komponentu
  //     // Number() - konwertuje string na number - bo localStorage zwraca string
  //     setNick(Number(storedCount));
  //   }
  // }, []);

  useEffect(() => {
    if (nick === 0) return;
    // zapisz wartość count do localStorage na każdej zmianie stanu count
    localStorage.setItem('nick', nick);
  }, [nick]);

  return (
    <div>
      <input></input>
      <button onClick={handleUpdateNick}>Dodaj</button>
      <button onClick={handleResetNick}>Reset</button>
      <div className="Input-board">
        Tablica
        {board.id}
      </div>
    </div>
  );
};
