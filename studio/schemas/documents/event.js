export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Event Title',
      type: 'string',
      description: 'The name of the event (e.g. Cleveland Steelman 2024)',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Slug for the event',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
      },
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'array',
      of: [{type: 'simpleRichtext'}],
      description:
        'This is a brief description of the event. It is shown on cards that link to the event page.',
    },
    {
      title: 'Date',
      name: 'date',
      type: 'object',
      description: 'Please provide the start and end datetime for the event.',
      validation: (Rule) => Rule.required(),
      fields: [
        {name: 'start', type: 'datetime', title: 'Start Date'},
        {name: 'end', type: 'datetime', title: 'End Date'},
      ],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'pageBuilder',
    },
    {
      name: 'registrationLink',
      title: 'Event Registration Link',
      type: 'url',
      description: 'If this event has a registration link, please provide it here.',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description:
        'An optional image for the event. This will be shown on the event page and the event card. Please upload images with a resolution of 1920x800. If possible, optimise via https://squoosh.app/',
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      title: 'Location',
      name: 'location',
      type: 'object',
      fields: [
        {name: 'line_one', type: 'string', title: 'Address Line One'},
        {name: 'line_two', type: 'string', title: 'Address Line Two'},
        {name: 'line_three', type: 'string', title: 'Address Line Three'},
        {name: 'city', type: 'string', title: 'City'},
        {name: 'postcode', type: 'string', title: 'Postcode'},
        {
          name: 'maplink',
          type: 'url',
          title: 'Map Link',
          description: 'An optional link to Google Maps with the venue',
        },
      ],
    },
    {
      name: 'stages',
      title: 'Stages',
      type: 'array',
      description: 'Please provide the stages for this event. E.g. Swim: 2000m',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Type',
              type: 'string',
            },
            {
              name: 'distance',
              title: 'Distance',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'assets',
      title: 'Assets',
      type: 'array',
      description:
        'Please provide any assets for this event. For example, this might be a PDF of the course map.',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'file',
              title: 'File',
              type: 'file',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
