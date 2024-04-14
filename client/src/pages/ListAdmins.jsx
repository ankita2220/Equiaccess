import { useEffect, useState } from "react";
import axios from "axios";

export default function ListAdmins() {

    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/admin/admins')
            .then(res => {
                // console.log(res.data);
                setAdmins(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div className="">
            <h1 className="">List of Admins</h1>
            <div>
            {
                admins.length > 0 &&
                admins.map((adminItem, adminIndex) => {
                    return(
                        <div className="flex gap-20 ">
                            <div>{ adminItem.userName }</div>
                            <div>{ adminItem.password }</div>
                            <div>{ adminItem.type }</div>
                            <div>{ adminItem.society }</div>
                        </div>
                    )
                })  
            }
            </div>
        </div>
    );
}
