import React from "react";
import styles from "./List.module.css";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const List = ({ people, clearBirthdaysHandler, dismessBirthdayHandler }) => {
  const onClearBirthdays = () => {
    clearBirthdaysHandler();
  };

  const onDismessBirthday = (e) => {
    dismessBirthdayHandler(e.target.value);
  };

  const getAge = (date) => {
    const today = new Date();
    const birthDate = date;
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <React.Fragment>
      {people.map((person) => {
        const year = person.birthday.getFullYear();
        const month = monthNames[person.birthday.getMonth()];
        const day = person.birthday.getDate();
        const age = getAge(person.birthday);

        return (
          <div key={person.id} className={styles.person}>
            <div className={styles.personInfo}>
              <img src={person.picture}></img>
              <div>
                <h3>{person.name}</h3>
                <p>{`${month} ${day}, ${year} - (${age} yrs old)`}</p>
              </div>
            </div>
            <button
              className={styles.dismessButton}
              value={person.id}
              onClick={onDismessBirthday}
            >
              Dismess
            </button>
          </div>
        );
      })}
      <button onClick={onClearBirthdays} className={styles.clearButton}>
        Clear All
      </button>
    </React.Fragment>
  );
};

export default List;
