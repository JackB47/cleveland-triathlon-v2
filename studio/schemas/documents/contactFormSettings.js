export default {
  name: 'contactFormSettings',
  title: 'Contact Form Settings',
  type: 'document',
  fields: [
    {
      name: 'topics',
      title: 'Topics',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
