export default {
  name: 'upcomingEvents',
  title: 'Upcoming Events',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'eventsToShow',
      title: 'Events to Show',
      type: 'number',
      description: 'How many events to show in the list. Leave blank to show all upcoming events.',
    },
  ],
}
