import * as React from 'react';
import useSWR from 'swr'


export interface StudentDetailProps {
    studentId: any
}

const MS_PER_HOUR = 60 * 60 * 1000
export function StudentDetail({ studentId }: StudentDetailProps) {
    const { data, error, mutate, isValidating } = useSWR(`/students/${studentId}`, {
        revalidateOnFocus: false, // chuyển qua tab khác khi qay lại thì sẽ ko fetch lại API
        // revalidateOnMount: false, 
        dedupingInterval: MS_PER_HOUR // tính tại thời điểm user trigger useSWR thì sau MS_PER_HOUR giây thì ko fetch lại api
    })
    function handleMutateClick() {
        mutate({ name: 'huy đẹp trai' }, true) // dùng true khi làm form data
    }
    return (
        <div>
            Name: {data?.name || '---'}

            <button onClick={handleMutateClick}>mutate</button>
        </div>
    );
}
