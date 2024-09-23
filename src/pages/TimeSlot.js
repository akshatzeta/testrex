import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTimeSlot, toggleDay, switchTab } from '../redux/actions/timeSlotActions';

const TimeSlot = () => {
  const dispatch = useDispatch();
  const timeSlots = useSelector((state) => state.timeSlots.timeSlots);
  const selectedDays = useSelector((state) => state.timeSlots.selectedDays);
  const activeTab = useSelector((state) => state.timeSlots.activeTab);

  const [isOpen, setIsOpen] = useState(false);
  const [newTimeSlot, setNewTimeSlot] = useState({
    startTime: '',
    endTime: '',
    duration: '',
    days: [],
  });

  const toggleDayHandler = (day) => {
    const updatedDays = newTimeSlot.days.includes(day)
      ? newTimeSlot.days.filter(d => d !== day)
      : [...newTimeSlot.days, day];
    setNewTimeSlot({ ...newTimeSlot, days: updatedDays });
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const switchTabHandler = (tab) => {
    dispatch(switchTab(tab));
  };

  const handleAddTimeSlot = (e) => {
    e.preventDefault();
    if (newTimeSlot.startTime && newTimeSlot.endTime && newTimeSlot.duration && newTimeSlot.days.length > 0) {
      dispatch(addTimeSlot(newTimeSlot));
      setNewTimeSlot({ startTime: '', endTime: '', duration: '', days: [] });
      closeModal();
    }
  };

  return (
    <div className="p-3 flex flex-col w-full">
      <div className="flex justify-between items-center mb-3">
        <div className="flex space-x-2">
          <button
            onClick={() => switchTabHandler('timeSlot')}
            className={`text-xl ${activeTab === 'timeSlot' ? 'underline text-purple-500' : 'text-gray-600'} transition-all duration-300 hover:text-purple-700`}
          >
            Time Slot
          </button>
          <button
            onClick={() => switchTabHandler('leaveDays')}
            className={`text-xl ${activeTab === 'leaveDays' ? 'underline text-purple-500' : 'text-gray-600'} transition-all duration-300 hover:text-purple-700`}
          >
            Leave Days
          </button>
        </div>
        <button onClick={openModal} className="bg-purple-500 text-white py-1.5 px-3 rounded">
          + Add
        </button>
      </div>

      {activeTab === 'timeSlot' && (
        <table className="min-w-full bg-white text-sm">
          <thead>
            <tr>
              <th className="py-1">Details</th>
              <th className="py-1">Slots</th>
              <th className="py-1">Days</th>
              <th className="py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((data, index) => (
              <tr key={index} className="text-center border-b">
                <td className="py-1">{`${data.startTime} - ${data.endTime}`}</td>
                <td className="py-1">{data.duration}</td>
                <td className="py-1">
                  {data.days.map((day, dayIndex) => (
                    <span key={`${day}-${dayIndex}`} className={`inline-block mx-0.5 ${selectedDays.includes(day) ? 'bg-purple-500 text-white' : 'bg-gray-300 text-black'} w-6 h-6 rounded-full`}>
                      {day}
                    </span>
                  ))}
                </td>
                <td className="py-1">...</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {activeTab === 'leaveDays' && (
        <div className="mb-3">
          <label className="block text-gray-700 text-sm mb-1">Days</label>
          <div className="flex space-x-1">
            {['Sa', 'M', 'Tu', 'W', 'Th', 'F', 'Su'].map((day, index) => (
              <button
                key={index}
                type="button"
                className={`w-6 h-6 rounded-full ${selectedDays.includes(day) ? 'bg-purple-500 text-white' : 'bg-gray-300 text-black'}`}
                onClick={() => dispatch(toggleDay(day))}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg w-1/3">
            <h2 className="text-lg mb-3">Add Time Slot</h2>
            <form onSubmit={handleAddTimeSlot}>
              <div className="flex space-x-2 mb-3">
                <div className="flex-1">
                  <label className="block text-gray-700 text-sm mb-1">Start Time</label>
                  <input
                    type="time"
                    value={newTimeSlot.startTime}
                    onChange={(e) => setNewTimeSlot({ ...newTimeSlot, startTime: e.target.value })}
                    className="w-full border rounded p-1 text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-700 text-sm mb-1">End Time</label>
                  <input
                    type="time"
                    value={newTimeSlot.endTime}
                    onChange={(e) => setNewTimeSlot({ ...newTimeSlot, endTime: e.target.value })}
                    className="w-full border rounded p-1 text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-700 text-sm mb-1">Duration</label>
                  <select
                    value={newTimeSlot.duration}
                    onChange={(e) => setNewTimeSlot({ ...newTimeSlot, duration: e.target.value })}
                    className="w-full border rounded p-1 text-sm"
                  >
                    <option value="">Select Duration</option>
                    <option value="15 Minutes">15 Minutes</option>
                    <option value="30 Minutes">30 Minutes</option>
                    <option value="45 Minutes">45 Minutes</option>
                    <option value="60 Minutes">60 Minutes</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm mb-1">Days</label>
                <div className="flex space-x-1">
                  {['Sa', 'M', 'Tu', 'W', 'Th', 'F', 'Su'].map((day, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`w-6 h-6 rounded-full ${newTimeSlot.days.includes(day) ? 'bg-purple-500 text-white' : 'bg-gray-300 text-black'}`}
                      onClick={() => toggleDayHandler(day)}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <button type="button" onClick={closeModal} className="bg-gray-500 text-white py-1 px-3 rounded text-sm">Cancel</button>
                <button type="submit" className="bg-purple-500 text-white py-1 px-3 rounded text-sm">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeSlot;
