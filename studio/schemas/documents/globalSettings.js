export default {
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  groups: [
    {
      title: 'General',
      name: 'general',
    },
    {
      title: 'Header',
      name: 'header',
    },
    {
      title: 'Footer',
      name: 'footer',
    },
  ],
  fields: [
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      group: 'general',
    },
    {
      name: 'header',
      title: 'Header',
      type: 'object',
      collapsible: true,
      group: 'header',
      fields: [
        {
          name: 'logo',
          title: 'Logo',
          type: 'image',
        },
        {
          name: 'navItems',
          title: 'Navigation Items',
          type: 'array',
          of: [{type: 'navigationItem'}],
        },
      ],
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'object',
      collapsible: true,
      group: 'footer',
      fields: [
        {
          name: 'navItems',
          title: 'Navigation Items',
          type: 'array',
          of: [{type: 'navigationItem'}],
        },
      ],
    },
  ],
}
