import React, {useState, useEffect} from 'react';


type TimeEntry = {
  startTime: Date
  endTime: Date
  projectId: number
  id: number
};

const entries: TimeEntry[] = [
  {
    id:1, 
    projectId:1, 
    startTime: new Date('2024-02-22 03:20:00'), 
    endTime: new Date('2024-02-22 06:40:00'),
  },
  {
    id:2, 
    projectId:1, 
    startTime: new Date('2024-02-25 13:20:00'), 
    endTime: new Date('2024-02-26 16:40:00'),
  }
]


function Entry(entry_data: TimeEntry) {
  return (
      <div className="ms-2 me-auto">
        <div className="fw-bold">EntryProject {entry_data.projectId}</div>
        <div>Entry Start: {entry_data.startTime.toLocaleString()}</div>
        <div>Entry End: {entry_data.endTime.toLocaleString()}</div>
      </div>
  );
  }


function TimeEntries () {
  // const TIME_ENTRIES_URL = "http://localhost:80/time_entries"
  // const [tasks, setTasks] = useState(null)

  // useEffect(() => {
  //     fetch(TIME_ENTRIES_URL)
  //     .then(response => response.json())
  //     .then(data => setTasks(data))
  //   }, [])

  const allTimeEntries = entries.map(entry =>
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <Entry {...entry}/>
    </li>
  );

  return (
    <ol className="list-group">
      {allTimeEntries}
    </ol>
  )
}

export default TimeEntries;