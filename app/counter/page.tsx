import Counter from '@/components/Counter/Counter'
import React from 'react'

interface Props { }

const page: React.FC<Props> = () => {
    return <div>
        <Counter />
    </div>
}

export default page