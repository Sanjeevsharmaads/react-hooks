import React,{useState,useEffect} from "react";
import axios from "axios";
import useResource from "./useResource"

const  ResourceList = ({resource}) => {
    const resources = useResource(resource)

    return(
        <div>
            <ul>{
                resources.map(record =><li key={record.id}>{record.title}</li>)
            }</ul>
        </div>
    )
}
export default ResourceList;