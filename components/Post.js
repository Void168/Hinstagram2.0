import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'

function Post({ username, userImg, img, caption, id }) {
  const { data: session } = useSession()
  return (
    <div className="bg-white my-7 border rounded-sm">
      Post
      {/* {Hearder} */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt=""
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* {img} */}
      <img src={img} className="object-cover w-full" alt="" />
      {/* {buttons } */}
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn" />
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}
      {/* {caption} */}
      <div className="p-5 truncate">
        <span>{username}</span>
        {caption}
      </div>
      {/* {comments} */}
      {/* {input box} */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            type="text"
            className="border-none flex-1 outline-none"
            placeholder="Nhập bình luận..."
          />
          <button className="font-semibold text-blue-400">
            Đăng bình luận
          </button>
        </form>
      )}
    </div>
  )
}

export default Post
