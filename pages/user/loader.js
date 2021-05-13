import React,{useEffect} from 'react'
import Loader from "../../components/PageChange/pageLoader";
import { useRouter } from 'next/router';

export default function loader() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(()=>{
            router.push("/admin/dashboard");
        },3000)

    }, [])

    return (
        <div>
            <Loader/>
        </div>
    )
}
