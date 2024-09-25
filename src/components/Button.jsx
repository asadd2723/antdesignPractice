import { Button } from "antd"
import { useState } from "react"
function Buttons() {
  const [loading, setLoading] = useState(false);

  const load = ()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }
  return (
    <>
      <h1>Front end Engineer</h1>
      <Button type="primary"  loading={loading} onClick={load}>Buy Now</Button>
    </>
  )
}

export default Buttons