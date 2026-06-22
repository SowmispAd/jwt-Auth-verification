import { useEffect, useState } from "react"
import api from "../utils/api"

function Dashboard() {

  const [data, setData] = useState(null)

  useEffect(() => {

    const fetchData = async () => {
      try {

        const res = await api.get("/dashboard")

        setData(res.data)

      } catch (error) {
        console.log(error)
      }
    }

    fetchData();

  }, [])

  return <div>{data ? data.message : "Loading..."}</div>
}

export default Dashboard