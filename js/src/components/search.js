import React from 'react'

function Search(props) {
    console.log("this is props", props.jobs)
    if(props.jobs) {
        console.log("this is jobs", props.jobs)
        return props.jobs.map((Job, index) => {
        return (
            <div key={index} className="newJob">
                <span>Class: {Job.Name}<p>Level: {Job.Level}</p><br /></span>
            </div>
            )
        })
    }
    else {
        return (
        <div className="newJob"></div>
        )
    }
}

export default Search;