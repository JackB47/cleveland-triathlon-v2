export default {
  name: 'pageBuilder',
  title: 'Page Builder',
  type: 'array',
  of: [
    {
      type: 'richtext',
    },
    {
      type: 'hero',
    },
    {
      type: 'contactForm',
    },
    {
      type: 'upcomingEvents',
    },
    {
      type: 'staffList',
    },
    {
      type: 'pastEvents',
    },
    {
      name: 'divider',
      title: 'Divider',
      type: 'object',
      fields: [
        {
          name: 'divider',
          title: 'Divider',
          type: 'string',
          initialValue: '---',
        },
      ],
    },
  ],
}
