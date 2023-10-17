const dates = [
  // ... (previously defined dates from MON SEP 8TH to MON SEP 15TH)
  {
    _id: '1', text: 'TUE SEP 16TH', timeSlots: [
      { start: '7:00 AM', end: '8:00 AM', booked: false },
      { start: '8:00 AM', end: '9:00 AM', booked: true },
      { start: '9:00 AM', end: '10:00 AM', booked: false },
      { start: '10:00 AM', end: '11:00 AM', booked: true },
      { start: '11:00 AM', end: '12:00 PM', booked: true },
      { start: '12:00 PM', end: '1:00 PM', booked: false },
      { start: '1:00 PM', end: '2:00 PM', booked: true },
      { start: '2:00 PM', end: '3:00 PM', booked: true },
      { start: '3:00 PM', end: '4:00 PM', booked: true },
      { start: '4:00 PM', end: '5:00 PM', booked: true },
      { start: '5:00 PM', end: '6:00 PM', booked: true },
      { start: '6:00 PM', end: '7:00 PM', booked: true },
    ]
  },
  {
    _id: '2', text: 'WED SEP 17TH', timeSlots: [
      { start: '7:00 AM', end: '8:00 AM', booked: false },
      { start: '8:00 AM', end: '9:00 AM', booked:  true },
      { start: '9:00 AM', end: '10:00 AM', booked:  true },
      { start: '10:00 AM', end: '11:00 AM', booked:  true },
      { start: '11:00 AM', end: '12:00 PM', booked:  true },
      { start: '12:00 PM', end: '1:00 PM', booked:  true },
      { start: '1:00 PM', end: '2:00 PM', booked:  true},
      { start: '2:00 PM', end: '3:00 PM', booked:  true },
      { start: '3:00 PM', end: '4:00 PM', booked:  true },
      { start: '4:00 PM', end: '5:00 PM', booked:  true },
      { start: '5:00 PM', end: '6:00 PM', booked:  true },
      { start: '6:00 PM', end: '7:00 PM', booked:  true },
    ]
  },
  {
    _id: '3', text: 'THU SEP 18TH', timeSlots: [
      { start: '7:00 AM', end: '8:00 AM', booked: true },
      { start: '8:00 AM', end: '9:00 AM', booked: true },
      { start: '9:00 AM', end: '10:00 AM', booked: true },
      { start: '10:00 AM', end: '11:00 AM', booked: true },
      { start: '11:00 AM', end: '12:00 PM', booked: true },
      { start: '12:00 PM', end: '1:00 PM', booked: true },
      { start: '1:00 PM', end: '2:00 PM', booked: true },
      { start: '2:00 PM', end: '3:00 PM', booked: true },
      { start: '3:00 PM', end: '4:00 PM', booked: false },
      { start: '4:00 PM', end: '5:00 PM', booked: false},
      { start: '5:00 PM', end: '6:00 PM', booked: false },
      { start: '6:00 PM', end: '7:00 PM', booked: false },
    ]
  },
  {
    _id: '4', text: 'FRI SEP 19TH', timeSlots: [
      { start: '7:00 AM', end: '8:00 AM', booked: false },
      { start: '8:00 AM', end: '9:00 AM', booked: false },
      { start: '9:00 AM', end: '10:00 AM', booked: false },
      { start: '10:00 AM', end: '11:00 AM', booked: false },
      { start: '11:00 AM', end: '12:00 PM', booked: false },
      { start: '12:00 PM', end: '1:00 PM', booked: false },
      { start: '1:00 PM', end: '2:00 PM', booked: false },
      { start: '2:00 PM', end: '3:00 PM', booked: false },
      { start: '3:00 PM', end: '4:00 PM', booked: false },
      { start: '4:00 PM', end: '5:00 PM', booked: false },
      { start: '5:00 PM', end: '6:00 PM', booked: false },
      { start: '6:00 PM', end: '7:00 PM', booked: false },
    ]
  },
  {
    _id: '5', text: 'SAT SEP 20TH', timeSlots: [
      { start: '7:00 AM', end: '8:00 AM', booked: false },
      { start: '8:00 AM', end: '9:00 AM', booked: false },
      { start: '9:00 AM', end: '10:00 AM', booked: false },
      { start: '10:00 AM', end: '11:00 AM', booked: false },
      { start: '11:00 AM', end: '12:00 PM', booked: false },
      { start: '12:00 PM', end: '1:00 PM', booked: false },
      { start: '1:00 PM', end: '2:00 PM', booked: false },
      { start: '2:00 PM', end: '3:00 PM', booked: false },
      { start: '3:00 PM', end: '4:00 PM', booked: false },
      { start: '4:00 PM', end: '5:00 PM', booked: false },
      { start: '5:00 PM', end: '6:00 PM', booked: false },
      { start: '6:00 PM', end: '7:00 PM', booked: false },
    ]
  },
  {
    _id: '6', text: 'SAT SEP 21ST', timeSlots: [
      { start: '7:00 AM', end: '8:00 AM', booked: false },
      { start: '8:00 AM', end: '9:00 AM', booked: false },
      { start: '9:00 AM', end: '10:00 AM', booked: false },
      { start: '10:00 AM', end: '11:00 AM', booked: false },
      { start: '11:00 AM', end: '12:00 PM', booked: false },
      { start: '12:00 PM', end: '1:00 PM', booked: false },
      { start: '1:00 PM', end: '2:00 PM', booked: false },
      { start: '2:00 PM', end: '3:00 PM', booked: false },
      { start: '3:00 PM', end: '4:00 PM', booked: false },
      { start: '4:00 PM', end: '5:00 PM', booked: false },
      { start: '5:00 PM', end: '6:00 PM', booked: false },
      { start: '6:00 PM', end: '7:00 PM', booked: false },
    ]
  },
  {
    _id: '7', text: 'SUN SEP 22ND', timeSlots: [
      { start: '7:00 AM', end: '8:00 AM', booked: false },
      { start: '8:00 AM', end: '9:00 AM', booked: false },
      { start: '9:00 AM', end: '10:00 AM', booked: false },
      { start: '10:00 AM', end: '11:00 AM', booked: false },
      { start: '11:00 AM', end: '12:00 PM', booked: false },
      { start: '12:00 PM', end: '1:00 PM', booked: false },
      { start: '1:00 PM', end: '2:00 PM', booked: false },
      { start: '2:00 PM', end: '3:00 PM', booked: false },
      { start: '3:00 PM', end: '4:00 PM', booked: false },
      { start: '4:00 PM', end: '5:00 PM', booked: false },
      { start: '5:00 PM', end: '6:00 PM', booked: false },
      { start: '6:00 PM', end: '7:00 PM', booked: false },
    ]
  },
];

export default dates;