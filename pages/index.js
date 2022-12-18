import CustomHead from "../components/utils/CustomHead"
import Image from "next/image"
export default function Home() {


  return (

    <div className="flex flex-col min-h-screen space-y-10 justify-center items-center">
      <CustomHead></CustomHead>
      <div className="relative w-44 h-11 flex justify-center ">
        <a >
          <Image src="/static/img/logo.png" alt="logo" layout="fill" />
        </a>
      </div>
      <p className="text-slate-300 text-center font-movieNameFont">
        Our service is down for now, <br/>
        Thanks for your support.

      </p>
    </div>


  )
}
