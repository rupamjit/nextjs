
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const DashBoardRoute = async() => {


  return (
    <div>
        <div className='flex items-center justify-between mb-4'>
            <h2 className='text-xl font-medium'>Your Blog Articles</h2>

            <Link className={buttonVariants()} href="/dashboard/create">Create New Post</Link>
        </div>
    </div>
  )
}

export default DashBoardRoute