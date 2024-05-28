import Counter from '@/components/Counter/Counter'
import React from 'react'

interface Props { }

const page: React.FC<Props> = () => {
    return <div className="bg-purple-600 py-8 px-8 min-h-screen">
        <Counter />
    </div>
}

export default page