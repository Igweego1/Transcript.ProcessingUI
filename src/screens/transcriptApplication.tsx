import { lazy, Suspense } from "react";
import Loader from "../custom/loader/main";
import Layout from "../components/applyLayout/main";

const Main = lazy( () => import("../components/transcriptApplication/main"))

const TranscriptApplication = () => {
    return(
      <Layout>
        <Suspense fallback={<Loader/>}>
            <Main/>
        </Suspense>
      </Layout> 
    );
}
export default TranscriptApplication;