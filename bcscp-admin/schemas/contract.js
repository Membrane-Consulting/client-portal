export default {
  name: 'contract',
  title: 'contract',
  type: 'file',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'dateSigned',
      title: 'Date Signed',
      type: 'datetime',
    },
  ],
}