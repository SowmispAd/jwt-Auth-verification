import api from "../utils/api"

const handleLogin = async () => {

  try {

    const res = await api.post("/api/auth/login", {
      email,
      password
    })

    localStorage.setItem("token", res.data.token)

    window.location.href = "/dashboard"

  } catch (error) {
    console.log(error)
  }

}