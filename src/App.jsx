import * as React from "react";
import { pets as petsData, Pet } from "./Pet";

export function App() {
  const [pets, setPets] = React.useState(petsData);

  return (
    <main
      style={{
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {pets.map((pet) => (
          <Pet
            key={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            update={(newPet) => {
              setPets((pets) =>
                pets.map((p) => {
                  if (p.id === pet.id) {
                    return {
                      ...p,
                      ...newPet,
                    };
                  }
                  return p;
                })
              );
            }}
            remove={() =>
              setPets((pets) => pets.filter((p) => p.id !== pet.id))
            }
          />
        ))}
      </div>

      <form
        style={{
          gap: "1rem",
          display: "flex",
          flexDirection: "column",
          border: "1px solid black",
          borderRadius: "8px",
          padding: "1rem",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          setPets((pets) => [
            ...pets,
            {
              id: Date.now(),
              name: formData.get("name"),
              animal: formData.get("animal"),
              breed: formData.get("breed"),
            },
          ]);
        }}
      >
        <h2>Add a pet:</h2>
        <label htmlFor="name">Name:</label>
        <input required type="text" name="name" />

        <label htmlFor="animal">Animal:</label>
        <input required type="text" name="animal" />

        <label htmlFor="breed">Breed:</label>
        <input required type="text" name="breed" />

        <button>Add</button>
      </form>
    </main>
  );
}
