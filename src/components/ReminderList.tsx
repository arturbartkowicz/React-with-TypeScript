import React from 'react';
import Reminder from '../interfaces/Reminder';

interface RemindersListProps {
  items: Reminder[]
  onRemoveReminder: (id: number) => void
}

function ReminderList({ items, onRemoveReminder }: RemindersListProps) {
  return (
   <ul className='list-group'>
		{items.map(item => 
      <li className='list-group-item' key={item.id}>
        {item.title}
        <button className='btn btn-outline-danger mx-2 rounded-pill' onClick={() => onRemoveReminder(item.id)}>Delete</button>
      </li>)}
	 </ul>
  );
}

export default ReminderList;