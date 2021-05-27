export default {
  name: 'logo',
  title: 'Logo',
  type: 'object',
  fields: [
    {
      name: 'mainLogo',
      title: 'Primary Logo',
      type: 'singleLogo',
    },
    {
      name: 'variations',
      title: 'Logo Variations',
      type: 'array',
      of: [{ type: 'singleLogo' }]
    },
  ],
}