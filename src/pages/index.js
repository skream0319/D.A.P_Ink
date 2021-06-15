import React from "react"
import Layout from "../components/Layout"
import { Meta } from "../components/index"

export const HeaderTitle = React.createContext()

const indexPage = () => {
  return ( 
    <HeaderTitle.Provider value={"D.A.P_Ink"}>
    <Layout>
      <Meta
        title=""
        desc="福岡県で店舗デザイン、施工からグラフィックデザインまでワントップでサポート。全国対応可。勝敗が大きく左右される開業前のマーケィングなど総合的なコンサルティングもD.A.Pの強みです。"
      />

    </Layout>
    </HeaderTitle.Provider>
  )
}

export default indexPage