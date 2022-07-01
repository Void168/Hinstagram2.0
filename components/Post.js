import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
  HeartIconFill,
} from '@heroicons/react/outline'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import Moment from 'react-moment'

function Post(props) {
  const { username, userImg, image, caption, id } = props
  const { data: session } = useSession()
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const [likes, setLikes] = useState([])
  const [hasLiked, setHasLiked] = useState(false)

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'desc'),
        ),
        (snapshot) => setComment(snapshot.docs),
      ),
    [db, id],
  )

  useEffect(
    () =>
      onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) =>
        setLikes(snapshot.docs),
      ),
    [db, id],
  )

  useEffect(() => {
    setHasLiked(
      likes.findIndex((likes) => (likes.id === session?.user?.uid) !== -1),
    )
  }, [likes])

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
        username: session.user.username,
      })
    }
  }

  const sendComment = async (e) => {
    e.preventDefault()

    const commentToSend = comment
    setComment('')

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    })
  }
  return (
    <div className="bg-white my-7 border rounded-sm">
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
      <img src={image} className="object-cover w-full" alt="" />
      {/* {buttons } */}
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            {hasLiked ? (
              <HeartIconFill className="btn text-red-500" />
            ) : (
              <HeartIcon className="btn" onClick={likePost} />
            )}

            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}
      {/* {caption} */}
      {likes.length > 0 && <p className="font-bold mb-1">{likes.length}</p>}
      <div className="p-5 truncate">
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </div>
      {/* {comments} */}
      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center space-x-2 mb-3">
              <img
                className="h-7 rounded-full"
                src={comment.data().image}
                alt=""
              />
              <p className="text-sm flex-1">
                <span className="font-bold">{comment.data().username}</span>
                {comment.data().comment}
              </p>
              <Moment fromNow className="text-xs pr-5">
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}
      {/* {input box} */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            type="text"
            className="border-none flex-1 outline-none"
            placeholder="Nhập bình luận..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            className="font-semibold text-blue-400"
            type="submit"
            disable={!comment.trim()}
            onClick={sendComment}
          >
            Đăng bình luận
          </button>
        </form>
      )}
    </div>
  )
}

export default Post
