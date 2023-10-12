import { StudentDetail } from "@/components/swr/StudentDetail";
import { useState } from "react";

export default function SWRPage() {
    const [detailList, setDetailList] = useState([1, 1, 1]);

    function handleAddClick() {
        setDetailList((preList) => [...preList, 1]);
    }
    return (
        <div>
            <h1>SWR Playground</h1>
            <button onClick={handleAddClick}>add detail</button>

            <ul>
                {detailList.map((item, index) => (
                    <li key={index}>
                        <StudentDetail studentId="lea319jollj7y1rs" />
                    </li>
                ))}
            </ul>


        </div>
    );
}
