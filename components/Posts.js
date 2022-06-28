import Post from './Post'

const posts = [
  {
    id: '123',
    username: 'phuhuwnglee',
    userImg:
      'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.6435-9/123584179_1449709761900168_1445279572392526145_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Wo95pKXMSawAX-hm7Rk&_nc_ht=scontent.fsgn5-3.fna&oh=00_AT9XUHxdPilbzyshjiWj853rHCcyA3pRI5snhY544OGypg&oe=62E1461F',
    img:
      'https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/275048914_1623249294705332_8847552586335853246_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=vadZD2pOHJgAX83pZmy&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT_BmlUFgYdiV78M8RXQzsFtf9DSpD0vstjugMXDPh93Jw&oe=62BEAF98',
    caption: 'My love',
  },
  {
    id: '124',
    username: 'phuhuwnglee',
    userImg:
      'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.6435-9/123584179_1449709761900168_1445279572392526145_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Wo95pKXMSawAX-hm7Rk&_nc_ht=scontent.fsgn5-3.fna&oh=00_AT9XUHxdPilbzyshjiWj853rHCcyA3pRI5snhY544OGypg&oe=62E1461F',
    img:
      'https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/275048914_1623249294705332_8847552586335853246_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=vadZD2pOHJgAX83pZmy&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT_BmlUFgYdiV78M8RXQzsFtf9DSpD0vstjugMXDPh93Jw&oe=62BEAF98',
    caption: 'My love',
  },
]

function Posts() {
  return (
    <div>
      {posts.map((post) => {
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      })}
    </div>
  )
}

export default Posts
