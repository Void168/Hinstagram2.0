import { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'

function Suggestions() {
  const [suggestions, setSuggestions] = useState([])
  const Users = []

  const createRandomUser = () => {
    return {
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    }
  }

  Array.from({ length: 5 }).forEach(() => {
    Users.push(createRandomUser())
  })
  useEffect(() => {
    setSuggestions(Users)
  }, [])
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Đề xuất</h3>
        <button className="text-gray-600">Xem thêm</button>
      </div>
      {suggestions.map((profile) => (
        <div
          key={profile.userId}
          className="flex items-center justify-between mt-3"
        >
          <img
            className="w-10 h-10 rounded-full border p-[2px]"
            src={profile.avatar}
            alt=""
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
          </div>

          <button className="text-blue-400 text-sm">Theo dõi</button>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
