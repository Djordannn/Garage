import Loader from "./components/loader"

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75">            
        <Loader/>
    </div>
  )
}

export default Loading