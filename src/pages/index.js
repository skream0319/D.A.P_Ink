import React from "react"
import Layout from "../components/Layout"

export const Title = React.createContext()

const Home = () => {
  return ( 
    <Title.Provider value={"HOME"}>
    <Layout>

    </Layout>
    </Title.Provider>
  )
}

export default Home