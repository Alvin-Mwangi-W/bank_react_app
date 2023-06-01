import { features } from "../constants"
import styles, { layout } from "../style"
import Button from "./Button"

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2>You do the business, <br /> we’ll handle the money.</h2>
      </div>
    </section>
  )
}

export default Business