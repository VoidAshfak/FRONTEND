import React, { useEffect, useState } from 'react'

function Github() {

    const [githubData, setGithubData] = useState({})

    useEffect(() => {
        fetch('https://api.github.com/users/voidAshfak')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setGithubData(data)
            })
    }, [])

    return (
        <>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl' >{githubData.name} </div>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-xl' >{githubData.bio} </div>
        </>
    )
}

export default Github