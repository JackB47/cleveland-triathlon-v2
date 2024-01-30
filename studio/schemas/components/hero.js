export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      description:
        'Please upload images with a resolution of 1920x800. If possible, optimise via https://squoosh.app/',
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
      name: 'overlayOpacity',
      title: 'Overlay Opacity',
      type: 'number',
      description:
        'A number between 0 and 100. This will be used to set the opacity of the overlay on top of the background image. 0 is fully transparent, 100 is fully opaque.',
    },
  ],
}
