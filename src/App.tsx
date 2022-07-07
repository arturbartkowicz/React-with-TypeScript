import React, { useEffect, useState } from 'react';
import './App.css';
import NewReminder from './components/NewReminder';
import ReminderList from './components/ReminderList';
import Reminder from './interfaces/Reminder';
import reminderService from './services/reminder';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([])

  useEffect(() => {
    (async () => {
      const reminders = await reminderService.getReminders()
      setReminders(reminders)
    })()
  }, [])

  const removeReminder = (id: number) => {
    setReminders(reminders.filter(reminder => reminder.id !== id))
  }

  const addReminder = async (title: string) => {
    const newRreminder = await reminderService.addReminder(title)
    setReminders([newRreminder, ...reminders])
  }

  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder}/>
      <ReminderList items={reminders} onRemoveReminder={removeReminder}/>
    </div>
  );
}

export default App;
