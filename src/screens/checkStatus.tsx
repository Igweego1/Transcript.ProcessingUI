import { lazy, Suspense } from "react";
import Loader from "../custom/loader/main";
import Layout from "../components/applyLayout/main";

const Main = lazy( () => import("../components/checkStatus/main"))

const CheckStatus = () => {
    return(
      <Layout>
        <Suspense fallback={<Loader/>}>
            <Main/>
        </Suspense>
      </Layout> 
    );
}
export default CheckStatus;