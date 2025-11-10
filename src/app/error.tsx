
export default function error() {
  


  return (
    <div>
      <h2>Something went wrong</h2>
      <button
        onClick={
          () => reset()   
        }
      >
        Try Again
      </button>
    </div>
  )
}

