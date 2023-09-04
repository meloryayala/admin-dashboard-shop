import {CubeIcon as OrderIcon} from "@heroicons/react/24/outline";
import {ArrowUpRightIcon as ArrowGoTo} from "@heroicons/react/20/solid";
import React from "react";

const TrackItemLink = () => {
  return(
      <button className="btn btn-outline w-full flex justify-between normal-case">
        <div className="flex items-center gap-3">
            <OrderIcon className="h-6 w-6" />
            Track client package
        </div>
          <ArrowGoTo className="h-6 w-6" />
      </button>
  )
}

export default TrackItemLink