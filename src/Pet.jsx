import * as React from "react";

export const pets = [
  {
    id: 1,
    name: "Luna",
    animal: "Dog",
    breed: "Havanese",
  },
  {
    id: 2,
    name: "Pepper",
    animal: "Bird",
    breed: "Cockatiel",
  },
  {
    id: 3,
    name: "Doink",
    animal: "Cat",
    breed: "Mixed",
  },
];

export function Pet(props) {
  const [edit, setEdit] = React.useState(false);
  const [name, setName] = React.useState(props.name);
  const [animal, setAnimal] = React.useState(props.animal);
  const [breed, setBreed] = React.useState(props.breed);

  const handleUpdate = () => {
    setEdit(false);
    props.update({
      name,
      animal,
      breed,
    });
  };
  return (
    <section
      style={{
        padding: "1rem",
        border: "1px solid black",
        borderRadius: "8px",
      }}
    >
      {edit ? (
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdate();
          }}
        >
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          />
          <input
            type="text"
            name="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
          <div style={{ display: "flex", gap: "1rem" }}>
            <button type="reset" onClick={() => setEdit(false)}>
              Cancel
            </button>
            <button type="submit" onClick={handleUpdate}>
              Save
            </button>
          </div>
        </form>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div>{props.name}</div>
          <div>{props.animal}</div>
          <div>{props.breed}</div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button onClick={() => setEdit(true)}>Edit</button>
            <button onClick={props.remove}>Remove</button>
          </div>
        </div>
      )}
    </section>
  );
}
