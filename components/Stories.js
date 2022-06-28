import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";

function Stories() {
  const [suggestions, setSuggestions] = useState([]);

  const Users = [];

  const createRandomUser = () => {
    return {
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };
  };

  Array.from({ length: 20 }).forEach(() => {
    Users.push(createRandomUser());
  });
  useEffect(() => {
    setSuggestions(Users);
  }, []);
  return (
    <div className="flex space-x-2 p-6 bg-white border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {suggestions.map((profile) => (
        <Story
          key={profile.userId}
          avatar={profile.avatar}
          username={profile.username}
        />
      ))}
      {/*Story */}
      {/*Story */}
      {/*Story */}
      {/*Story */}
      {/*Story */}
      {/*Story */}
    </div>
  );
}

export default Stories;
