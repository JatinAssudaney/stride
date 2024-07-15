"use client";
import { IonApp, setupIonicReact } from "@ionic/react";
import React from "react";
import Model, { IExerciseData, IMuscleStats } from "react-body-highlighter";

setupIonicReact({});

const Profile = () => {
  const data: IExerciseData[] = [
    {
      name: "Bench Press",
      muscles: ["chest", "triceps", "front-deltoids"],
      frequency: 1,
    },
    {
      name: "Push Ups",
      muscles: [
        "chest",
        "upper-back",
        "abductors",
        "abs",
        "back-deltoids",
        "forearm",
      ],
    },
  ];

  const handleClick = React.useCallback(({ muscle, data }: IMuscleStats) => {
    const { exercises, frequency } = data;

    alert(
      `You clicked the ${muscle}! You've worked out this muscle ${frequency} times through the following exercises: ${JSON.stringify(
        exercises
      )}`
    );
  }, []);

  return (
    <IonApp>
      <div className="flex items-center">
        <Model
          data={data}
          style={{ width: "20rem", padding: "5rem" }}
          onClick={handleClick}
        />
        <Model
          type="posterior"
          data={data}
          style={{ width: "20rem", padding: "5rem" }}
          highlightedColors={["#e65a5a", "#db2f2f"]}
          onClick={handleClick}
        />
      </div>
    </IonApp>
  );
};

export default Profile;
