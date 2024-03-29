import { lazy, Suspense } from "react";
import Loader from "../custom/loader/main";
import DashboardLayout from "../components/dashboardLayout/main";

const Main = lazy( () => import("../components/transcriptRequest/main"))

const TranscriptRequests = () => {
    return(
      <DashboardLayout>
        <Suspense fallback={<Loader/>}>
            <Main/>
        </Suspense>
      </DashboardLayout> 
    );
}
export default TranscriptRequests