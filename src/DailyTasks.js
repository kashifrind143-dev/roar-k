import { useState, useEffect } from 'react';

function DailyTasks() {
  const [tasks, setTasks] = useState([
    { name: 'Login Today', done: false, reward: 10 },
    { name: 'Mine 50 Tokens', done: false, reward: 20 },
    { name: 'Play Game Once', done: false, reward: 15 },
  ]);

  useEffect(() => {
    const lastDay = localStorage.getItem('lastTaskDay');
    if (lastDay !== new Date().toDateString()) {
      localStorage.setItem('lastTaskDay', new Date().toDateString());
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      const savedTasks = JSON.parse(localStorage.getItem('tasks'));
      if (savedTasks) setTasks(savedTasks);
    }
  }, []);

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = true;
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    localStorage.setItem('roarTokens', parseInt(localStorage.getItem('roarTokens') || 0) + newTasks[index].reward);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Daily Tasks</h2>
      <ul className="list-disc">
        {tasks.map((task, i) => (
          <li key={i} className={task.done ? 'line-through' : ''}>
            {task.name} - Reward: {task.reward}
            {!task.done && (
              <button onClick={() => completeTask(i)} className="ml-2 bg-green-500 px-2 text-white">
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DailyTasks;