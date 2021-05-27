export default {
  name: 'brand',
  title: 'Brand Assets',
  type: 'object',
  fields: [
    {
      name: 'overview',
      title: 'Brand Overview',
      type: 'text',
    },
    {
      name: 'colorDesc',
      title: 'Color Description',
      type: 'text',
    },
    {
      name: 'colors',
      title: 'Colors',
      type: 'array',
      of: [{ type: 'color' }],
    },
    {
      name: 'fontDesc',
      title: 'Font Description',
      type: 'text',
    },
    {
      name: 'fonts',
      title: 'Fonts',
      type: 'array',
      of: [{ type: 'font' }],
    },
    {
      name: 'logoDesc',
      title: 'Logo Description',
      type: 'text',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'logo',
    },
  ],
}