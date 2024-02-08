export default {
  name: 'staffList',
  title: 'Staff List',
  type: 'object',
  fields: [
    {
      name: 'blockTitle',
      title: 'Block Title',
      type: 'string',
      description: 'Optional title displayed above the staff list.',
    },
    {
      name: 'showAllStaff',
      title: 'Show All Staff?',
      type: 'boolean',
      description:
        'Check this box to show all staff members. Uncheck this to select the staff you want to list.',
      initialValue: true,
    },
    {
      hidden: ({parent}) => parent.showAllStaff,
      name: 'staffToDisplay',
      title: 'Staff to Display',
      type: 'array',
      description: 'Select the staff members you want to display.',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'staff',
            },
          ],
        },
      ],
    },
  ],
}
