import Stories from './Stories'
import Posts from './Posts'

function Newfeeds() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      {/* Session */}
      <session className="col-span-2">
        {' '}
        {/* Stories */} <Stories />
        {/* Post */}
        <Posts />
      </session>
      {/* Sessions */}{' '}
      <section>
        {' '}
        {/* Mini profile */} {/* Suggestions */}{' '}
      </section>
    </main>
  )
}

export default Newfeeds
