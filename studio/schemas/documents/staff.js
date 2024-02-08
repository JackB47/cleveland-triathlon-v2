export default {
  name: 'staff',
  title: 'Staff',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Profile Picture',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        },
      ],
    },
    {
      name: 'roles',
      title: 'Role(s)',
      type: 'array',
      description: 'List any roles here as individual items.',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'qualifications',
      title: 'Qualifications',
      type: 'array',
      description: 'List any qualifications here as individual items.',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          type: 'simpleRichtext',
        },
      ],
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'email',
      description: 'Optional: please provide an email address for this staff member.',
    },
  ],
}
