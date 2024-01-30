export default {
  name: 'contactForm',
  title: 'Contact Form',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description:
        'This will automatically generate a contact form. Provide a title and subtitle to help users understand what the form is for.',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
  ],
}
