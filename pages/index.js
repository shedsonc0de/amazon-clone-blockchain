import Main from "../components/Main"
import Sidebar from "../components/Sidebar"

const styles = {
  container: 'h-full flex bg-[#ff]'
}
export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Main />
    </div>
  )
}
